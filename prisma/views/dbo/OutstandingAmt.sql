SELECT
  vou.ledcd,
  sum(amtdr - amtcr) AS outamt,
  CONVERT(varchar(11), max(mbilldt), 103) AS billdt
FROM
  apsplus_aoi_2021.dbo.auto_voucher_vw AS vou
  JOIN (
    SELECT
      DISTINCT ptyledcd,
      max(sidt) AS mbilldt
    FROM
      apsplus_aoi_2021.dbo.trnsinfo_vw AS si
    GROUP BY
      ptyledcd
  ) AS ptysi ON ptysi.ptyledcd = vou.ledcd
GROUP BY
  vou.ledcd;