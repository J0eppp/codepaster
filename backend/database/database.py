import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base, DeclarativeMeta
from sqlalchemy.orm import relation, relationship, sessionmaker
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.sql.expression import null
from sqlalchemy.sql.schema import ForeignKey, UniqueConstraint

import os

database_uri = os.getenv("DATABASE_URI")
engine = sa.create_engine(database_uri)
SQLAlchemyBase = declarative_base()
Session = sessionmaker(bind=engine)

# Database schemas



SQLAlchemyBase.metadata.create_all(engine)


# General database functions
def add(session, db_object, commit=True):
	if db_object:
		session.add(db_object)

		if commit == True:
			session.commit()

def update(session, db_object, commit=True):
	if db_object:
		session.merge(db_object)

		if commit == True:
			session.commit()

def delete(session, db_object, commit=True):
	if db_object:
		session.delete(db_object)

		if commit == True:
			session.commit()