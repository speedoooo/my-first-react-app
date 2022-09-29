const Items = () => {
  function saveitems() {
    if (process.browser) {
      localStorage.clear();
      const mydata = document.getElementsByName("item");
      // console.log(mydata);
      const sumItems=0;
      for(let i = 0; i < mydata.length; i++){
        if(mydata[i].checked){
          localStorage.setItem(sumItems, mydata[i].value);
          sumItems++;
        }
      }
  
      console.log(localStorage);
    }
  }
  return (
    <>
      <h1>コーディネート詳細ページ</h1>

      {/* アイテムグリッド＋チェックボックス */}
      <img src="image.png"/><input type="checkbox" name="item" value="3WAY MILITARY BLOUSON(SHORT M-65),1000"/>
        <h2>3WAY MILITARY BLOUSON(SHORT M-65)</h2>
        <h3>¥1000</h3>
      <img src="image.png"/><input type="checkbox" name="item" value="LAYERED STRETCH TURTLE,2000"/>
        <h2>LAYERED STRETCH TURTLE</h2>
        <h3>¥2000</h3>
      <img src="image.png"/><input type="checkbox" name="item" value="LOOSE FIT DENIM,3000"/>
        <h2>LOOSE FIT DENIM</h2>
        <h3>¥3000</h3>
      <img src="image.png"/><input type="checkbox" name="item" value="COMBINATION NECKLACE,4000"/>
        <h2>COMBINATION NECKLACE</h2>
        <h3>¥4000</h3>
      <img src="image.png"/><input type="checkbox" name="item" value="SHARK SOLE COMBINATION SHOES,5000"/>
        <h2>SHARK SOLE COMBINATION SHOES</h2>
        <h3>¥5000</h3>

      {/* BOX追加ボタン */}
      <button type="submit" onClick={()=>saveitems()}>BOXに入れる</button>

      {/* BOX見るリンク */}
      <a href="box">BOXを見る</a>
    </>
  );
};

export default Items;
