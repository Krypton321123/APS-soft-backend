SELECT
  emp.empcd,
  led.ledcd,
  led.lednm
FROM
  APSPLUS_AOI_2021.dbo.mstlednfo_vw AS led
  JOIN APSPLUS_AOI_2021.dbo.mstempnfo_vw AS emp ON led.ledcd = emp.empledcd;