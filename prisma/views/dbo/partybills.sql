SELECT
  si.sicd AS billno,
  CONVERT(varchar(11), sidt, 103) AS billdt,
  led.lednm AS ptynm,
  led.ledadr1 AS addr,
  sum(sidet.pckqty) AS totqty,
  (sum(sidet.amt) + (sum(sidet.amt) * 5 / 100)) AS amt
FROM
  APSPLUS_AOI_2021.dbo.trnsinfo_vw AS si
  JOIN APSPLUS_AOI_2021.dbo.trnsidetnfo_vw AS sidet ON si.sicd = sidet.sicd
  JOIN APSPLUS_AOI_2021.dbo.mstlednfo_vw AS led ON si.ptyledcd = led.ledcd
WHERE
  CONVERT(varchar(11), sidt, 103) = CONVERT(varchar(11), getdate(), 103)
GROUP BY
  si.sicd,
  sidt,
  led.lednm,
  led.ledadr1;