# Tableau hyperdb
Hyperdb provides wrapper functions for working with Tableau hyper datasources and moving data between Tableau Server, Google Cloud Platform and Microsoft Azure through a common interface

### Some example use cases are:

 - <b>Publishing SQL query results to Tableau Server with python scripts.</b> 
This approach leverages computing power of SQL databases for ETL and improves dashboard performance
- <b>Extracting and transforming data from noncoventional datasources such as emails and API for dashboards.</b> 
Using cloud storage and serverless compute solutions, prototyping and development becomes easy
- <b>Tapping hyper datasources on servers for analysis in Pandas and storing results in SQL database.</b>
Usually hyper data sources feeding the dashboards are cleaned and enriched, why not use them instead of using the raw data?</b>
- <b>Feeding data from ML models to published dashboards.</b>
With Pandas and cloud services working together possibilities are limitless. The missing link between data and insight is vizualization and this libray aims to fill that gap by feeding Tableau vizualizations what they love: <b>hyper datasources!</b>

# Installation
```pip install hyperdb```

# Setting up development environment
```
git clone https://github.com/mhadi813/hyperdb
cd hyperdb
conda env create -f hyperdb_dev.yml
```

# Authentication
```
import os
#TODO: update path to credential files
# see ``secrets`` folder for credential tamplates
# see functions ``doc string`` for authentication methods at run-time
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = './secrets/dummy_gcp_service_account_credentials.json'
os.environ["AZURE_CREDENTIALS"]= './secrets/dummy_ms_azure_credentials.json' 
os.environ['TABLEAU_SERVER_CREDENTIALS']='./secrets/dummy_tableau_server_credentials.json'
```

# Usage
### Publishing hyper extract from google bigquery SQL statement/stored procedure
```
import hyperdb.gcp as gcp
import hyperdb.tableau_server as ts

sql = """SELECT Order_ID, Order_Date, Ship_Date, Ship_Mode, Customer_ID, Customer_Name, Segment 
FROM `composite-drive-276806.hyper_sources.sample_superstore` """

sql = """CALL `composite-drive-276806.hyper_sources.spoc_sample_superstore`();"""

df = gcp.bq_to_df(sql)

hyper_filepath = ts.df_to_hyper(df)
datasource_name = ts.upload_hyper_tableau_server(hyper_filepath)

```

### Dealing with unconvential data sources
```
import hyperdb.tableau_server as ts
import hyperdb.ms_azure as az
import pandas as pd
# TODO Azure logic app extracts excels files from email and stores on cloud storage, get url of blob

blob_url = 'https://tableaupydb.blob.core.windows.net/sql-script/Sample - Superstore.xls'
in_mem_file = az.download_blob_azure_storage(blob_url,output_option='IO')
df = pd.read_excel(in_mem_file)
hyper_filepath = ts.df_to_hyper(df)
datasource_name = ts.upload_hyper_tableau_server(hyper_filepath)
```

### Tapping hyper datasources on Tableau servers for analysis in pandas
```
import hyperdb.tableau_server as ts
import pandas as pd
datasource_name = 'Sample - Superstore'

hyper_filepath = ts.download_hyper_tableau_server(datasource_name)
df = ts.hyper_to_df(hyper_filepath)
df.head()

# let's write the data to azure sql table and use a non default database
import hyperdb.ms_azure as az
table_name = 'dbo.fact_sample_superstore'
engine = az.azure_sql_engine(database='CloudAnalyticsDev')
az.df_to_azure_sql(df,table_name, engine=engine)

```

### Feeding Tableau Dashboard data form ML model
```
# TODO train and save time series forecast model using fbProphet package on Google Cloud Storage
# TODO serve forecast with Google Cloud functions
# get forecasts with python requests module

import requests
from pyplatform_dev import gcf_authenticated_request

request_params = {"startDate": "2020-05-01"}
gcf_url = 'TODO'

response  = gcf_authenticated_request(gcf_url,method='POST',request_params)
df = pd.DataFrame(response.json())
hyper_filepath = ts.df_to_hyper(df)
datasource_name = ts.upload_hyper_tableau_server(hyper_filepath)
```
### Putting everything together
```
# TODO deploy an app on Pivotal Cloud Foundary to abstract away data analystics infrastucture
# this approach is to keep things serverless and work around storage dependency of Tableau Hyper Client and Tableau Server Python packages
```
