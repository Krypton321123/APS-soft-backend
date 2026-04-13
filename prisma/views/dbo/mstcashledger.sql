SELECT
  led.ledcd,
  lednm,
  buntcd,
  unt.untshnm
FROM
  APSPLUS_AOI_2021.dbo.mstlednfo_vw AS led
  JOIN APSPLUS_AOI_2021.dbo.mstuntnfo AS unt ON unt.untcd = led.buntcd
  JOIN APSPLUS_AOI_2021.dbo.mstledctdetnfo_vw AS ledct ON ledct.ledcd = led.ledcd
  JOIN APSPLUS_AOI_2021.dbo.mstledctnfo_vw AS ct ON ct.ledctcd = ledct.ledctcd
WHERE
  ct.sysledcd = 6
  AND untshnm = 'RAN';