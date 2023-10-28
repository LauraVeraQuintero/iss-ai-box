import numeral from "numeral";
import {ProductItem} from "models/ProductItem";
import {GridRowId} from "@mui/x-data-grid";
import {CameraFormValues} from "../CamerasForm/type";
import servers from "assets/servers.json";
import {Server, ServerType} from "models/Server";

export const CURRENCY_FORMAT = "$ 0,0[.]00";

export const formatNumberAsCurrency = (num: number) => {
  return numeral(num).format(CURRENCY_FORMAT);
};

export type RecommendationResult = {
  recommendedServer: Server | undefined;
  serverCount: number;
};

export const boxRecommendation = (points: number, storage: number): RecommendationResult => {
  if (!servers) return { recommendedServer: undefined, serverCount: 0 };

  let sType: ServerType;
  if (points === 0) sType = "MICRO";
  else if (points <= 12) sType = "Small";
  else if (points <= 20) sType = "Medium";
  else sType = "Big";

  const serversByType = (servers as Server[]).filter((s) => s.serverType === sType);

  let chosenServer = serversByType.reduce((prevServer, currentServer) => {
    if (storage <= currentServer.maxStorage) {
      if (currentServer.maxStorage < prevServer.maxStorage) {
        return currentServer;
      }
    }
    return prevServer;
  }, serversByType[0]);

  // The storage value is higher than all server options, then return the server with higher max storage
  if (chosenServer.maxStorage < storage) {
    chosenServer = serversByType.reduce((prevServer, currentServer) => {
      return currentServer.maxStorage > (prevServer ? prevServer.maxStorage : -1)
        ? currentServer
        : prevServer;
    }, serversByType[0]);
  }

  // Calculate the number of servers needed based on the total storage required
  const serverCount = Math.ceil(storage / chosenServer.maxStorage);

  return { recommendedServer: chosenServer, serverCount };
};


export const filterSelectedItems = (productItems: ProductItem[], selectedIds: GridRowId[]) => {
  return productItems.filter((item) => selectedIds.find((selectedId) => selectedId === item.id));
};

export const totalStorage = (totalBitrate: number, totalHours: number, totalDays: number) => {
  if (!totalBitrate || (!totalHours && !totalDays)) return 0;

  return (((totalBitrate * 11.06) / 24) * (totalHours || 1) * (totalDays || 1)) / 1024;
};

export const getCameraStorageValues = (cameras: CameraFormValues[]) => {
  let totalBitrate = 0;
  let totalHours = 0;
  let totalDays = 0;

  cameras.forEach(({bitrate, cameraQuantity, storageHours, storageDays}) => {
    totalBitrate += (bitrate ?? 0) * (cameraQuantity ?? 0);
    totalHours += storageHours ?? 0;
    totalDays += storageDays ?? 0;
  });

  return {totalBitrate, totalHours, totalDays};
};
