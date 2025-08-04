SELECT
  vou.ledcd,
  sum(amtdr - amtcr) AS outamt
FROM
  apsplus_aoi_2021.dbo.auto_voucher_vw AS vou
WHERE
  vou.ledcd IN (
    SELECT
      DISTINCT ptyledcd
    FROM
      apsplus_aoi_2021.dbo.trnsinfo_vw AS si
  )
GROUP BY
  vou.ledcd;