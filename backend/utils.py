import pandas as pd
import sqlalchemy


def get_df(query, engine):
    with engine.connect() as connection:
        return pd.read_sql(query, connection)


def get_engine():
    url = (
        "mysql+pymysql://gadfort:forTech11@mysql3000.mochahost.com:3306/gadfort_cricket"
    )
    engine = sqlalchemy.create_engine(url)
    return engine
