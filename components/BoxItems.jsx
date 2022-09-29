import { useEffect, useState } from "react";
const BoxItems = () => {
  const [item,setItem] = useState([])
  // 配列を宣言
  console.log('a');
  const array = [];
  useEffect(()=>{
      console.log('実行');
      if (process.browser) {
        array = []
        for(let key in localStorage){
          const data = localStorage.getItem(key);
          console.log(data);
          if(data!=null){
            const boxItemData = data.split(',');
            console.log(boxItemData);
            // 配列に格納
            if(boxItemData.length == 2){
              array.push(boxItemData);

            }
          }
        }
      console.log(array);
      setItem(array)

    }
  },[setItem])

  return (
    <>
      <h1>Boxページ</h1>
      {/* アイテムリスト */}
      {item.map((it, i)=>(
        <div key={i}>
          <img src="image.png"/>
          <p>{it[0]}</p>
          <p>{it[1]}</p>
        </div>
      ))}

      {/* レンタルボタン */}
      <button type="button">レンタルする</button>
    </>
  );
};

export default BoxItems;
