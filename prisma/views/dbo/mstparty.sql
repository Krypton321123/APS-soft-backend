SELECT
  led.ledcd,
  led.lednm,
  led.empcd,
  area.areacd,
  area.areanm,
  led.ledadr1
FROM
  APSPLUS_AOI_2021.dbo.mstlednfo_vw AS led
  JOIN APSPLUS_AOI_2021.dbo.mstareanfo_vw AS area ON area.areacd = led.areacd;