#include <enc28j60/enc28j60lwip.h>
#include "lwip.h"
#include "lwip/netifapi.h"
#include <common/utils.h>

namespace Enc28j60
{
  namespace
  {
    class LwipNetifImpl : public LwipNetif
    {
    public:
      //arbitrary thread
      LwipNetifImpl(std::unique_ptr<Spi>&& spi)
        : m_env(std::make_unique<EnvImpl>(m_netif))
        , m_spi(std::move(spi))
      {
        ip4_addr_t ipaddr = {};
        ip4_addr_t netmask = {};
        ip4_addr_t gw = {};
        if (netifapi_netif_add(&m_netif, &ipaddr, &netmask, &gw, (void*)this, &init, &tcpip_input) != ERR_OK)
        {
          //fixme
        }
      }

      //arbitrary thread
      static void initLwip()
      {
        OS::BinarySemaphore sem;
        tcpip_init(&initDone, (void*)&sem);
        sem.wait();
      }

    protected:
      netif m_netif = {};
      class EnvImpl : public Env
      {
      public:
        EnvImpl(netif& netif)
          : m_netif(netif)
        {
        }

        //arbitrary thread
        virtual std::unique_ptr<Pbuf> allocatePbuf(size_t size) override
        {
          //fixme
        }

        //arbitrary thread
        virtual void input(std::unique_ptr<Pbuf>&& packet) override
        {
          //fixme
          //m_netif.input();
        }

        //arbitrary thread
        virtual void setLinkState(bool linked) override
        {
          //fixme
        }

      protected:
        netif& m_netif;
      };
      std::unique_ptr<EnvImpl> m_env;
      std::unique_ptr<Spi> m_spi;
      std::unique_ptr<Device> m_device;

    protected:
      //tcp thread
      err_t init()
      {
        m_device = CreateDevice(std::move(m_env), std::move(m_spi));
        //fixme: return !ERR_OK on error
    
        m_netif.hwaddr_len = ETHARP_HWADDR_LEN;
    //    m_netif.hwaddr[0] = ?;
    //    m_netif.hwaddr[1] = ?;
    //    m_netif.hwaddr[2] = ?;
    //    m_netif.hwaddr[3] = ?;
    //    m_netif.hwaddr[4] = ?;
    //    m_netif.hwaddr[5] = ?;
        m_netif.mtu = 1500;
        m_netif.flags = NETIF_FLAG_BROADCAST | NETIF_FLAG_ETHARP;
        m_netif.name[0] = 'e';
        m_netif.name[1] = 'n';
        m_netif.output = etharp_output;
        m_netif.linkoutput = linkoutput;
        return ERR_OK;
      }

      //tcp thread
      static err_t init(netif *netif)
      {
        return ((LwipNetifImpl*)netif->state)->init();
      }

      //tcp thread
      static void initDone(void *arg)
      {
        ((OS::BinarySemaphore*)arg)->signal();
      }

      //tcp thread
      err_t linkoutput(pbuf *p)
      {
        //fixme
        //m_device->output();
      }

      //tcp thread
      static err_t linkoutput(netif *netif, pbuf *p)
      {
        return ((LwipNetifImpl*)netif->state)->linkoutput(p);
      }
    };
  }
}

auto Enc28j60::CreateLwipNetif(std::unique_ptr<Spi>&& spi) -> std::unique_ptr<LwipNetif>
{
  return std::make_unique<LwipNetifImpl>(std::move(spi));
}
