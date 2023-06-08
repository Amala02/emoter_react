from flask import Flask,request,jsonify,render_template
from flask import Flask, redirect, url_for, request
import pickle
import tensorflow as tf
from numpy import argmax
import numpy as np
import json

app=Flask(__name__)
import transformers
model=tf.keras.models.load_model('model.h5',custom_objects={"TFBertModel": transformers.TFBertModel})
lst=[]

from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained('bert-base-cased')



@app.route('/Predict' ,methods=['POST', 'GET'])
def Predict():
    if request.method == 'POST':    
        data=request.get_json()
        string_text= data['sentence']
        print(string_text)
        tokenized_text= tokenizer(
        text=string_text,
        add_special_tokens=True,
        max_length=70,
        truncation=True,
        padding='max_length', 
        return_tensors='tf',
        return_token_type_ids = False,
        return_attention_mask = True,
        verbose = True)
        result= model.predict({'input_ids':tokenized_text['input_ids'],'attention_mask':tokenized_text['attention_mask']})
        output = argmax(result[0])
        lst.append(output)
        print(output)
        print(lst)
        
        return jsonify({})








@app.route('/Suggest' ,methods=['GET'])
def Suggest():
            
            global lst2 
            lst2 = np.array(lst)
            if ((lst2==1).sum())>((lst2==2).sum() or (lst2==3).sum() or (lst2==4).sum() or (lst2==5).sum()):
                pred="calm"
            elif ((lst2==0).sum())<((lst2==4).sum()):
                pred="sad but angry"
            elif ((lst2==0).sum())>((lst2==4).sum()):
                pred="calm songs"
            elif ((lst2==2).sum())>0 and ((lst2==3).sum())>0:
                pred="happy love"
            elif ((lst2==3).sum())>0 and ((lst2==4).sum())>0:
                pred="heartbreak"
            elif ((lst2==2).sum())>0 and ((lst2==5).sum())>0:
                pred="chill"
           
            else:
                pred="random"

            

            return {"pred":pred}





if __name__=='__main__':
    app.run(host="0.0.0.0", threaded=True, port=5000)