import pymongo

#get DB named db_name
def get_db_handle(db_name):
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    db_handle = myclient[db_name]
    return db_handle

#get collection named collection_name in db_handle DB
def get_collection_handle(db_handle, collection_name):
    return db_handle[collection_name]