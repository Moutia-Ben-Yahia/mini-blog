### This Blog is just a mini Blog for try the SGBD NoSQL CouchDB
# CouchDB :
The sources provide information on the configuration of Apache CouchDB, a document-oriented database management system written in Erlang. CouchDB is designed for the web, is part of the NoSQL movement, and can be distributed across a cluster of servers. Data is stored in JSON documents that can be accessed and queried using HTTP.

The CAP theorem states that a distributed system can only provide two out of the following three desirable characteristics:
- **Consistency**: All clients see the same data at the same time, regardless of which node they are connected to.
- **Availability**: A client that submits a data request receives a response, even if one or more nodes are down.
- **Partition tolerance**: The cluster must continue to function, no matter how many interruptions occur between nodes in the system.

The sources list the advantages and disadvantages of CouchDB.

**Advantages:**
- Efficient synchronization of multiple databases
- Ability to store unstructured data
- Easy and quick to use
- Uses the HTTP protocol and JSON data format

**Disadvantages:**
- Uses a cumbersome engine with an outdated version of the Javascript engine, which exposes you to vulnerabilities
- Slightly slow when dealing with tons of data, but using the file system was much faster

The sources also compare CouchDB to MongoDB. CouchDB uses the JSON data format, while MongoDB uses BSON, JSON, and CSV formats. CouchDB does not support SQL query language, while MongoDB supports read-only SQL queries via the MongoDB connector for BI. CouchDB does not support in-memory capabilities, whereas MongoDB does. In CouchDB, the database contains documents, while in MongoDB, the database contains collections. CouchDB does not have predefined data types, whereas MongoDB has predefined data types such as boolean, string, number, etc. CouchDB supports the following operating systems: Android, BSD, Linux, OS X, and Windows. MongoDB supports the following operating systems: Linux, OS X, and Windows.

### The sources also provide instructions on how to install CouchDB and interact with it using cURL.
## Using CouchDB with cURL
###### Once CouchDB is installed, you can use cURL to interact with it. Here are some common cURL commands for CouchDB:
### To list all databases, use this command:
###### curl -X GET http://user:secret@127.0.0.1:5984/_all_dbs
### To create a database, use this command:
###### curl -X PUT http://user:secret@127.0.0.1:5984/DBname
### To retrieve documents from a database, use this command:
###### curl -X GET http://user:secret@127.0.0.1:5984/DBname
### To retrieve data from a document, use this command:
###### curl -X GET http://user:secret@127.0.0.1:5984/DBname/_design/design_doc_name/_view/index_name
### To create a document and set data, follow these steps:
### First, generate new_doc_id with this command:
###### curl -X POST http://user:secret@127.0.0.1:5984/DBname -d "{\"key\":\"value\"}"
### Then, use this new_doc_id as doc_id in the following command:
###### curl -X PUT http://user:secret@127.0.0.1:5984/DBname/doc_id -d "{\"key1\":\"value1\",\"key2\":\"value2\"}"
### To update document data, use this command:
###### curl -X PUT http://user:secret@127.0.0.1:5984/DBname/doc_id -d "{\"key1\":\"value1\",\"key2\":\"value2\", \"_rev\":\"doc_rev\"}"
### To delete document data, use this command:
###### curl -X DELETE http://user:secret@127.0.0.1:5984/DBname/doc_id?rev=doc_rev
### To import data from a document, follow these steps:

### First, generate new_doc_id with this command:
###### curl -X POST http://user:secret@127.0.0.1:5984/DBname -d "{\"key\":\"value\"}"
### Then, use this new_doc_id as doc_id in the following command:
###### curl -X PUT http://user:secret@127.0.0.1:5984/DBname/doc_id -d "{\"key1\":\"value1\
