---
title: "1 Minute React Native Onboarding Screen"
date: "21-12-2022"
description: "The tutorial helps you setup an onboarding screen in one minute"
topic: "React Native"
thumbnail: "reactjs"
cover: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
---

I have been thinking about writing down my learning for a very long time now. Although I have wrote freelance articles in the past, the delay was real. But today I have decided to write down the very first post, starting with an introduction to one on my react native packages which I recently released, i.e [React Native Flatboard](https://www.npmjs.com/package/react-native-flatboard).

React Native Flatboard is a super light weight, flatlist based onboarding screen for react native apps. With this article, you will be able to set up a fully functional onboarding screen for your React Native app in less than a minute.

First thing first, set up a react native project or open your existing react native app where you want to set up the onboarding screen.

Inside the project, we will need to install the react-native-flatboard package using npm or Yarn by following the below command.

```bash
npm i react-native-flatboard
```

Once the package is added, create a new screen where we will render our complete onboarding flow.

In your screen file, import the FlatBoard component from react-native-flatboard and use it similar to the code snippet below.

```jsx
import { View } from "react-native";
import FlatBoard from "react-native-flatboard";

export default function App() {
  const onComplete = () => {
    console.log("Onboarding Completed");
  };

  const data = [];

  return (
    <View style={{ flex: 1 }}>
      <FlatBoard
        data={data}
        onFinish={onComplete}
        accentColor="#93c01f"
        buttonTitle="Lets Go"
        hideIndicator
      />
    </View>
  );
}
```

While calling the component, it is recommended to give the entire screen for the FlatBoard component, which you can achieve by setting the flex value of parent container to 1.

That's pretty much it, now pass your slide details in an object with the give format below and FlatBoard will start running immediately. By default Flatboard theme is set to "Standard", which you can either stick with or use "Modern" theme for a different look and feel.

```jsx
const data = [
  {
    id: 1,
    title: "Screen One",
    description: "Description One",
    icon: require("image-path.jpg"),
  },
  {
    id: 2,
    title: "Screen Two",
    description: "Description Two",
    icon: require("image-path.jpg"),
  },
];
```

For further customizations, Flatboard also provides a number or optional props which you can play with. Finally for complete documentation, contributions or issues, you can visit the source on my [github](https://github.com/ArunGovil/react-native-flatboard).
