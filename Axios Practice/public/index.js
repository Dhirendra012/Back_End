const name = document.getElementById('name');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');

const getData = async () => {
    try {
        const response = await axios.get('/api/v1');
        return response;
    }
    catch ( error )
    {
        console.log(error);
    }
};

const createData = async () => {
    const data = { name: name.value , msg: msg.value };
    try {
        await axios.post('/api/v1', data);
        getData();
    }
    catch(error){
        console.log(error);
    }
}

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    createData();
});