import { useState, useContext, useCallback } from "react";
import {
  NotificationItem,
  chainNameType,
  SubscribedModal,
} from "@pushprotocol/uiweb";
import * as PushAPI from "@pushprotocol/restapi";
import { createContext } from "react";
import { getCAIPAddress } from "../components/component/caipaddress";

export const Web3Context = createContext({});

export const EnvContext = createContext({});

function useWeb3React(): {
  chainId: any;
  account: any;
  active: any;
  error: any;
  library: any;
} {
  throw new Error("Function not implemented.");
}

const { chainId, account, active, error, library } = useWeb3React();

const NotificationsTest = () => {
  const { account, chainId } = useContext<any>(Web3Context);
  const { env, isCAIP } = useContext<any>(EnvContext);
  const [isLoading, setLoading] = useState(false);
  const [notifs, setNotifs] = useState<PushAPI.ParsedResponseType[]>();
  const [spams, setSpams] = useState<PushAPI.ParsedResponseType[]>();
  const [theme, setTheme] = useState("dark");
  const [viewType, setViewType] = useState("notif");
  const [showSubscribe, setShowSubscribe] = useState(false);

  const loadNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const feeds = await PushAPI.user.getFeeds({
        user: isCAIP ? getCAIPAddress(env, account) : account,
        // user: isCAIP ? getCAIPAddress(env, devWorkingAddress) : devWorkingAddress,
        limit: 30,
        env: env,
      });

      console.log("feeds: ", feeds);

      setNotifs(feeds);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [account, env, isCAIP]);

  const notifications = PushAPI.user.getFeeds({
    user: "eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681", // user address in CAIP
    env: "staging",
  });

  return (
    <div>
      {notifs ? (
        <div>
          {notifs.map((oneNotification, i) => {
            const {
              cta,
              title,
              message,
              app,
              icon,
              image,
              url,
              blockchain,
              secret,
              notification,
            } = oneNotification;

            return (
              <NotificationItem
                key={`notif-${i}`}
                notificationTitle={secret ? notification["title"] : title}
                notificationBody={secret ? notification["body"] : message}
                cta={cta}
                app={app}
                icon={icon}
                image={image}
                url={url}
                theme={theme}
                chainName={blockchain as chainNameType}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
