/*
--------
TASK - 1
--------
একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
*/
function dataConsole() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
}

/*
--------
TASK - 2
--------
যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 
*/

//Full Data
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayloadData(data))
}
function displayloadData(data) {
    const divContainer = document.getElementById('display-data');
    for (const user of data) {
        console.log(user);

        const div = document.createElement('div');
        div.classList.add('div-style');
        div.innerText = user.name, user.email;
        /* div.innerHTML = `
        <h3>Name: user.name</h3> 
        <h4>Email: ${user.email}</h4>
        <h6>ID: ${user.id}</h6>
        <h6>Post ID: ${user.postId}</h6>
        <p>Description : ${user.body}</p>
        `; */
        divContainer.appendChild(div);
    }
}

/*
--------
TASK - 3
--------
আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।
*/
function autoLoadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayAutoloadData(data))
}
autoLoadData();
function displayAutoloadData(data) {
    const divAutoload = document.getElementById('auto-load');
    for (const user of data) {
        // console.log(user);
        const div = document.createElement('div');
        div.style.margin = '10px';
        div.style.color = 'white';
        div.style.fontWeight = '500';
        div.style.backgroundColor = 'darkcyan';
        div.innerText = `Name: ${user.name}, Email: ${user.email}`;
        divAutoload.appendChild(div);
    }
}


/*
--------
TASK - 4
--------
তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

*/

const loadDataArrow = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayLoadDataArrow(data))
}
// loadDataArrow();
const displayLoadDataArrow = (data) => {
    const divElement = document.getElementById('arrow-data');
    // for (const user of data) {
    //     console.log(user);
    // }
    data.forEach(user => {
        console.log(user.name);
        const div = document.createElement('div');
        div.classList.add('div-style');
        div.innerText = user.name;
        divElement.appendChild(div);
    });

}
