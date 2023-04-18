import _ from "lodash";

export const getBrowserParams = (query: any) => {
  let browserParams: any = { _s: query._s, _o: query._o, _p: query._p };
  browserParams = _.pickBy(browserParams, (v) => !_.isEmpty(v));
  browserParams = _.mapValues(browserParams, (v) => JSON.stringify(v));
  // console.log("browserParams", browserParams);
  return browserParams;
};

export const getRequsetParams = (query: any) => {
  if (!query) return {};
  const requsetParams = { ...query._s, ...query?._o, ...query?._p };
  // console.log("requsetParams", requsetParams);
  return requsetParams;
};
