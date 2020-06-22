const text_box = document.getElementById('text_box')

const btn = document.getElementById('btn')

const res = document.getElementById('resp')

let cep;


btn.onclick=()=>{
    
     let valor = text_box.value;
    cep = valor    


     axios.get(`http://viacep.com.br/ws/${cep}/json/`).then(response=>{
         console.log(response.data)
       let resp = {
            'bairro':response.data.bairro,
            'complemento':response.data.complemento,
            'localidade':response.data.localidade,
            'logradouro':response.data.logradouro,
            'uf':response.data.uf,
            
        }

        return res.innerHTML ='Bairro: '+   resp.bairro+'<br>Complemento: '
                + resp.complemento+
                '<br> Localidade: '+resp.localidade+
                '<br>Logradouro: '+resp.logradouro+
                '<br>UF: '+resp.uf

        
}).catch(error=>{
        console.log(error)
})
}





