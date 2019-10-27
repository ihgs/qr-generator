<template>
  <div class="hello">
    <div v-for="(msg, index) in msgs" :key="index">
      <input v-model="msg.value" size=40>
    </div>
    <div>
      <button @click="addMsg">Add Msg</button>
      <button @click="addUuid">Add uuid</button>
    </div> 
    <button @click="genQr">Gen QR</button>
  <button @click="genPdf">Gen PDF</button>
  </div>
</template>

<script>
import * as jsPDF from 'jspdf'
import QRCode from 'qrcode'
const uuidv4 = require('uuid/v4');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      msgs: [],
      qrs: [],
    } 
  },
  created: function () {
    
  },
  methods: {
    genQr: function () {
      this.qrs = []
      
      this.msgs.forEach(msg =>{
        QRCode.toDataURL(msg.value,  (err, url) => {
          this.qrs.push({msg: msg.value,url})
        })
      })
    
    },
    genPdf: function () {
      var doc = new jsPDF();
      doc.setFontSize(8);
      const width = 20
      let x = 20
      let y = 20
      let odd = true
      this.qrs.forEach(qr=>{
        doc.addImage(qr.url, 'PNG', x, y, width, width);
        doc.text(qr.msg, x, y+width+5);
        if (odd){
          odd= false
          x = 100
        } else {
          odd = true
          x = 20
          y = y + 50
        }
      })

      doc.save('qr' + '.pdf');
    },
    addMsg: function () {
      this.msgs.push({value: ''})
    },
    addUuid: function () {
      this.msgs.push({value: uuidv4()})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
