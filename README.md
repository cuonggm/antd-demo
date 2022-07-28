# ant-demoプロジェクト

# 採用技術・Dependency一覧
1. "@ant-design/icons": "^4.7.0"
1. "@reduxjs/toolkit": "^1.8.3"
1. "antd": "^4.21.7"
1. "less": "^4.1.3"
1. "react-redux": "^8.0.2"
1. "react-router-dom": "^5.3.3"

# 追加Scripts

1. "less": "lessc --js src/antd-theme/antd-customized.less src/antd-theme/antd-customized.css",
1. "deploy": "aws s3 sync build/ s3://staging.cuonggm.com"

# Redux手順

1. store作成
```
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
```
2. ReactへStoreを提供する（index.jsで）
```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```
3. Sliceを作成する(authSlice.js)
```
// 1. Create Initial Object - 初期化Object
const initialState = {
  isLoggedIn: false,
};

// 2. Create Slice - Slice作成
const authSlice = createSlice({
  name: "auth",
  initialState,
  // 以下のreducer名からaction名を自動に生成する
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// 3. Thunk Function作成
// Component中のDispatchより呼び出されるFunction
// AsyncLogic等を含む
export const loginThunk = (username, password) => {
  // 1. 以下のFunctionはReduxより呼び出される
  // Functionを返す
  return async (dispatch) => {
    // define nested logic function
    // 1.1 LogicFunctionを定義
    const logic = async () => {
      // logic comes here
      console.log("Running logic function");
      console.log("password=" + password);
      if (password === username) {
        return true;
      }
      return false;
      
    };
    // run  this function. use await to get result directly.
    // 1.2 上記に定義されたFunctionを呼び出す
    const result = await logic();
    console.log(result);
    // then dispatch action
    // 1.3 最後、reducerを呼び出してStateを更新する為に、Dispatchで実行する
    if (result === true) {
      dispatch(authActions.login());
    } else {
      dispatch(authActions.logout());
    }
  };
};
4. Slice中のActionsを出す
export const authActions = authSlice.actions;

5. store.jsで登録する為に、reducerをdefaultとしてexportする
export default authSlice.reducer;
```

4. store.jsへSliceを登録する(store.js)
```
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
```

5. Component中でState更新方法(login.js)
```
const onSignIn = (event) => {
    event.preventDefault();
    // DispatchをThunkFunctionを渡して実行する
    dispatch(loginThunk(username, password));
  };
```
