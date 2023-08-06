-- standard sql statement
SELECT Order_ID, Order_Date, Ship_Date, Ship_Mode, Customer_ID, Customer_Name, Segment 
FROM `composite-drive-276806.hyper_sources.sample_superstore`;

-- enclose the statement in a stored procedure to save query in Bigquery
CREATE OR REPLACE PROCEDURE `composite-drive-276806.hyper_sources.spoc_sample_superstore`()
BEGIN

SELECT Order_ID, Order_Date, Ship_Date, Ship_Mode, Customer_ID, Customer_Name, Segment 
FROM `composite-drive-276806.hyper_sources.sample_superstore`;

END;

-- call stored procedure with gcp.bq_to_df function
CALL `composite-drive-276806.hyper_sources.spoc_sample_superstore`();
