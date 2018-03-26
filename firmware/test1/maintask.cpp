#include <common/utils.h>
#include <common/stm32.h>
#include <enc28j60/enc28j60spistm32.h>
#include <enc28j60/enc28j60.h>
#include "main.h"

extern "C" void maintask()
{
  uint32_t uid[3];
  HAL_GetUID(uid);
  printf("Device %08lx%08lx%08lx is running at %lu\n", uid[0], uid[1], uid[2], HAL_RCC_GetHCLKFreq());

  auto spi = mstd::to_shared(Enc28j60::CreateSpiStm32(SPI1, SPI1_CS_GPIO_Port, SPI1_CS_Pin, true));
//  auto enc = mstd::to_shared(Enc28j60::CreateDevice(spi));

//  enc->test();

  for(;;);
}
