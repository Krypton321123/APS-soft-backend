SELECT
  DISTINCT itm.rowid,
  itm.itmcd,
  itmnm,
  pcksz,
  wgtconv,
  itmsubcat,
  itmcatgrp,
  lsitmnm,
  152 AS itmrate
FROM
  apsplus_aoi_2021.dbo.mstitmnfo_vw AS itm
  LEFT JOIN apsplus_aoi_2021.dbo.mstpckcstdetnfo_vw AS pckcstdet ON pckcstdet.itmcd = itm.itmcd
  AND pckcstdet.sts = 'Active'
WHERE
  (
    itmnm LIKE 'saavli_m%'
    OR itmnm IN (
      'Tin_mustard_oil_15_kg._saavli',
      'Tin_mustard_oil_15_ltr_saavli'
    )
  );