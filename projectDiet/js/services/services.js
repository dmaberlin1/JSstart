



// в будущем можно передать аргументы, которые влияют на заголовки
//async перед фцией, await перед операцией которую необходимо дождаться, они всегда в паре
// await говорит - нам нужно дождаться результата, неважно какой будет. Но, нужно дождаться
//await ждёт столько сколько установлено по стандарту ( мб около 30 сек)

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

async function getResource(url){
    let res=await fetch(url);
    //фетч нам не даст ошибку в http запросе,при отсутсвии интернета и тп,404,500,502  и тд ,  ошибкой для него есть неполадки в самом запросе ,поэтому мы должны обработать вручную.

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        //выкидываем новую ошибку,  оператор throw выкидывает new Error() создаёт.
    }

    return await res.json();
};


export {postData};
export {getResource};
