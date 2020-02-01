#!/usr/bin/env python
# coding: utf-8

# In[6]:


# In[12]:


import twilio
from twilio.rest import Client


# In[14]:


account_sid = "AC0296b4e477c168d11eadebdbbec065eb"
auth_token = "5b0936e21916d36e1c9a476336d41238"
client = Client(account_sid, auth_token)

call = client.calls.create(
    to = "+917972653087",
    from_="+12052364003",
     
    url="https://handler.twilio.com/twiml/EHc3f50efd921e23297fabb8f87328efa0"
)

print(call.sid)


# In[ ]:




