import { showNotification as notify } from "@mantine/notifications";

type Notification = {
  title: string;
  body: string;
  type: string;
};

const showNotification = ({ title, body, type }: Notification) => {
  const icon = type === "success" ? "check" : "xmark";
  const color = type === "success" ? "!bg-green-500" : "!bg-red-500";

  notify({
    title: title,
    message: body,
    icon: <i className={`fa-solid fa-${icon} text-white`}></i>,
    classNames: {
      root: "box",
      icon: color,
      title: "dark:text-dark-primary text-light-primary",
      body: "dark:text-dark-secondary text-light-secondary",
    },
  });
};

export default showNotification;
