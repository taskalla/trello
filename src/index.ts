import trello from "trello";
import "./popup.html";

trello.initialize({
  "card-buttons": async (t, opts) => {
    return [
      {
        icon:
          "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
        text: `Add to Taskalla`,
        callback: (t, opts) => {
          t.popup({
            title: "Hi there!",
            url: "/popup.html",
          });
        },
      },
    ];
  },
});
