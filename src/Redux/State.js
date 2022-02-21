const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let store = {
  _state: {
    test: {
      balasd: {
        window: () => {
          alert("Пашол нахуй");
        },
      },
    },
    newsPage: {
      news: [
        {
          src: "https://ss.metronews.ru/userfiles/materials/88/887799/858x429.jpg",
          id: "1",
          label: "Новости СберБана",
        },
        {
          src: "https://bankinform.ru/images/%D1%81%D0%B5%D0%B1%D0%B5%D1%80_%D0%BC%D0%B5%D0%BC3.png?width=720",
          id: "2",
          label: "Новости СберБана",
        },
      ],
    },
    profilePage: {
      posts: [
        {
          id: "1",
          post: "Братан надо решать проблемы эти п**** написали ментам",
          like: "Like 12",
        },
        { id: "2", post: "Ты прав надо выбираться", like: " Like 54" },
        {
          id: "3",
          post: "Надо договориться,нам дадут время,они поймут",
          like: " Like 87",
        },
        { id: "4", post: "Нам нельзя попасть,у нас дела", like: " Like 64" },
        {
          id: "5",
          post: "Я буду контралироваать чтоб нас не нае**** с выплатой",
          like: " Like 23",
        },
        {
          id: "6",
          post: "Теперь наши альбомы на прилавках муз магазинов,контракт подписан",
          like: "Like 98",
        },
        {
          id: "7",
          post: "Давай зачитаем им трек об этом чтоб они знали что в реале",
          like: "Like 76",
        },
      ],
      newPostText: "Первый нах!!!",
    },
    dialogPage: {
      dialogs: [
        { id: "1", name: "Pashok", message: "Время покажет добро или нет" },
        {
          id: "2",
          name: "Andrew",
          message: "Разберёмся по прилёту,как прилетим нам нужен доход",
        },
        { id: "3", name: "Dimych", message: " Нам придётся снова мутить кеш" },
        {
          id: "4",
          name: "Dyadya Ji",
          message: "Здесь не любят олд скул оригинал реп",
        },
        {
          id: "5",
          name: "Chipinkose",
          message: "Надо лечь на дно Чипинкос,пока не настпупит тишина",
        },
        {
          id: "6",
          name: "Lebovsky",
          message: "Надо улицам предложить спонсировать нас",
        },
        {
          id: "7",
          name: "Gretta",
          message: "Есть чел он сможет помоч нам с этим",
        },
      ],
    },
  },
  _rerenderEntireTree() {
    console.log("State");
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 8,
        post: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },

  getState() {
    return this._state;
  },

  subscride(observer) {
    this._rerenderEntireTree = observer;
  },
};

export const addpostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextactionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default store;
window.store = store;
