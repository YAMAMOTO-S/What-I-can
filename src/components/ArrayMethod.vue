<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="12" lg="12" xl="12">
        <v-card class="card" height='700px'>
          <br />
          <div class="mainimg">
            <v-img
              src="https://codesquery.com/wp-content/uploads/2019/10/javascript-array-methods-list-1170x508.png"
            >
            </v-img>
          </div>
          <br />
          <div class="title">
            <h1>Array Methods</h1>
            <p class="font-weight-light">
              for review JS methods by using RandomUser API.
            </p>
          </div>
          <br />

          <!-- メイン部分           -->
          <div class="d-flex flex-row" cols="12">
            <v-col cols="4" class="mainbtn">
              <div>
                <v-btn id="add-user" depressed small class="btns"
                  >Add User</v-btn
                >
              </div>
              <div>
                <v-btn id="double" depressed small class="btns"
                  >Double money</v-btn
                >
              </div>
              <div>
                <v-btn id="millionaires" depressed small class="btns"
                  >Millionaires</v-btn
                >
              </div>
              <div>
                <v-btn id="sort" depressed small class="btns"
                  >Sort by Richest</v-btn
                >
              </div>
              <div>
                <v-btn id="wealth" depressed small class="btns"
                  >entire wealth</v-btn
                >
              </div>
            </v-col>

            <v-col cols="8">
              <main id="main">
                <h2 class="font-weight-light">Person</h2>
              </main>
            </v-col>
          </div>
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    const main = document.getElementById("main");
    const addBtn = document.getElementById("add-user");
    const dobleBtn = document.getElementById("double");
    const millionBtn = document.getElementById("millionaires");
    const sortBtn = document.getElementById("sort");
    const wealthBtn = document.getElementById("wealth");

    let data = [];

    getUser();
    getUser();
    getUser();

    // ランダムUserとお金を追加
    async function getUser() {
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();

      // result0に全てのUserデータが入っているから0
      // newUserで名前と金を持ったUserを作る
      const user = data.results[0];
      const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000)
      };
      addData(newUser);
    }

    // new obj をdataに追加する
    function addData(obj) {
      data.push(obj);
      updateDOM();
    }

    function updateDOM(providedData = data) {
      // innerHTMLで文字を変更する
      main.innerHTML = `<h2 class="font-weight-light">Person</h2>`;
      // providedDataをitemに小分けする
      // createElementでdivを作成してその中に情報を入れていく
      providedData.forEach(item => {
        const element = document.createElement("div");
        element.classList.add("person");
        // eslint-disable-next-line no-irregular-whitespace
        element.innerHTML = `<strong>${item.name}</strong>　　　$${item.money}`;
        main.appendChild(element);
      });
    }

    // 所持金を二倍 Map Method
    function doubleMoney() {
      data = data.map(user => {
        return { ...user, money: user.money * 2 };
      });
      updateDOM();
    }
    // 金持ち順にソート機能
    function sortByRichest() {
      data.sort((a, b) => b.money - a.money);
      updateDOM();
    }
    // ミリオネアだけを表示Filter Method
    function showMil() {
      data = data.filter(user => user.money > 1000000);
      updateDOM();
    }
    // 合計金額reduce method
    function AllWealth() {
      const wealth = data.reduce((acc, user) => (acc += user.money), 0);
      const wealthEl = document.createElement("div");

      wealthEl.innerHTML = 
        `<h2 class="font-weight-light">Total Wealth: ${wealth}</h2>`;
      main.appendChild(wealthEl);
    }

    // addEventListener
    addBtn.addEventListener("click", getUser);
    dobleBtn.addEventListener("click", doubleMoney);
    sortBtn.addEventListener("click", sortByRichest);
    millionBtn.addEventListener("click", showMil);
    wealthBtn.addEventListener("click", AllWealth);
  }
};
</script>

<style scoped>
.mainimg {
  max-width: 300px;
  margin: 10px auto;
}
.card {
  text-align: center;
}
.title h1 {
  text-align: center;
  color: #5b5b5b;
}
.title p {
  margin: 20px;
  text-align: center;
  color: #5b5b5b;
}
/* .mainbtn{
  border-right: 1px solid #1111;
} */
.btns {
  width: 80%;
  margin: 5px;
}

.btns {
  justify-content: left;
}
main {
  flex: 1;
}

h2 {
  border-bottom: 1px solid #111;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  margin: 0 0 20px;
}
</style>
