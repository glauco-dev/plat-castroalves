import { jsx as n, jsxs as C, Fragment as q } from "@emotion/react/jsx-runtime";
import { AdapterDateFns as hs } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider as gs } from "@mui/x-date-pickers/LocalizationProvider";
import ps from "@date-io/date-fns";
import * as wi from "date-fns/locale";
import * as Pe from "react";
import R, { useState as Q, useContext as ze, useCallback as y, createContext as yi, useEffect as Y, useRef as ce, useMemo as le, createElement as ms, useDeferredValue as $r, useLayoutEffect as mr, createRef as bs, forwardRef as vs } from "react";
import { Tooltip as me, Box as B, Typography as X, useTheme as Be, IconButton as oe, Link as rn, CardMedia as xs, Table as On, TableBody as $n, TableRow as on, TableCell as qe, Grid as se, Skeleton as Xe, Chip as Gr, Divider as Gn, FormHelperText as Se, TextField as ot, FormControlLabel as Lr, Switch as Yr, FormControl as we, Paper as Wt, InputLabel as wt, Select as Ke, MenuItem as Te, Checkbox as Ln, ListItemText as Qt, Button as de, Collapse as Ei, Accordion as ws, AccordionSummary as ys, AccordionDetails as Es, darken as Fe, lighten as bt, InputAdornment as Cs, alpha as an, TableContainer as Bs, Input as ks, Container as Ci, Portal as Is, CircularProgress as yt, Badge as wo, Popover as Bi, styled as Ss, useMediaQuery as He, Menu as ki, ListItemIcon as Bn, Hidden as Ii, OutlinedInput as Fs, Modal as Rs, Backdrop as Ds, Slide as Wr, Dialog as Vr, DialogTitle as zr, DialogContent as Ur, DialogContentText as Si, Alert as Ps, CardActionArea as Ts, CardContent as Qs, CardActions as Ms, Fade as Fi, List as Os, ListItem as $s, Drawer as Gs, Toolbar as Ri, Breadcrumbs as Ls, Avatar as yo, Tab as or, Tabs as Ys, createTheme as Eo, CssBaseline as Co, ThemeProvider as Ws } from "@mui/material";
import { UNSAFE_NavigationContext as Vs, useNavigate as Yn, useLocation as An, Link as br, NavLink as Di, Route as yn, Routes as zs, BrowserRouter as Us } from "react-router-dom";
import { useSnackbar as Ns, SnackbarProvider as js } from "notistack";
import Nr from "@mui/icons-material/Error";
import { styled as tt, darken as mt, alpha as Hs } from "@mui/material/styles";
import { tooltipClasses as Bo } from "@mui/material/Tooltip";
import * as vr from "@mui/icons-material";
import { CheckBox as _s, CheckBoxOutlineBlank as Js, KeyboardTab as qs, MoreVert as Pi, Delete as xr, FileCopy as Zs, Add as kn, Phone as Xs } from "@mui/icons-material";
import xe from "react-fast-compare";
import Ks from "@mui/icons-material/Close";
import ko from "object-hash";
import el from "@mui/icons-material/Adjust";
import tl from "@mui/icons-material/Functions";
import nl from "@mui/icons-material/Crop75";
import rl from "@mui/icons-material/ShortText";
import ol from "@mui/icons-material/Subject";
import il from "@mui/icons-material/AddLink";
import al from "@mui/icons-material/List";
import sl from "@mui/icons-material/Schedule";
import ll from "@mui/icons-material/UploadFile";
import cl from "@mui/icons-material/DriveFolderUpload";
import Io from "@mui/icons-material/Repeat";
import dl from "@mui/icons-material/ViewStream";
import Al from "@mui/icons-material/ListAlt";
import Ti from "@mui/icons-material/Link";
import ul from "@mui/icons-material/Http";
import fl from "@mui/icons-material/Flag";
import hl from "@mui/icons-material/Numbers";
import So from "@mui/icons-material/FormatListNumbered";
import gl from "@mui/icons-material/FormatQuote";
import Qi from "@mui/icons-material/Email";
import Fo from "@mui/icons-material/BallotOutlined";
import pl from "@mui/icons-material/InfoOutlined";
import { getIn as wr, Field as ml, FastField as Mi, useFormikContext as Oi, ErrorMessage as bl, Formik as $i, Form as Gi, setIn as vl } from "formik";
import et from "@mui/icons-material/Clear";
import xl from "@mui/icons-material/DescriptionOutlined";
import un from "@mui/icons-material/OpenInNew";
import yr from "@mui/icons-material/ContentCopy";
import Li from "markdown-it";
import jr from "@mui/icons-material/KeyboardTab";
import wl from "date-fns/format";
import { useDropzone as Yi } from "react-dropzone";
import { styled as Wn } from "@mui/system";
import * as yl from "react-dom";
import { unstable_useForkRef as El, unstable_ownerWindow as Ro, unstable_debounce as Cl, unstable_useEnhancedEffect as Bl } from "@mui/utils";
import kl from "@mui/icons-material/ArrowForward";
import Wi from "@mui/icons-material/StarBorder";
import Vi from "@mui/icons-material/Star";
import Il from "@mui/icons-material/ExpandMore";
import Sl from "@mui/icons-material/Assignment";
import { FixedSizeList as Fl } from "react-window";
import Hr from "react-use-measure";
import Do from "@mui/icons-material/ArrowUpward";
import Rl from "@mui/icons-material/ArrowDownward";
import Dl from "@mui/icons-material/ArrowDropDownCircle";
import { LoadingButton as Pl } from "@mui/lab";
import Tl from "@mui/icons-material/LightModeOutlined";
import Ql from "@mui/icons-material/DarkModeOutlined";
import Ml from "@mui/icons-material/NavigateNext";
import { DatePicker as _r } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Jr } from "@mui/x-date-pickers/DateTimePicker";
import zi from "@mui/material/Menu";
import Le from "@mui/material/MenuItem";
import In from "@mui/icons-material/Remove";
import Ui from "@mui/icons-material/ArrowDropDown";
import Ni from "@mui/icons-material/Add";
import Vn, { Plugins as qr } from "react-markdown-editor-lite";
import Ol from "@mui/icons-material/DragHandle";
import { DragDropContext as ji, Droppable as Hi, Draggable as _i } from "@hello-pangea/dnd";
import $l from "@mui/material/Select";
import Ji from "@mui/material/InputBase";
import en from "@mui/material/Button";
import * as $e from "yup";
import { grey as Po, pink as Gl, red as Ll } from "@mui/material/colors";
import { createElement as Yl } from "@emotion/react";
import Wl from "@mui/icons-material/Menu";
import To from "@mui/material/IconButton";
import Vl from "@mui/icons-material/ChevronLeft";
import zl from "@mui/icons-material/ChevronRight";
import * as Ul from "js-search";
import Nl from "@mui/icons-material/Search";
import jl from "clsx";
import Hl from "react-image-file-resizer";
import _l from "@mui/icons-material/GetApp";
import Jl from "@mui/material/Dialog";
import ql from "@mui/material/DialogContent";
import Qo from "@mui/material/DialogContentText";
import Zl from "@mui/material/DialogTitle";
import Xl from "@mui/icons-material/Edit";
import Kl from "@mui/icons-material/ErrorOutline";
import ec from "@mui/icons-material/RemoveCircle";
import tc from "@mui/icons-material/FilterListOff";
import { getAuth as De, onAuthStateChanged as nc, signOut as rc, GoogleAuthProvider as qi, signInWithPopup as Mo, signInAnonymously as oc, signInWithPhoneNumber as ic, OAuthProvider as Oo, FacebookAuthProvider as ac, GithubAuthProvider as sc, TwitterAuthProvider as lc, signInWithEmailAndPassword as cc, createUserWithEmailAndPassword as dc, fetchSignInMethodsForEmail as Ac, RecaptchaVerifier as Zi, getMultiFactorResolver as uc, PhoneMultiFactorGenerator as $o, PhoneAuthProvider as Go } from "firebase/auth";
import { Timestamp as Zr, getFirestore as lt, collectionGroup as Lo, collection as Zt, where as Yo, orderBy as fc, startAfter as hc, limit as gc, query as Wo, getDoc as pc, doc as gt, getDocs as Vo, onSnapshot as zo, serverTimestamp as Xi, setDoc as mc, deleteDoc as bc, getCountFromServer as vc, deleteField as Ki, GeoPoint as ea, DocumentReference as xc } from "firebase/firestore";
import { getStorage as wc, uploadBytes as yc, ref as ir, getDownloadURL as Uo, getMetadata as Ec } from "firebase/storage";
import { initializeApp as Cc } from "firebase/app";
import { getToken as Bc, initializeAppCheck as kc, ReCaptchaEnterpriseProvider as Ic, ReCaptchaV3Provider as Sc } from "firebase/app-check";
import Er from "@mui/icons-material/ArrowBack";
import Fc from "@mui/icons-material/PersonOutline";
const Rc = {
  breadcrumbs: [],
  set: (e) => {
  }
}, ta = R.createContext(Rc), Dc = ({ children: e }) => {
  const [t, r] = Q([]), o = (i) => {
    r(i.breadcrumbs);
  };
  return /* @__PURE__ */ n(
    ta.Provider,
    {
      value: {
        breadcrumbs: t,
        set: o
      },
      children: e
    }
  );
}, Pc = {
  mode: "light",
  setMode: (e) => {
  },
  toggleMode: () => {
  }
}, Xr = R.createContext(Pc), Tc = Xr.Provider;
function Ce(e) {
  return Qc(Mc(e));
}
function Qc(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
function Mc(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function Rg(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function Dg(e) {
  const t = Ce(e);
  if (t.includes("/")) {
    const r = t.split("/");
    return r[r.length - 1];
  }
  return t;
}
function na(e, t) {
  const r = Ce(e), o = r.split("/");
  if (o.length % 2 === 0)
    throw Error(`Collection paths must have an odd number of segments: ${e}`);
  const i = t.find((s) => s.alias === o[0]);
  let a;
  if (i && (a = i.path), o.length > 1) {
    const s = Kr(a ?? o[0], t);
    if (!s?.subcollections)
      return r;
    const l = r.split("/").slice(2).join("/");
    return (a ?? o[0]) + "/" + o[1] + "/" + na(l, s.subcollections);
  } else
    return a ?? r;
}
function Kr(e, t) {
  const r = Ce(e).split("/");
  if (r.length % 2 === 0)
    throw Error(`Collection paths must have an odd number of segments: ${e}`);
  const o = eo(r);
  let i;
  for (let a = 0; a < o.length; a++) {
    const s = o[a], l = t && t.sort((c, d) => (c.alias ?? "").localeCompare(d.alias ?? "")).find((c) => c.alias === s || c.path === s);
    if (l) {
      if (s === e)
        i = l;
      else if (l.subcollections) {
        const c = e.replace(s, "").split("/").slice(2).join("/");
        c.length > 0 && (i = Kr(c, l.subcollections));
      }
    }
    if (i)
      break;
  }
  return i;
}
function eo(e) {
  const t = e.length > 0 && e.length % 2 === 0 ? e.splice(0, e.length - 1) : e, r = t.length, o = [];
  for (let i = r; i > 0; i = i - 2)
    o.push(t.slice(0, i).join("/"));
  return o;
}
function to(e) {
  const {
    path: t,
    collections: r = [],
    currentFullPath: o
  } = e, i = Ce(t).split("/"), a = eo(i), s = [];
  for (let l = 0; l < a.length; l++) {
    const c = a[l], d = r && r.find((A) => A.alias === c || A.path === c);
    if (d) {
      const A = d.alias ?? d.path, u = o && o.length > 0 ? o + "/" + A : A;
      s.push({
        type: "collection",
        path: u,
        collection: d
      });
      const h = Ce(Ce(t).replace(c, "")), g = h.length > 0 ? h.split("/") : [];
      if (g.length > 0) {
        const f = g[0], p = u + "/" + f;
        if (s.push({
          type: "entity",
          entityId: f,
          path: u,
          parentCollection: d
        }), g.length > 1) {
          const m = g.slice(1).join("/");
          if (!d)
            throw Error("collection not found resolving path: " + d);
          const w = d.views, b = w && w.find((E) => E.path === m);
          if (b) {
            const E = o && o.length > 0 ? o + "/" + b.path : b.path;
            s.push({
              type: "custom_view",
              path: E,
              view: b
            });
          } else
            d.subcollections && s.push(...to({
              path: m,
              customViews: w,
              collections: d.subcollections,
              currentFullPath: p
            }));
        }
      }
      break;
    }
  }
  return s;
}
const Pt = "100vw", En = "55vw", Sn = "700px", ra = R.createContext({}), Ue = () => ze(ra), oa = R.createContext({}), ke = () => ze(oa), ia = R.createContext({}), Vt = () => ze(ia), aa = R.createContext({}), zn = () => ze(aa), sa = R.createContext({}), Et = () => ze(sa), la = R.createContext({}), fn = () => ze(la), Ct = () => {
  const {
    enqueueSnackbar: e,
    closeSnackbar: t
  } = Ns();
  return {
    open: y((o) => {
      const {
        type: i,
        message: a,
        autoHideDuration: s
      } = o;
      e({
        message: a,
        variant: i,
        autoHideDuration: s
      });
    }, []),
    close: t
  };
}, ca = R.createContext(void 0), zt = () => ze(ca), da = yi({
  sideDialogsController: {},
  sideEntityController: {},
  navigation: {},
  dataSource: {},
  storageSource: {},
  authController: {},
  snackbarController: {},
  fields: {}
}), ie = () => {
  const e = ze(da), t = Vt(), r = zn(), o = Et(), i = ke(), a = Ue(), s = fn(), l = Ct(), c = zt();
  return {
    ...e,
    authController: t,
    sideDialogsController: r,
    sideEntityController: o,
    navigation: i,
    dataSource: a,
    storageSource: s,
    snackbarController: l,
    userConfigPersistence: c
  };
};
function Oc({
  path: e,
  collection: t,
  filterValues: r,
  sortBy: o,
  itemCount: i,
  searchString: a
}) {
  const s = Ue(), c = ke().resolveAliasesFrom(e), d = o ? o[0] : void 0, A = o ? o[1] : void 0, u = ie(), [h, g] = Q([]), [f, p] = Q(!1), [m, w] = Q(), [b, E] = Q(!1);
  return Y(() => {
    p(!0);
    const v = async (I) => {
      if (t.callbacks?.onFetch)
        try {
          I = await Promise.all(
            I.map((k) => t.callbacks.onFetch({
              collection: t,
              path: c,
              entity: k,
              context: u
            }))
          );
        } catch (k) {
          console.error(k);
        }
      p(!1), w(void 0), g(I), E(!i || I.length < i);
    }, x = (I) => {
      console.error("ERROR", I), p(!1), g([]), w(I);
    };
    return s.listenCollection ? s.listenCollection({
      path: c,
      collection: t,
      onUpdate: v,
      onError: x,
      searchString: a,
      filter: r,
      limit: i,
      startAfter: void 0,
      orderBy: d,
      order: A
    }) : (s.fetchCollection({
      path: c,
      collection: t,
      searchString: a,
      filter: r,
      limit: i,
      startAfter: void 0,
      orderBy: d,
      order: A
    }).then(v).catch(x), () => {
    });
  }, [c, i, A, d, r, a]), {
    data: h,
    dataLoading: f,
    dataLoadingError: m,
    noMoreToLoad: b
  };
}
const ar = {};
function no({
  path: e,
  entityId: t,
  collection: r,
  useCache: o = !1
}) {
  const i = Ue(), s = ke().resolveAliasesFrom(e), l = ie(), [c, d] = Q(), [A, u] = Q(!0), [h, g] = Q();
  return Y(() => {
    u(!0);
    const f = async (m) => {
      if (r.callbacks?.onFetch && m)
        try {
          m = await r.callbacks.onFetch({
            collection: r,
            path: s,
            entity: m,
            context: l
          });
        } catch (w) {
          console.error(w);
        }
      ar[`${s}/${t}`] = m, d(m), u(!1), g(void 0);
    }, p = (m) => {
      console.error("ERROR fetching entity", m), u(!1), d(void 0), g(m);
    };
    return t && o && ar[`${s}/${t}`] ? (d(ar[`${s}/${t}`]), u(!1), g(void 0), () => {
    }) : t && s && r ? i.listenEntity ? i.listenEntity({
      path: s,
      entityId: t,
      collection: r,
      onUpdate: f,
      onError: p
    }) : (i.fetchEntity({
      path: s,
      entityId: t,
      collection: r
    }).then(f).catch(p), () => {
    }) : (f(void 0), () => {
    });
  }, [t, s]), {
    entity: c,
    dataLoading: A,
    dataLoadingError: h
  };
}
async function Aa({
  collection: e,
  path: t,
  entityId: r,
  values: o,
  previousValues: i,
  status: a,
  dataSource: s,
  context: l,
  onSaveSuccess: c,
  onSaveFailure: d,
  onPreSaveHookError: A,
  onSaveSuccessHookError: u
}) {
  let h;
  const g = l.navigation.resolveAliasesFrom(t), f = e.callbacks;
  if (f?.onPreSave)
    try {
      const p = Ie({
        collection: e,
        path: t,
        values: i,
        entityId: r,
        fields: l.fields
      });
      h = await f.onPreSave({
        collection: p,
        path: t,
        resolvedPath: g,
        entityId: r,
        values: o,
        previousValues: i,
        status: a,
        context: l
      });
    } catch (p) {
      console.error(p), A && A(p);
      return;
    }
  else
    h = o;
  return s.saveEntity({
    collection: e,
    path: g,
    entityId: r,
    values: h,
    previousValues: i,
    status: a
  }).then((p) => {
    try {
      if (f?.onSaveSuccess) {
        const m = Ie({
          collection: e,
          path: t,
          values: h,
          entityId: r,
          fields: l.fields
        });
        f.onSaveSuccess({
          collection: m,
          path: t,
          resolvedPath: g,
          entityId: p.id,
          values: h,
          previousValues: i,
          status: a,
          context: l
        });
      }
    } catch (m) {
      u && u(m);
    }
    c && c(p);
  }).catch((p) => {
    if (f?.onSaveFailure) {
      const m = Ie({
        collection: e,
        path: t,
        values: h,
        entityId: r,
        fields: l.fields
      });
      f.onSaveFailure({
        collection: m,
        path: t,
        resolvedPath: g,
        entityId: r,
        values: h,
        previousValues: i,
        status: a,
        context: l
      });
    }
    d && d(p);
  });
}
async function $c({
  dataSource: e,
  entity: t,
  collection: r,
  callbacks: o,
  onDeleteSuccess: i,
  onDeleteFailure: a,
  onPreDeleteHookError: s,
  onDeleteSuccessHookError: l,
  context: c
}) {
  console.debug("Deleting entity", t.path, t.id);
  const d = {
    entity: t,
    collection: r,
    entityId: t.id,
    path: t.path,
    context: c
  };
  if (o?.onPreDelete)
    try {
      await o.onPreDelete(d);
    } catch (A) {
      return console.error(A), s && s(t, A), !1;
    }
  return e.deleteEntity({
    entity: t
  }).then(() => {
    i && i(t);
    try {
      return o?.onDelete && o.onDelete(d), !0;
    } catch (A) {
      return l && l(t, A), !1;
    }
  }).catch((A) => (a && a(t, A), !1));
}
function Ge({
  property: e,
  value: t,
  setValue: r
}) {
  const o = ce(null);
  Y(() => {
    typeof e.disabled == "object" && !!e.disabled.clearOnDisabled ? t != null && (o.current = t, r(null)) : o.current && (r(o.current), o.current = null);
  }, [e]);
}
function Gc({
  path: e,
  context: t
}) {
  const r = t.dataSource, o = t.navigation;
  if (!o)
    throw Error("Calling getNavigationFrom, but main navigation has not yet been initialised");
  const a = to({
    path: e,
    collections: o.collections ?? []
  }).map((s) => {
    if (s.type === "collection")
      return Promise.resolve(s);
    if (s.type === "entity") {
      const l = o.getCollection(s.path, s.entityId);
      if (!l)
        throw Error(`No collection defined in the navigation for the entity with path ${s.path}`);
      return r.fetchEntity({
        path: s.path,
        entityId: s.entityId,
        collection: l
      }).then((c) => {
        if (c)
          return { ...s, entity: c };
      });
    } else {
      if (s.type === "custom_view")
        return Promise.resolve(s);
      throw Error("Unmapped element in useEntitiesFromPath");
    }
  }).filter((s) => !!s);
  return Promise.all(a);
}
function Pg({
  path: e
}) {
  const t = ie(), [r, o] = Q(), [i, a] = Q(!1), [s, l] = Q();
  return Y(() => {
    t.navigation && (a(!0), l(void 0), Gc({ path: e, context: t }).then((d) => {
      o(d);
    }).catch((d) => l(d)).finally(() => a(!1)));
  }, [e, t]), t.navigation ? { data: r, dataLoading: i, dataLoadingError: s } : { dataLoading: !0 };
}
const ro = () => ze(Xr), Lc = (e) => {
  const { onSuccess: t, onError: r, disableClipboardAPI: o = !1, copiedDuration: i } = e || {}, a = ce(null), [s, l] = Q(!1), [c, d] = Q("");
  Y(() => {
    i && setTimeout(() => l(!1), i);
  }, [s]);
  const A = () => navigator.clipboard !== void 0, u = y((b) => {
    if (r)
      r(b);
    else
      throw new Error(b);
  }, [r]), h = y((b) => {
    t && t(b), l(!0), d(b);
  }, [t]), g = y((b) => {
    navigator.clipboard.writeText(b).then(() => h(b)).catch((E) => {
      u(E), l(!1);
    });
  }, [u, h]), f = () => {
    A() && navigator.clipboard.writeText("");
  }, p = (b) => w("copy", typeof b == "object" ? void 0 : b), m = () => w("cut"), w = y(
    (b = "copy", E) => {
      const v = a.current, x = v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA"), I = a.current;
      A() && !o && (E ? g(E) : v ? x ? (g(I.value), b === "cut" && (I.value = "")) : g(v.innerText) : u("Both the ref & text were undefined"));
    },
    [o, g, u]
  );
  return {
    ref: a,
    isCoppied: s,
    clipboard: c,
    clearClipboard: f,
    isSupported: A,
    copy: p,
    cut: m
  };
}, oo = () => ze(ta);
function Un(e) {
  const t = ke(), r = zn(), o = y(() => {
    if (e.path) {
      let a = e.collection;
      if (a || (a = t.getCollection(e.path)), !a)
        throw Error("Not able to resolve the collection in useReferenceDialog");
      r.open({
        key: `reference_${e.path}`,
        component: /* @__PURE__ */ n(
          Wu,
          {
            collection: a,
            ...e
          }
        ),
        width: "90vw",
        onClose: () => {
          e.onClose?.();
        }
      });
    } else
      throw Error("useReferenceDialog: You are trying to open a reference dialog, but have not declared the `path`");
  }, [t, e, r]), i = y(() => {
    r.close();
  }, [r]);
  return {
    open: o,
    close: i
  };
}
const Yc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAB9pJREFUWMONl12obVUVx39jzLk+9j7nHq9y1QT1qpcbSIaXQFGs24PQl3HroSQyqHwJFJF6qaceCsqQoJdELHoIC6EeJCSKsi/TFLGozGsKXksljRLxnrP3WmvOOUYPa+19zsmPWpux5pxrzTX///Exx5hb+B/X1y+/nuIlVKF5m0v1YbQ55tIcKTQXFerNQkumOZ1oTiXCqUH8saR+74L8ZIWWux7+7JuuL2/04s5jJyhWQlXV71KtbhCtr1WtD6s0KlrjNBRaEi3JGzpv6bymQ0sn9mwv9otB7Ls7kn9Xo+U7D9z8/xG4+bz3cs35SjE/HEK8NWr8RBOrs+tQUUlEtAYaijRkbxmY0fuMzucsfcbSWnZQtiWxJL3Uid09iH0jIM8/1f+d3/zuS29M4PvHrmG+cZA8dMdjiLfNYrx6owrMVKlVUQkgkeI1iYbBJ3A2WPpKNtnx+UQisy29L0gPDGKfrwkPn2bJPfd/Zo0ZVp0fvOOdnLGxheX+A/Mq3nGwqS8/q645o4psxkgbhFqdSgqVJKIkghgqjuDoWh+dlm1AI0gUC3o4C9d04idbmZ06euQDPPHMj3YJ3HnkrZx98Fys2PFZ1dxxsJkdPbOecaBqmcWGqBVBIkEiKkoQJ5IJJBTbY8aRgBMwjxgVJoJJwDScnYUrOy2PBamfv/CS4zz9zE+IAIfPuQQzPzyrmq9u1e3RM+qWeaipNCCiE4DjbjgF94xZQj2htpjeK84ImqlIUpO9JllgEKgJDFpfOoh8paN8chbOeQ4g/OTq97PdLXSz3fjiVjO7/sx6g804ow41QWuCrjQPBB3bkZQgAkpBJOMojmIEjIgRKV6RpaYIZHGKQlK5OIv0L8bul8eOfsxjDJGD8613z6rmhq1qxkY1o9YKFUFEEED2xqoE1MNoWgPBwQZMl2SrSbQM9NQyUMlA5S3Rlcqd6E50RdRvPMvn9yE8qP9+9WWtQvXxzdic8xrwPaJrUYJGoq4sVBM1Ukuiln4UBipJVJrGoHUhrARB0XMQ/cizbSd61uaZlzUhXjuvWmqt9oOyAmUPEabnkSDV2j0Rp2YgksZdQpoCtRBwAiN4cKYdw4m3pNnbY9Tw4SZUh9tQEda+ld1WpmThgoivU8fYDbgEggRcleiZ6BOoFNRXLQQX1Eelggsgh8GPx6DhWB2iRgkj2OTuVX8dBzJtMx93BAKK4hIwUUSEID4BGspecWTfDwSCw+UxqByJoqPf9+xmYWQg7H3u+5Poyk3o5BZDxRBxxH29fdkF3YcBXKHgF+m+hLxn4OvbnnbPzMkjsm/+f5cXec2ye6ZfpO6+OX7pE8TqPj1zcN/7Zu8CDm44Bu6skrKjuOs0FlxWCJNMYxMOqLlR3DAvsAKaZo6t7+u7r6nhjN/5RKIQKESKhykhjeIINgJi+0m4Fiuns2WKZQybtJ2AfAWzGu/ayt0wz5gXimeKQyKSPI4kiCMhDxSgyLiOiY9kxnW2NVs+1ZeBbAmzhLmtgd0d8z1k1mIUTxQbKD5gnkmuDN6QvCF5TaIie0UmkIU1id3WcfwZHUo61eWB3gayDdOiZR+JXUuMWmcbyGWcny2RzOi8obeWwRsGrxm8JlGPBHCyOJmpJkwkHHs09pnfL1L60KLqtBKZtprhU+lVmSq9+xRsBfOMW6L4QLFM7zWdz+l8Ru8tA+10YKlJIiSxkcC6dQqlmJc/xaHIvTuZT7UpHalFUHEqL6iGsfKtM8FEzMdy7J4oXui9mk5CczpGErtEKgacQUZJE3gSwzw/i+dfx2G7e6IcOPALCXIkakGkYx4iwceyq+uENPp+RSI7DN7Q+5ylb7JgJLH0+XRGbOlRerWJwNgmnOwJ83Tvq/7KX2KZb1nJfnfp5YRoda7hFC/MQyGI7Mteow2E4pHkDT2zyfS758HV4bSjolOjF2PYS4KBbN2L5vmHZ7DpsWQnDsvfLj1+Lwufy9LSO2y5M1Mnik8OEJxAoSJRk7xhoKX3+URiztI3WPgGS2/p1OnE6CcSvRQGH+htQfH07dPSP7Lp9ajcNy+9DnG/oMT67qqZHz/QtGxVyjworQqVCIjiPiaaTD1ttZZ+fTIeCXQ+Y6HCQm0tO5LYpmfHlyy9/1nCPi3ICw/99JbxUHrdvxr6Q4depdhTfeGapVeH+imKxwhv6ZnR+5zeN0aNGU2+ZIPON0cX0LBQYSnGQgsLSSzoWdiCHVvQ2fLP2fMtwf2vDz50K6TpVPxj/sn7Ni5iu9l6Tof+yd78yoWFQ0uvWYvVLK1h6e34B8RnY9DZnIW3LAijxpLYkZ6Fd+z4km3bYcd2WNry8ezppsZ5ZMd2+MfTv3xtjbr9/PfwyoFDzPvtq7I2t+Vq/m6pt4hxThVaojao1CANRkORmkwkiTCI00thKYWOzJJR+6V1JE8/z2JfqGgfW9jLPPLg7a9Xe8frHs7j5MVXESxfmLS5KYXmxhQ3z/a4icQNRFtEGlwjJkoRIamTmIKNTE+it57kw0sF+1ah3CkSXkiPf42Htl+3WL/2+vIFJ6ishJ3QXD1o9dEhVCcGbS7ModUcakwrigaKChkoYmQK2XMp5L8V/F7DfuDePYrEcv8f7npdnDcksEvkg9RewquhuayTcHzQeCyJXpFVD2fRzSxCFtkuwqks8mjB/ujYr9y6k0gs9528503X/w/F3eUgyIBI4wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0xMFQxOToyODozMyswMDowMEzeSx4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMTBUMTk6Mjg6MzMrMDA6MDA9g/OiAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MjA2NzQ5MTMk8oswAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMjEtMDUtMTAvOGIxNDNhYjgwODhkMjBlZThkYmUzOTFhN2NkNmQ3NmQuaWNvLnBuZ9msgG0AAAAASUVORK5CYII=
`;
function Wc(e, t) {
  Y(() => {
    if (document) {
      document.title = `${e} - FireCMS`;
      let r = document.querySelector("link[rel~='icon']");
      r || (r = document.createElement("link"), r.rel = "icon", document.getElementsByTagName("head")[0].appendChild(r)), r.href = t ?? Yc;
    }
  }, [e, t]);
}
const ua = tt(({
  className: e,
  ...t
}) => /* @__PURE__ */ n(me, { ...t, classes: { popper: e } }))(({ theme: e }) => ({
  [`& .${Bo.tooltip}`]: {
    margin: "0 8px",
    backgroundColor: e.palette.error.light
  },
  [`& .${Bo.arrow}`]: {
    color: e.palette.error.light
  }
}));
function Ee({
  title: e,
  error: t,
  tooltip: r
}) {
  const o = t instanceof Error ? t.message : t, i = /* @__PURE__ */ C(
    B,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        margin: 1
      },
      children: [
        /* @__PURE__ */ n(Nr, { fontSize: "small", color: "error" }),
        /* @__PURE__ */ C(B, { sx: {
          paddingLeft: 2
        }, children: [
          e && /* @__PURE__ */ n(
            X,
            {
              variant: "body2",
              sx: {
                fontWeight: "500"
              },
              children: e
            }
          ),
          /* @__PURE__ */ n(X, { variant: "body2", children: o })
        ] })
      ]
    }
  );
  return r ? /* @__PURE__ */ n(ua, { title: r, children: i }) : i;
}
class _e {
  /**
   * ID of the entity
   */
  id;
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  path;
  constructor(t, r) {
    this.id = t, this.path = r;
  }
  get pathWithId() {
    return `${this.path}/${this.id}`;
  }
}
class Nn {
  /**
   * The latitude of this GeoPoint instance.
   */
  latitude;
  /**
   * The longitude of this GeoPoint instance.
   */
  longitude;
  constructor(t, r) {
    this.latitude = t, this.longitude = r;
  }
}
function Xt() {
  return /* @__PURE__ */ n(B, { sx: {
    borderRadius: "9999px",
    backgroundColor: "rgba(128,128,128,0.1)",
    width: "18px",
    height: "6px",
    display: "inline-block"
  } });
}
const Vc = 40, zc = 100, Uc = 200;
function Mt(e) {
  if (e === "tiny")
    return Vc;
  if (e === "small")
    return zc;
  if (e === "regular")
    return Uc;
  throw Error("Thumbnail size not mapped");
}
function pt(e) {
  switch (e) {
    case "xs":
    case "s":
      return "tiny";
    case "m":
      return "small";
    case "l":
    case "xl":
      return "regular";
    default:
      throw Error("Missing mapping value in getPreviewSizeFrom");
  }
}
function Nc({
  size: e,
  url: t
}) {
  const [r, o] = Q(!1), i = le(() => Mt(e), [e]), a = Be();
  if (e === "tiny")
    return /* @__PURE__ */ n(
      "img",
      {
        src: t,
        style: {
          position: "relative",
          objectFit: "cover",
          width: i,
          height: i,
          borderRadius: a.shape.borderRadius,
          maxHeight: "100%"
        }
      },
      "tiny_image_preview_" + t
    );
  const s = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: a.shape.borderRadius
  };
  return /* @__PURE__ */ C(
    B,
    {
      sx: {
        position: "relative",
        maxWidth: "100%",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: i,
        height: i
      },
      onMouseEnter: () => o(!0),
      onMouseMove: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ n(
          "img",
          {
            src: t,
            style: s
          }
        ),
        r && /* @__PURE__ */ C(q, { children: [
          navigator && /* @__PURE__ */ n(me, { title: "Copy url to clipboard", children: /* @__PURE__ */ n(B, { sx: {
            borderRadius: "9999px",
            position: "absolute",
            bottom: -4,
            right: 32,
            backgroundColor: a.palette.background.default
          }, children: /* @__PURE__ */ n(
            oe,
            {
              size: "small",
              onClick: (l) => (l.stopPropagation(), navigator.clipboard.writeText(t)),
              children: /* @__PURE__ */ n(
                yr,
                {
                  htmlColor: "#666",
                  fontSize: "small"
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ n(me, { title: "Open image in new tab", children: /* @__PURE__ */ n(
            "a",
            {
              style: {
                borderRadius: "9999px",
                position: "absolute",
                bottom: -4,
                right: -4,
                backgroundColor: a.palette.background.default
              },
              href: t,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ n(
                oe,
                {
                  size: "small",
                  onClick: (l) => l.stopPropagation(),
                  children: /* @__PURE__ */ n(
                    un,
                    {
                      htmlColor: "#666",
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          ) })
        ] })
      ]
    },
    "image_preview_" + t
  );
}
function Fn({
  url: e,
  previewType: t,
  size: r,
  hint: o
}) {
  return t ? t === "image" ? /* @__PURE__ */ n(
    Nc,
    {
      url: e,
      size: r
    }
  ) : t === "audio" ? /* @__PURE__ */ C(
    "audio",
    {
      controls: !0,
      src: e,
      children: [
        "Your browser does not support the",
        /* @__PURE__ */ n("code", { children: "audio" }),
        " element."
      ]
    }
  ) : t === "video" ? /* @__PURE__ */ n(
    xs,
    {
      sx: { maxWidth: r === "small" ? 300 : 500 },
      component: "video",
      controls: !0,
      image: e
    }
  ) : /* @__PURE__ */ C(
    B,
    {
      component: "a",
      href: e,
      rel: "noopener noreferrer",
      target: "_blank",
      onClick: (i) => i.stopPropagation(),
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: Mt(r),
        height: Mt(r)
      },
      children: [
        /* @__PURE__ */ n(xl, { sx: { flexGrow: 1 } }),
        o && /* @__PURE__ */ n(me, { title: o, children: /* @__PURE__ */ n(
          X,
          {
            sx: {
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              direction: "rtl",
              textAlign: "left"
            },
            variant: "caption",
            children: o
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ C(
    rn,
    {
      sx: (i) => ({
        display: "flex",
        wordBreak: "break-word",
        alignItems: "center",
        fontWeight: i.typography.fontWeightMedium
      }),
      href: e,
      onMouseDown: (i) => {
        i.preventDefault();
      },
      target: "_blank",
      children: [
        /* @__PURE__ */ n(un, { style: { marginRight: 8 }, fontSize: "small" }),
        e
      ]
    }
  );
}
function Ot({
  property: e,
  size: t
}) {
  e || console.error("No property assigned for skeleton component", e, t);
  let r;
  if (e.dataType === "string") {
    const o = e;
    o.url ? r = Zc(o, t) : o.storage ? r = fa(t) : r = rt();
  } else if (e.dataType === "array") {
    const o = e;
    o.of && (Array.isArray(o.of) ? r = /* @__PURE__ */ C(q, { children: [
      o.of.map((i, a) => sr(i, a)),
      " "
    ] }) : o.of.dataType === "map" && o.of.properties ? r = Hc(o.of.properties, t, o.of.previewProperties) : o.of.dataType === "string" ? o.of.enumValues ? r = Jc() : o.of.storage ? r = sr(o.of) : r = _c() : r = sr(o.of));
  } else
    e.dataType === "map" ? r = jc(e, t) : e.dataType === "date" ? r = rt() : e.dataType === "reference" ? r = qc() : (e.dataType, r = rt());
  return r || null;
}
function jc(e, t) {
  if (!e.properties)
    return /* @__PURE__ */ n(q, {});
  let r;
  return t === "regular" ? r = Object.keys(e.properties) : (r = e.previewProperties || Object.keys(e.properties), t === "small" ? r = r.slice(0, 3) : t === "tiny" && (r = r.slice(0, 1))), t !== "regular" ? /* @__PURE__ */ n(B, { sx: (o) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      [o.breakpoints.down("md")]: {
        marginBottom: `${o.spacing(0.5)} !important`
      },
      marginBottom: `${o.spacing(1)} !important`
    }
  }), children: r.map((o, i) => /* @__PURE__ */ n("div", { children: e.properties && e.properties[o] && /* @__PURE__ */ n(
    Ot,
    {
      property: e.properties[o],
      size: "small"
    }
  ) }, `map_${o}`)) }) : /* @__PURE__ */ n(On, { size: "small", children: /* @__PURE__ */ n($n, { children: r && r.map((o, i) => /* @__PURE__ */ C(
    on,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: [
        /* @__PURE__ */ n(
          qe,
          {
            sx: {
              verticalAlign: "top"
            },
            width: "30%",
            component: "th",
            children: /* @__PURE__ */ n(
              X,
              {
                variant: "caption",
                color: "textSecondary",
                children: e.properties[o].name
              }
            )
          },
          `table-cell-title--${o}`
        ),
        /* @__PURE__ */ n(
          qe,
          {
            width: "70%",
            component: "th",
            children: e.properties && e.properties[o] && /* @__PURE__ */ n(
              Ot,
              {
                property: e.properties[o],
                size: "small"
              }
            )
          },
          `table-cell-${o}`
        )
      ]
    },
    `map_preview_table__${i}`
  )) }) });
}
function Hc(e, t, r) {
  let o = r;
  return (!o || !o.length) && (o = Object.keys(e), t && (o = o.slice(0, 3))), /* @__PURE__ */ n(On, { size: "small", children: /* @__PURE__ */ n($n, { children: [0, 1, 2].map((i, a) => /* @__PURE__ */ n(on, { children: o && o.map(
    (s) => /* @__PURE__ */ n(
      qe,
      {
        component: "th",
        children: /* @__PURE__ */ n(
          Ot,
          {
            property: e[s],
            size: "small"
          }
        )
      },
      `table-cell-${s}`
    )
  ) }, `table_${i}_${a}`)) }) });
}
function _c() {
  return /* @__PURE__ */ n(se, { children: [0, 1].map((e, t) => rt(t)) });
}
function Jc() {
  return /* @__PURE__ */ n(se, { children: [0, 1].map(
    (e, t) => /* @__PURE__ */ n(q, { children: rt(t) })
  ) });
}
function sr(e, t = 0) {
  return /* @__PURE__ */ n(se, { children: [0, 1].map(
    (r, o) => /* @__PURE__ */ n(q, { children: /* @__PURE__ */ n(
      Ot,
      {
        property: e,
        size: "small"
      },
      `i_${o}`
    ) })
  ) }, "array_index");
}
function fa(e) {
  const t = e === "tiny" ? 40 : e === "small" ? 100 : 200;
  return /* @__PURE__ */ n(
    Xe,
    {
      variant: "rectangular",
      sx: (r) => ({
        borderRadius: `${r.shape.borderRadius}px`
      }),
      width: t,
      height: t
    }
  );
}
function qc() {
  return /* @__PURE__ */ n(Xe, { variant: "rectangular", width: 200, height: 100 });
}
function Zc(e, t = "regular") {
  return typeof e.url == "boolean" ? /* @__PURE__ */ C("div", { style: {
    display: "flex"
  }, children: [
    ha(),
    rt()
  ] }) : Xc(t);
}
function Xc(e) {
  return /* @__PURE__ */ n(
    B,
    {
      sx: {
        width: Mt(e),
        height: Mt(e)
      },
      children: ha()
    }
  );
}
function rt(e) {
  return /* @__PURE__ */ n(Xe, { variant: "text" }, `skeleton_${e}`);
}
function Tg(e) {
  return /* @__PURE__ */ n(
    Xe,
    {
      height: 20,
      variant: "text"
    }
  );
}
function ha() {
  return /* @__PURE__ */ n(Xe, { variant: "rectangular", width: 24, height: 24 });
}
const Kc = R.memo(td, ed);
function ed(e, t) {
  return e.size === t.size && e.storagePathOrDownloadUrl === t.storagePathOrDownloadUrl && e.storeUrl === t.storeUrl;
}
const No = {};
function td({
  storeUrl: e,
  storagePathOrDownloadUrl: t,
  size: r
}) {
  const o = fn(), [i, a] = R.useState(No[t]);
  if (Y(() => {
    if (!t)
      return;
    let c = !1;
    return o.getDownloadURL(t).then(function(d) {
      c || (a(d), No[t] = d);
    }), () => {
      c = !0;
    };
  }, [t]), !t)
    return null;
  const s = i?.metadata ? nd(i?.metadata.contentType) : void 0, l = s?.startsWith("image") ? "image" : s?.startsWith("video") ? "video" : s?.startsWith("audio") ? "audio" : "file";
  return i ? /* @__PURE__ */ n(
    Fn,
    {
      previewType: l,
      url: i.url,
      size: r,
      hint: t
    }
  ) : fa(r);
}
function nd(e) {
  return e.startsWith("image") ? "image/*" : e.startsWith("video") ? "video/*" : e.startsWith("audio") ? "audio/*" : e.startsWith("application") ? "application/*" : e.startsWith("text") ? "text/*" : e.startsWith("font") ? "font/*" : e;
}
const rd = new Li({ html: !0 }), io = R.memo(
  function({
    source: t
  }) {
    const r = le(() => rd.render(typeof t == "string" ? t : ""), [t]);
    return /* @__PURE__ */ n(
      "div",
      {
        dangerouslySetInnerHTML: { __html: r }
      }
    );
  },
  od
);
function od(e, t) {
  return e.source === t.source;
}
function ga(e) {
  let t = 0, r, o;
  for (r = 0; r < e.length; r++)
    o = e.charCodeAt(r), t = (t << 5) - t + o, t |= 0;
  return Math.abs(t);
}
const Cr = {
  blueLighter: { color: "#cfdfff", text: "#102046" },
  cyanLighter: { color: "#d0f0fd", text: "#04283f" },
  tealLighter: { color: "#c2f5e9", text: "#012524" },
  greenLighter: { color: "#d1f7c4", text: "#0b1d05" },
  yellowLighter: { color: "#ffeab6", text: "#3b2501" },
  orangeLighter: { color: "#fee2d5", text: "#6b2613" },
  redLighter: { color: "#ffdce5", text: "#4c0c1c" },
  pinkLighter: { color: "#ffdaf6", text: "#400832" },
  purpleLighter: { color: "#ede2fe", text: "#280b42" },
  grayLighter: { color: "#eee", text: "#040404" },
  blueLight: { color: "#9cc7ff", text: "#102046" },
  cyanLight: { color: "#77d1f3", text: "#04283f" },
  tealLight: { color: "#72ddc3", text: "#012524" },
  greenLight: { color: "#93e088", text: "#0b1d05" },
  yellowLight: { color: "#ffd66e", text: "#3b2501" },
  orangeLight: { color: "#ffa981", text: "#6b2613" },
  redLight: { color: "#ff9eb7", text: "#4c0c1c" },
  pinkLight: { color: "#f99de2", text: "#400832" },
  purpleLight: { color: "#cdb0ff", text: "#280b42" },
  grayLight: { color: "#ccc", text: "#040404" },
  blueDark: { color: "#2d7ff9", text: "#fff" },
  cyanDark: { color: "#18bfff", text: "#fff" },
  tealDark: { color: "#20d9d2", text: "#fff" },
  greenDark: { color: "#20c933", text: "#fff" },
  yellowDark: { color: "#fcb400", text: "#fff" },
  orangeDark: { color: "#ff6f2c", text: "#fff" },
  redDark: { color: "#f82b60", text: "#fff" },
  pinkDark: { color: "#ff08c2", text: "#fff" },
  purpleDark: { color: "#8b46ff", text: "#fff" },
  grayDark: { color: "#666", text: "#fff" },
  blueDarker: { color: "#2750ae", text: "#cfdfff" },
  cyanDarker: { color: "#0b76b7", text: "#d0f0fd" },
  tealDarker: { color: "#06a09b", text: "#c2f5e9" },
  greenDarker: { color: "#338a17", text: "#d1f7c4" },
  yellowDarker: { color: "#b87503", text: "#ffeab6" },
  orangeDarker: { color: "#d74d26", text: "#fee2d5" },
  redDarker: { color: "#ba1e45", text: "#ffdce5" },
  pinkDarker: { color: "#b2158b", text: "#ffdaf6" },
  purpleDarker: { color: "#6b1cb0", text: "#ede2fe" },
  grayDarker: { color: "#444", text: "#eee" }
};
function ao(e) {
  const t = ga(e), r = Object.keys(Cr), o = t % r.length;
  return Cr[r[o]];
}
function jn(e) {
  return Array.isArray(e) ? e : Object.entries(e).map(([t, r]) => typeof r == "string" ? {
    id: t,
    label: r
  } : {
    ...r,
    id: t
  });
}
function pa(e, t) {
  if (t)
    return e.find((r) => r.id === t);
}
function id(e, t) {
  const r = pa(e, t);
  if (!r?.color)
    return ao(t.toString());
  if (typeof r == "object" && "color" in r) {
    if (typeof r.color == "string")
      return Cr[r.color];
    if (typeof r.color == "object")
      return r.color;
  }
}
function Rn(e) {
  return typeof e == "object" && e.disabled;
}
function ad(e) {
  if (e !== void 0)
    return typeof e == "object" ? e.label : e;
}
function Ve({
  enumValues: e,
  enumKey: t,
  small: r
}) {
  if (!e)
    return null;
  const o = jn(e), i = t !== void 0 ? pa(o, t) : void 0, a = ad(i), s = id(o, t);
  return /* @__PURE__ */ n(
    ma,
    {
      colorScheme: s,
      label: a !== void 0 ? a : t,
      error: !a,
      outlined: !1,
      small: r
    }
  );
}
function ma({
  label: e,
  colorScheme: t,
  error: r,
  outlined: o,
  small: i
}) {
  const a = Be(), s = t ?? ao(e);
  return /* @__PURE__ */ n(
    Gr,
    {
      sx: {
        maxWidth: "100%",
        backgroundColor: r || !s ? "#eee" : s.color,
        color: r || !s ? "red" : s.text,
        fontWeight: a.typography.fontWeightRegular
      },
      size: i ? "small" : "medium",
      variant: o ? "outlined" : "filled",
      label: e
    }
  );
}
function ba({
  propertyKey: e,
  value: t,
  property: r,
  size: o
}) {
  if (r.enumValues) {
    const i = t, a = Ma(r);
    return /* @__PURE__ */ n(
      Ve,
      {
        enumKey: i,
        enumValues: a.enumValues,
        small: o !== "regular"
      }
    );
  } else if (r.previewAsTag) {
    const i = ao(e ?? "");
    return /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
      ma,
      {
        colorScheme: i,
        label: t,
        small: o !== "regular"
      }
    ) });
  } else {
    if (r.url)
      return /* @__PURE__ */ n(
        Fn,
        {
          size: o,
          url: t,
          previewType: typeof r.url == "string" ? r.url : void 0
        }
      );
    {
      if (!t)
        return /* @__PURE__ */ n(q, {});
      const i = t.split(`
`);
      return t && t.includes(`
`) ? /* @__PURE__ */ n("div", { children: i.map((a, s) => /* @__PURE__ */ C(R.Fragment, { children: [
        /* @__PURE__ */ n("span", { children: a }),
        s !== i.length - 1 && /* @__PURE__ */ n("br", {})
      ] }, `string_preview_${s}`)) }) : /* @__PURE__ */ n(q, { children: t });
    }
  }
}
function sd({
  propertyKey: e,
  value: t,
  property: r,
  size: o,
  entity: i
}) {
  const a = ie(), s = kt({
    propertyKey: e,
    property: r,
    propertyValue: t,
    fields: a.fields
  });
  if (Array.isArray(s?.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (s?.dataType !== "array" || !s.of || s.of.dataType !== "map")
    throw Error("Picked wrong preview component ArrayOfMapsPreview");
  const l = s.of, c = l.properties;
  if (!c)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  const d = t, A = l.previewProperties;
  if (!d)
    return null;
  let u = A;
  return (!u || !u.length) && (u = Object.keys(c), o && (u = u.slice(0, 3))), /* @__PURE__ */ n(On, { size: "small", children: /* @__PURE__ */ n($n, { children: d && d.map((h, g) => /* @__PURE__ */ n(
    on,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: u && u.map(
        (f) => /* @__PURE__ */ n(
          qe,
          {
            component: "th",
            children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
              Qe,
              {
                propertyKey: f,
                value: h[f],
                property: c[f],
                entity: i,
                size: "small"
              }
            ) })
          },
          `table-cell-${f}`
        )
      )
    },
    `table_${h}_${g}`
  )) }) });
}
function jo({
  propertyKey: e,
  value: t,
  property: r,
  entity: o,
  size: i
}) {
  const a = ie(), s = kt({
    propertyKey: e,
    property: r,
    propertyValue: t,
    fields: a.fields
  });
  if (!s.of)
    throw Error(`You need to specify an 'of' prop (or specify a custom field) in your array property ${e}`);
  if (s.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  const l = t;
  if (!l)
    return null;
  const c = i === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ n(B, { sx: {
    display: "flex",
    flexDirection: "column"
  }, children: l && l.map(
    (d, A) => {
      const u = s.resolvedProperties[A] ?? s.resolvedProperties[A] ?? (Array.isArray(s.of) ? s.of[A] : s.of);
      return u ? /* @__PURE__ */ C(
        R.Fragment,
        {
          children: [
            /* @__PURE__ */ n(B, { sx: {
              margin: 1
            }, children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
              Qe,
              {
                propertyKey: e,
                entity: o,
                value: d,
                property: u,
                size: c
              }
            ) }) }),
            A < l.length - 1 && /* @__PURE__ */ n(Gn, {})
          ]
        },
        "preview_array_" + d + "_" + A
      ) : null;
    }
  ) });
}
const Ne = (e) => e.palette.mode === "light" ? "rgb(238 238 240)" : "rgb(39 39 41)", vt = (e) => e.palette.mode === "light" ? "rgb(232 232 234)" : "rgb(49,49,50)", ld = (e) => e.palette.mode === "light" ? "rgb(224 224 226)" : "rgb(47 47 49)", va = (e) => e.palette.mode === "light" ? "rgb(248 248 249)" : "rgb(21 21 23)", xt = Pe.memo(dd, cd);
function cd(e, t) {
  return e.disabled === t.disabled && e.size === t.size && e.onHover === t.onHover && e.reference?.id === t.reference?.id && e.reference?.path === t.reference?.path && e.allowEntityNavigation === t.allowEntityNavigation;
}
function dd({
  disabled: e,
  reference: t,
  previewProperties: r,
  size: o,
  onHover: i,
  onClick: a,
  allowEntityNavigation: s = !0
}) {
  const l = ie(), c = ke(), d = Et(), A = c.getCollection(t.path);
  if (!A)
    throw Error(`Couldn't find the corresponding collection view for the path: ${t.path}`);
  const {
    entity: u,
    dataLoading: h,
    dataLoadingError: g
  } = no({
    path: t.path,
    entityId: t.id,
    collection: A,
    useCache: !0
  });
  u && Ho.set(t.pathWithId, u);
  const f = u ?? Ho.get(t.pathWithId), p = le(() => Ie({
    collection: A,
    path: t.path,
    values: f?.values,
    fields: l.fields
  }), [A]), m = le(
    () => Va(p, l.fields, r, o === "small" || o === "regular" ? 3 : 1),
    [r, p, o]
  );
  let w;
  return p ? (t ? t instanceof _e ? f && !f.values ? w = /* @__PURE__ */ n(
    Ee,
    {
      error: "Reference does not exist",
      tooltip: t.path
    }
  ) : w = /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ C(B, { sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      width: "100%",
      maxWidth: "calc(100% - 52px)",
      margin: 1
    }, children: [
      o !== "tiny" && (t ? /* @__PURE__ */ n(B, { sx: {
        display: o !== "regular" ? "block" : void 0,
        whiteSpace: o !== "regular" ? "nowrap" : void 0,
        overflow: o !== "regular" ? "hidden" : void 0,
        textOverflow: o !== "regular" ? "ellipsis" : void 0
      }, children: /* @__PURE__ */ n(
        X,
        {
          variant: "caption",
          className: "mono",
          children: t.id
        }
      ) }) : /* @__PURE__ */ n(Xe, { variant: "text" })),
      m && m.map((b) => {
        const E = p.properties[b];
        return E ? /* @__PURE__ */ n(
          B,
          {
            sx: {
              my: m.length > 1 ? 0.5 : 0
            },
            children: f ? /* @__PURE__ */ n(
              Qe,
              {
                propertyKey: b,
                value: dt(f.values, b),
                property: E,
                entity: f,
                size: "tiny"
              }
            ) : /* @__PURE__ */ n(
              Ot,
              {
                property: E,
                size: "tiny"
              }
            )
          },
          "ref_prev_" + b
        ) : null;
      })
    ] }),
    /* @__PURE__ */ n(B, { sx: {
      my: o === "tiny" ? 0.5 : 1
    }, children: !e && f && s && /* @__PURE__ */ n(me, { title: `See details for ${f.id}`, children: /* @__PURE__ */ n(
      oe,
      {
        color: "inherit",
        size: "small",
        onClick: (b) => {
          b.stopPropagation(), l.onAnalyticsEvent?.("entity_click_from_reference", {
            path: f.path,
            entityId: f.id
          }), d.open({
            entityId: f.id,
            path: f.path,
            collection: p,
            updateUrl: !0
          });
        },
        children: /* @__PURE__ */ n(jr, { fontSize: "small" })
      }
    ) }) })
  ] }) : (console.error("Reference preview received value of type", typeof t), w = /* @__PURE__ */ n(
    Ee,
    {
      error: "Unexpected value",
      tooltip: JSON.stringify(t)
    }
  )) : w = /* @__PURE__ */ n(Ee, { error: "Reference not set" }), /* @__PURE__ */ n(
    Ad,
    {
      onClick: e ? void 0 : a,
      onHover: e ? void 0 : i,
      size: o,
      children: w
    }
  )) : /* @__PURE__ */ n(
    Ee,
    {
      error: "Could not find collection with id " + p
    }
  );
}
function Ad({
  children: e,
  onHover: t,
  size: r,
  onClick: o
}) {
  return /* @__PURE__ */ n(
    X,
    {
      variant: "label",
      sx: (i) => {
        const a = o ? {
          tabindex: 0,
          backgroundColor: t ? vt(i) : Ne(i),
          transition: "background-color 300ms ease, box-shadow 300ms ease",
          boxShadow: t ? "0 0 0 2px rgba(128,128,128,0.05)" : void 0,
          cursor: t ? "pointer" : void 0
        } : {};
        return {
          width: "100%",
          display: "flex",
          borderRadius: `${i.shape.borderRadius}px`,
          overflow: "hidden",
          padding: r === "regular" ? 1 : 0,
          itemsAlign: r === "tiny" ? "center" : void 0,
          ...a
        };
      },
      onClick: (i) => {
        o && (i.preventDefault(), o());
      },
      children: e
    }
  );
}
const Ho = /* @__PURE__ */ new Map();
function ud({
  propertyKey: e,
  value: t,
  property: r,
  size: o
}) {
  const i = ie(), a = kt({
    propertyKey: e,
    property: r,
    propertyValue: t,
    fields: i.fields
  });
  if (Array.isArray(a?.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (a?.dataType !== "array" || !a.of || a.of.dataType !== "reference")
    throw Error("Picked wrong preview component ArrayOfReferencesPreview");
  const s = o === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ n(B, { sx: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }, children: t && t.map(
    (l, c) => {
      const d = a.of;
      return /* @__PURE__ */ n(
        B,
        {
          sx: {
            marginTop: 0.25,
            marginBottom: 0.25,
            width: "100%"
          },
          children: /* @__PURE__ */ n(
            xt,
            {
              disabled: !d.path,
              previewProperties: d.previewProperties,
              size: s,
              reference: l
            }
          )
        },
        `preview_array_ref_${e}_${c}`
      );
    }
  ) });
}
const _o = "ArrayOfStorageComponentsPreview", Dn = {
  arrayWrap: `${_o}-arrayWrap`,
  arrayItem: `${_o}-arrayItem`
}, fd = tt("div")(({ theme: e }) => ({
  [`&.${Dn.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${Dn.arrayItem}`]: {
    margin: e.spacing(0.5)
  }
}));
function hd({
  propertyKey: e,
  entity: t,
  value: r,
  property: o,
  size: i
}) {
  const a = ie(), s = kt({
    propertyKey: e,
    property: o,
    propertyValue: r,
    fields: a.fields
  });
  if (Array.isArray(s.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (s.dataType !== "array" || !s.of || s.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStorageComponentsPreview");
  const l = i === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ n(fd, { className: Dn.arrayWrap, children: r && r.map(
    (c, d) => /* @__PURE__ */ n(
      "div",
      {
        className: Dn.arrayItem,
        children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
          Qe,
          {
            propertyKey: e,
            value: c,
            entity: t,
            property: s.of,
            size: l
          }
        ) })
      },
      `preview_array_storage_${e}_${d}`
    )
  ) });
}
function so({
  name: e,
  value: t,
  enumValues: r,
  size: o
}) {
  return /* @__PURE__ */ n(B, { sx: (i) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: i.spacing(0.5)
  }), children: t && t.map(
    (i, a) => /* @__PURE__ */ n(
      he,
      {
        children: /* @__PURE__ */ n(
          Ve,
          {
            enumKey: i,
            enumValues: r,
            small: o !== "regular"
          }
        )
      },
      `preview_array_ref_${e}_${a}`
    )
  ) });
}
function Jo({
  propertyKey: e,
  value: t,
  property: r,
  size: o
}) {
  if (r.dataType !== "array")
    throw Error("Picked wrong preview component ArrayEnumPreview");
  const i = r.of;
  if (!i.enumValues)
    throw Error("Picked wrong preview component ArrayEnumPreview");
  return t ? /* @__PURE__ */ n(
    so,
    {
      name: e,
      value: t,
      enumValues: i.enumValues,
      size: o
    }
  ) : null;
}
function gd({
  propertyKey: e,
  value: t,
  property: r,
  entity: o,
  size: i
}) {
  const a = ie(), s = kt({
    propertyKey: e,
    property: r,
    propertyValue: t,
    fields: a.fields
  });
  if (Array.isArray(s.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (!s.of || s.dataType !== "array" || s.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStringsPreview");
  if (t && !Array.isArray(t))
    return /* @__PURE__ */ n("div", { children: `Unexpected value: ${t}` });
  const l = s.of;
  return /* @__PURE__ */ n(B, { sx: {
    display: "flex",
    gap: "2px",
    flexDirection: "column"
  }, children: t && t.map(
    (c, d) => /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
      ba,
      {
        propertyKey: e,
        property: l,
        value: c,
        entity: o,
        size: i
      }
    ) }) }, `preview_array_strings_${e}_${d}`)
  ) });
}
const sn = "type", Pn = "value", lr = "ArrayOneOfPreview", tn = {
  array: `${lr}-array`,
  arrayWrap: `${lr}-arrayWrap`,
  arrayItemBig: `${lr}-arrayItemBig`
}, pd = tt("div")(({ theme: e }) => ({
  [`&.${tn.array}`]: {
    display: "flex",
    flexDirection: "column"
  },
  [`& .${tn.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${tn.arrayItemBig}`]: {
    margin: e.spacing(1)
  }
}));
function md({
  propertyKey: e,
  value: t,
  property: r,
  size: o,
  entity: i
}) {
  const a = ie(), s = kt({
    propertyKey: e,
    property: r,
    propertyValue: t,
    fields: a.fields
  });
  if (s?.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  if (!s?.oneOf)
    throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${e}`);
  const l = t;
  if (!l)
    return null;
  const c = o === "regular" ? "small" : "tiny", d = s.oneOf.typeField ?? sn, A = s.oneOf.valueField ?? Pn, u = s.oneOf.properties;
  return /* @__PURE__ */ n(pd, { className: tn.array, children: l && l.map(
    (h, g) => /* @__PURE__ */ C(
      R.Fragment,
      {
        children: [
          /* @__PURE__ */ n("div", { className: tn.arrayItemBig, children: /* @__PURE__ */ n(he, { children: h && /* @__PURE__ */ n(
            Qe,
            {
              propertyKey: e,
              value: h[A],
              entity: i,
              property: s.resolvedProperties[g] ?? u[h[d]],
              size: c
            }
          ) }) }),
          g < l.length - 1 && /* @__PURE__ */ n(Gn, {})
        ]
      },
      "preview_array_" + h + "_" + g
    )
  ) });
}
function bd({
  propertyKey: e,
  value: t,
  property: r,
  entity: o,
  size: i
}) {
  if (r.dataType !== "map")
    throw Error("Picked wrong preview component MapPropertyPreview");
  const a = r;
  if (!a.properties)
    return /* @__PURE__ */ n(vd, { value: t });
  if (!t)
    return null;
  let s;
  return i === "regular" ? s = Object.keys(a.properties) : (s = a.previewProperties || Object.keys(a.properties), i === "small" ? s = s.slice(0, 3) : i === "tiny" && (s = s.slice(0, 1))), i !== "regular" ? /* @__PURE__ */ n(B, { sx: (l) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      [l.breakpoints.down("md")]: {
        marginBottom: `${l.spacing(0.5)} !important`
      },
      marginBottom: `${l.spacing(1)} !important`
    }
  }), children: s.map((l, c) => /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    he,
    {
      children: /* @__PURE__ */ n(
        Qe,
        {
          propertyKey: l,
          value: t[l],
          property: a.properties[l],
          entity: o,
          size: i
        }
      )
    },
    "map_preview_" + a.name + l + c
  ) }, `map_${l}`)) }) : /* @__PURE__ */ n(
    B,
    {
      sx: { display: "flex", flexDirection: "column", width: "100%" },
      children: s && s.map((l, c) => /* @__PURE__ */ C(
        B,
        {
          sx: (d) => ({
            display: "flex",
            flexDirection: "row",
            pt: 0.5,
            "&:not(:last-child)": {
              borderBottom: `1px solid ${d.palette.divider}`,
              pb: 0.5
            }
          }),
          children: [
            /* @__PURE__ */ n(
              B,
              {
                sx: {
                  width: "25%",
                  verticalAlign: "top",
                  pr: 1
                },
                children: /* @__PURE__ */ n(
                  X,
                  {
                    variant: "caption",
                    className: "mono",
                    color: "textSecondary",
                    children: a.properties[l].name
                  }
                )
              },
              `table-cell-title-${l}-${l}`
            ),
            /* @__PURE__ */ n(
              B,
              {
                sx: {
                  flexGrow: 1
                },
                children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
                  Qe,
                  {
                    propertyKey: l,
                    value: t[l],
                    property: a.properties[l],
                    entity: o,
                    size: "small"
                  }
                ) })
              }
            )
          ]
        },
        `map_preview_table_${l}}`
      ))
    }
  );
}
function vd({ value: e }) {
  return typeof e != "object" ? null : /* @__PURE__ */ n(
    B,
    {
      sx: { display: "flex", flexDirection: "column", width: "100%" },
      children: Object.entries(e).map(([t, r]) => /* @__PURE__ */ C(
        B,
        {
          sx: (o) => ({
            display: "flex",
            flexDirection: "row",
            pt: 0.5,
            "&:not(:last-child)": {
              borderBottom: `1px solid ${o.palette.divider}`,
              pb: 0.5
            }
          }),
          children: [
            /* @__PURE__ */ n(
              B,
              {
                sx: {
                  width: "25%",
                  verticalAlign: "top",
                  pr: 1
                },
                children: /* @__PURE__ */ n(
                  X,
                  {
                    variant: "caption",
                    className: "mono",
                    color: "textSecondary",
                    children: t
                  }
                )
              },
              `table-cell-title-${t}-${t}`
            ),
            /* @__PURE__ */ n(
              B,
              {
                sx: {
                  flexGrow: 1
                },
                children: /* @__PURE__ */ n(
                  X,
                  {
                    variant: "caption",
                    className: "mono",
                    children: /* @__PURE__ */ n(he, { children: JSON.stringify(r) })
                  }
                )
              }
            )
          ]
        },
        `map_preview_table_${t}}`
      ))
    }
  );
}
const xd = "MMMM dd, yyyy, HH:mm:ss";
function wd({
  date: e
}) {
  const t = ie(), r = t?.locale ? wi[t?.locale] : void 0, o = t?.dateTimeFormat ?? xd, i = e ? wl(e, o, { locale: r }) : "";
  return /* @__PURE__ */ n(q, { children: i });
}
function yd({ value: e }) {
  return e ? /* @__PURE__ */ n(_s, { color: "secondary" }) : /* @__PURE__ */ n(Js, { color: "disabled" });
}
function Ed({
  value: e,
  property: t,
  size: r
}) {
  if (t.enumValues) {
    const o = e, i = _n(t.enumValues);
    return i ? /* @__PURE__ */ n(
      Ve,
      {
        enumKey: o,
        enumValues: i,
        small: r !== "regular"
      }
    ) : /* @__PURE__ */ n(q, { children: e });
  } else
    return /* @__PURE__ */ n(q, { children: e });
}
function Qe(e) {
  const t = ie();
  let r;
  const {
    property: o,
    propertyKey: i,
    value: a,
    size: s,
    height: l,
    width: c,
    entity: d
  } = e, A = We({
    propertyKey: i,
    propertyOrBuilder: o,
    propertyValue: a,
    fields: t.fields
  });
  if (a === void 0 || A === null)
    r = /* @__PURE__ */ n(Xt, {});
  else if (A.Preview)
    r = ms(
      A.Preview,
      {
        propertyKey: i,
        value: a,
        property: A,
        size: s,
        height: l,
        width: c,
        entity: d,
        customProps: A.customProps
      }
    );
  else if (a === null)
    r = /* @__PURE__ */ n(Xt, {});
  else if (A.dataType === "string") {
    const u = A;
    typeof a == "string" ? u.url ? typeof u.url == "boolean" ? r = /* @__PURE__ */ n(
      Fn,
      {
        size: e.size,
        url: a
      }
    ) : typeof u.url == "string" && (r = /* @__PURE__ */ n(
      Fn,
      {
        size: e.size,
        url: a,
        previewType: u.url
      }
    )) : u.storage ? r = /* @__PURE__ */ n(
      Kc,
      {
        storeUrl: A.storage?.storeUrl ?? !1,
        size: e.size,
        storagePathOrDownloadUrl: a
      }
    ) : u.markdown ? r = /* @__PURE__ */ n(io, { source: a }) : r = /* @__PURE__ */ n(
      ba,
      {
        ...e,
        property: u,
        value: a
      }
    ) : r = ht(i, A.dataType, a);
  } else if (A.dataType === "array")
    if (a instanceof Array) {
      const u = A;
      if (!u.of && !u.oneOf)
        throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${i}`);
      u.of ? Array.isArray(u.of) ? r = /* @__PURE__ */ n(
        jo,
        {
          ...e,
          value: a,
          property: A
        }
      ) : u.of.dataType === "map" ? r = /* @__PURE__ */ n(
        sd,
        {
          propertyKey: i,
          property: A,
          value: a,
          entity: d,
          size: s
        }
      ) : u.of.dataType === "reference" ? typeof u.of.path == "string" ? r = /* @__PURE__ */ n(
        ud,
        {
          ...e,
          value: a,
          property: A
        }
      ) : r = /* @__PURE__ */ n(Xt, {}) : u.of.dataType === "string" ? u.of.enumValues ? r = /* @__PURE__ */ n(
        Jo,
        {
          ...e,
          value: a,
          property: A
        }
      ) : u.of.storage ? r = /* @__PURE__ */ n(
        hd,
        {
          ...e,
          value: a,
          property: A
        }
      ) : r = /* @__PURE__ */ n(
        gd,
        {
          ...e,
          value: a,
          property: A
        }
      ) : u.of.dataType === "number" && u.of.enumValues ? r = /* @__PURE__ */ n(
        Jo,
        {
          ...e,
          value: a,
          property: A
        }
      ) : r = /* @__PURE__ */ n(
        jo,
        {
          ...e,
          value: a,
          property: A
        }
      ) : u.oneOf && (r = /* @__PURE__ */ n(
        md,
        {
          ...e,
          value: a,
          property: A
        }
      ));
    } else
      r = ht(i, A.dataType, a);
  else
    A.dataType === "map" ? typeof a == "object" ? r = /* @__PURE__ */ n(
      bd,
      {
        ...e,
        property: A
      }
    ) : r = ht(i, A.dataType, a) : A.dataType === "date" ? a instanceof Date ? r = /* @__PURE__ */ n(wd, { date: a }) : r = ht(i, A.dataType, a) : A.dataType === "reference" ? typeof A.path == "string" ? a instanceof _e ? r = /* @__PURE__ */ n(
      xt,
      {
        disabled: !A.path,
        previewProperties: A.previewProperties,
        size: e.size,
        onClick: e.onClick,
        reference: a
      }
    ) : r = ht(i, A.dataType, a) : r = /* @__PURE__ */ n(Xt, {}) : A.dataType === "boolean" ? typeof a == "boolean" ? r = /* @__PURE__ */ n(yd, { value: a }) : r = ht(i, A.dataType, a) : A.dataType === "number" ? typeof a == "number" ? r = /* @__PURE__ */ n(
      Ed,
      {
        ...e,
        value: a,
        property: A
      }
    ) : r = ht(i, A.dataType, a) : r = JSON.stringify(a);
  return r ?? /* @__PURE__ */ n(Xt, {});
}
function ht(e, t, r) {
  return console.error(`Unexpected value for property ${e}, of type ${t}`, r), /* @__PURE__ */ n(
    Ee,
    {
      title: "Unexpected value",
      error: `${JSON.stringify(r)}`
    }
  );
}
const Qg = Pe.memo(
  function({
    builder: t
  }) {
    const [r, o] = Q(!0), [i, a] = Q(null);
    return Y(() => {
      let s = !1;
      return t.then((l) => {
        s || (o(!1), a(l));
      }).catch((l) => {
        o(!1), console.error(l);
      }), () => {
        s = !0;
      };
    }, [t]), r ? /* @__PURE__ */ n(Xe, { variant: "text" }) : /* @__PURE__ */ n(Pe.Fragment, { children: i });
  }
), Cd = (e, ...t) => ({
  ...t.reduce((r, o) => ({
    ...r,
    [o]: e[o]
  }), {})
});
function cr(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function it(e, t) {
  const r = cr(e), o = r ? { ...e } : e;
  return r && cr(t) && Object.keys(t).forEach((i) => {
    cr(t[i]) ? i in e ? o[i] = it(e[i], t[i]) : Object.assign(o, { [i]: t[i] }) : Object.assign(o, { [i]: t[i] });
  }), o;
}
function dt(e, t) {
  if (e && typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const r = t.split(".");
      return dt(e[r[0]], r.slice(1).join("."));
    }
  }
}
function Mg(e, t) {
  let r = { ...e };
  const o = t.split("."), i = o.pop();
  for (const a of o)
    r = r[a];
  return i && delete r[i], r;
}
function qo(e) {
  return typeof e == "object" ? Object.entries(e).filter(([t, r]) => typeof r != "function").map(([t, r]) => Array.isArray(r) ? { [t]: r.map((o) => qo(o)) } : typeof r == "object" ? { [t]: qo(r) } : { [t]: r }).reduce((t, r) => ({ ...t, ...r }), {}) : e;
}
function xa(e) {
  if (!e)
    return null;
  if (typeof e == "object") {
    if ("id" in e)
      return e.id;
    if (e instanceof Date)
      return e.toLocaleString();
    if (e instanceof Nn)
      return ko(e);
  }
  return ko(e, { ignoreUnknown: !0 });
}
function Zo(e) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return e.map((t) => Zo(t));
  if (typeof e == "object") {
    const t = {};
    return Object.keys(e).forEach((r) => {
      if (!Xo(e)) {
        const o = Zo(e[r]);
        o !== void 0 && !Xo(o) && (t[r] = o);
      }
    }), t;
  }
  return e;
}
function Xo(e) {
  return e && Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length === 0;
}
function hn(e) {
  return e.readOnly || e.dataType === "date" && e.autoValue ? !0 : e.dataType === "reference" ? !e.path : !1;
}
function Hn(e) {
  return typeof e.disabled == "object" && !!e.disabled.hidden;
}
function je(e) {
  return typeof e == "function";
}
function Tn(e) {
  return e ? Object.entries(e).map(([t, r]) => {
    const o = lo(r);
    return o === void 0 ? {} : { [t]: o };
  }).reduce((t, r) => ({ ...t, ...r }), {}) : {};
}
function lo(e) {
  if (!je(e))
    if (e.dataType === "map" && e.properties) {
      const t = Tn(e.properties);
      return Object.keys(t).length === 0 ? void 0 : t;
    } else
      return e.defaultValue ? e.defaultValue : wa(e.dataType);
}
function wa(e) {
  return e === "string" || e === "number" ? null : e === "boolean" ? !1 : e === "date" ? null : e === "array" ? [] : e === "map" ? {} : null;
}
function Bd({
  inputValues: e,
  properties: t,
  status: r,
  timestampNowValue: o,
  setDateToMidnight: i
}) {
  return ya(
    e,
    t,
    (a, s) => {
      if (s.dataType === "date") {
        let l;
        return r === "existing" && s.autoValue === "on_update" || (r === "new" || r === "copy") && (s.autoValue === "on_update" || s.autoValue === "on_create") ? l = o : l = a, s.mode === "date" && (l = i(l)), l;
      } else
        return a;
    }
  ) ?? {};
}
function kd(e, t) {
  const r = e;
  return Object.entries(t).forEach(([o, i]) => {
    e && e[o] !== void 0 ? r[o] = e[o] : i.validation?.required && (r[o] = null);
  }), r;
}
function $t(e) {
  return new _e(e.id, e.path);
}
function ya(e, t, r) {
  const o = Object.entries(t).map(([a, s]) => {
    const l = e && e[a], c = Br(l, s, r);
    if (c !== void 0)
      return { [a]: c };
  }).reduce((a, s) => ({ ...a, ...s }), {}), i = { ...e, ...o };
  if (Object.keys(i).length !== 0)
    return i;
}
function Br(e, t, r) {
  let o;
  if (t.dataType === "map" && t.properties)
    o = ya(e, t.properties, r);
  else if (t.dataType === "array")
    if (t.of && Array.isArray(e))
      o = e.map((i) => Br(i, t.of, r));
    else if (t.oneOf && Array.isArray(e)) {
      const i = t.oneOf?.typeField ?? sn, a = t.oneOf?.valueField ?? Pn;
      o = e.map((s) => {
        if (s === null)
          return null;
        if (typeof s != "object")
          return s;
        const l = s[i], c = t.oneOf?.properties[l];
        return !l || !c ? s : {
          [i]: l,
          [a]: Br(s[a], c, r)
        };
      });
    } else
      o = e;
  else
    o = r(e, t);
  return o;
}
function Ea(e, t) {
  const r = e.subcollections?.map((i) => {
    const a = t.subcollections?.find((s) => s.path === i.path) ?? t.subcollections?.find((s) => s.alias === i.alias);
    return a ? Ea(i, a) : i;
  }), o = it(e, t);
  return {
    ...o,
    subcollections: r,
    properties: Ca(o.properties, o.propertiesOrder)
  };
}
function Og(e, t) {
  const r = e.map((a) => ({
    ...a,
    editable: !0,
    deletable: !0
  })), o = (t ?? []).map((a) => {
    const s = r?.find((l) => l.path === a.path) ?? r?.find((l) => l.alias === a.alias);
    return s ? { ...Ea(a, s), deletable: !1 } : { ...a, deletable: !1 };
  }), i = r.filter((a) => !o.map((s) => s.path).includes(a.path) || !o.map((s) => s.alias).includes(a.alias));
  return [...o, ...i];
}
function Ca(e, t) {
  try {
    const r = Object.keys(e);
    return (t ?? r).map((i) => {
      if (e[i]) {
        const a = e[i];
        return !je(a) && a?.dataType === "map" && a.properties ? {
          [i]: {
            ...a,
            properties: Ca(a.properties, a.propertiesOrder)
          }
        } : { [i]: a };
      } else
        return;
    }).filter((i) => i !== void 0).reduce((i, a) => ({ ...i, ...a }), {});
  } catch (r) {
    return console.error("Error sorting properties", r), e;
  }
}
function Ba(e, t) {
  if (e)
    return typeof e == "string" ? e : e(t);
}
const Id = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g, $g = (e) => {
  const t = e.match(Id);
  return t ? t.map((r) => r.toLowerCase()).join("-") : "";
}, Sd = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g, Gg = (e) => {
  const t = e.match(Sd);
  return t ? t.map((r) => r.toLowerCase()).join("_") : "";
};
function ln(e = 5) {
  return Math.random().toString(36).slice(2, 2 + e);
}
function Lg() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
const Fd = "::";
function Ko(e) {
  return Rd(ct(e));
}
function Rd(e) {
  return e.length === 1 ? e[0] : e.reduce((t, r) => `${t}${Fd}${r}`);
}
function ct(e) {
  return e.split("/").filter((t, r) => r % 2 === 0);
}
function Yg(e) {
  return e ? e.toString() : "";
}
function Dd(e) {
  if (!e)
    return;
  const t = e.match(/\/(.*?)\/([a-z]*)?$/i);
  return t ? new RegExp(t[1], t[2] || "") : new RegExp(e, "");
}
function Wg(e) {
  return e.match(/\/((?![*+?])(?:[^\r\n[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/) ? !0 : !!e.match(/((?![*+?])(?:[^\r\n[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*])+)/);
}
function co(e, t, r, o = 300) {
  const i = R.useRef(!1), a = () => {
    t(), i.current = !1;
  }, s = R.useRef(void 0);
  R.useEffect(
    () => (i.current = !0, clearTimeout(s.current), s.current = setTimeout(a, o), () => {
      r && a();
    }),
    [r, e]
  );
}
function Vg(e, t = 300) {
  const [r, o] = Q(e);
  return Y(
    () => {
      const i = setTimeout(() => {
        o(e);
      }, t);
      return () => {
        clearTimeout(i);
      };
    },
    [e, t]
    // Only re-call effect if value or delay changes
  ), r;
}
function Ao({
  name: e,
  addLabel: t,
  value: r,
  disabled: o = !1,
  buildEntry: i,
  small: a,
  onInternalIdAdded: s,
  includeAddButton: l,
  newDefaultEntry: c = null,
  setFieldValue: d
}) {
  return /* @__PURE__ */ n(
    ss,
    {
      droppableId: e,
      addLabel: t,
      value: r,
      disabled: o,
      buildEntry: i,
      small: a,
      onInternalIdAdded: s,
      includeAddButton: l,
      newDefaultEntry: c,
      onValueChange: (A) => d(e, A)
    }
  );
}
function Me({ property: e }) {
  const t = typeof e.disabled == "object" ? e.disabled.disabledMessage : void 0;
  return (
    // <FormHelperText>{disabledTooltip ? disabledTooltip : property.description}</FormHelperText>
    /* @__PURE__ */ C(B, { display: "flex", children: [
      /* @__PURE__ */ n(B, { flexGrow: 1, children: /* @__PURE__ */ n(Se, { children: t || e.description }) }),
      e.longDescription && /* @__PURE__ */ n(
        me,
        {
          title: /* @__PURE__ */ n(
            X,
            {
              variant: "caption",
              children: e.longDescription
            }
          ),
          placement: "bottom-start",
          arrow: !0,
          children: /* @__PURE__ */ n(
            oe,
            {
              edge: "start",
              size: "small",
              sx: {
                alignSelf: "flex-start"
              },
              children: /* @__PURE__ */ n(
                pl,
                {
                  color: "disabled",
                  fontSize: "small"
                }
              )
            }
          )
        }
      )
    ] })
  );
}
function Oe({
  icon: e,
  title: t,
  small: r,
  sx: o,
  required: i
}) {
  return /* @__PURE__ */ C(B, { sx: {
    display: "inline-flex",
    marginBottom: "2px",
    alignItems: "center",
    gap: r ? 1 : 1.5,
    ...o
  }, component: "span", children: [
    e,
    /* @__PURE__ */ n(
      X,
      {
        component: "span",
        sx: {
          fontWeight: 500,
          fontSize: r ? "1rem" : ".85rem",
          transformOrigin: "left top",
          transform: r ? "translate(8px, 0px) scale(0.75)" : void 0
        },
        children: (t ?? "") + (i ? " *" : "")
      }
    )
  ] });
}
function zg(e) {
  const t = R.useRef(), [r, o] = R.useState(e.value), i = $r(r);
  Y(() => {
    o(e.value);
  }, [e.value]), Y(() => {
    !e.value && !i || i !== e.value && t.current && e.onChange && e.onChange(t.current);
  }, [i, e.value, e.onChange]);
  const a = y((s) => {
    t.current = s, o(s.target.value);
  }, []);
  return /* @__PURE__ */ n(
    ot,
    {
      ...e,
      onChange: a,
      value: r
    }
  );
}
function Ug({
  field: e,
  form: t,
  label: r,
  tooltip: o,
  disabled: i,
  size: a = "small"
}) {
  const s = /* @__PURE__ */ n(
    Lr,
    {
      checked: e.value ?? !1,
      sx: { ml: 0 },
      disabled: i,
      control: /* @__PURE__ */ n(
        Yr,
        {
          size: a,
          disabled: i,
          onChange: (l, c) => t.setFieldValue(e.name, c)
        }
      ),
      label: /* @__PURE__ */ n(X, { variant: "body2", children: r })
    }
  );
  return o ? /* @__PURE__ */ n(
    me,
    {
      title: o,
      children: s
    }
  ) : s;
}
class he extends R.Component {
  constructor(t) {
    super(t), this.state = { error: null };
  }
  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, r) {
    console.error(t);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ C(
      B,
      {
        display: "flex",
        flexDirection: "column",
        m: 0.5,
        children: [
          /* @__PURE__ */ C(
            B,
            {
              display: "flex",
              alignItems: "center",
              m: 0.5,
              children: [
                /* @__PURE__ */ n(Nr, { color: "error", fontSize: "small" }),
                /* @__PURE__ */ n(B, { marginLeft: 1, children: "Error" })
              ]
            }
          ),
          /* @__PURE__ */ n(X, { variant: "caption", children: this.state.error?.message ?? "See the error in the console" })
        ]
      }
    ) : this.props.children;
  }
}
function ka({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  isSubmitting: a,
  touched: s,
  tableMode: l,
  property: c,
  includeDescription: d,
  context: A
}) {
  if (!A.entityId)
    throw new Error("ReadOnlyFieldBinding: Entity id is null");
  const u = {
    id: A.entityId,
    values: A.values,
    path: A.path
  };
  return /* @__PURE__ */ C(we, { fullWidth: !0, error: i, children: [
    !l && /* @__PURE__ */ n(Se, { filled: !0, children: /* @__PURE__ */ n(
      Oe,
      {
        icon: Re(c),
        required: c.validation?.required,
        title: c.name
      }
    ) }),
    /* @__PURE__ */ n(
      Wt,
      {
        sx: (h) => ({
          minHeight: "56px",
          elevation: 0,
          padding: h.spacing(2),
          [h.breakpoints.up("md")]: {
            padding: h.spacing(3)
          }
        }),
        variant: "outlined",
        children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
          Qe,
          {
            propertyKey: e,
            value: t,
            property: c,
            entity: u,
            size: "regular"
          }
        ) })
      }
    ),
    i && typeof o == "string" && /* @__PURE__ */ n(Se, { error: !0, children: o }),
    d && /* @__PURE__ */ n(Me, { property: c })
  ] });
}
const Ut = R.memo(Pd, (e, t) => {
  if (e.propertyKey !== t.propertyKey)
    return !1;
  const r = je(e.property) || e.property.fromBuilder, o = je(t.property) || t.property.fromBuilder;
  return !((r === o || xe(e.property, t.property)) && e.disabled === t.disabled) || Qn(t.property), !1;
});
function Pd({
  propertyKey: e,
  property: t,
  context: r,
  includeDescription: o,
  underlyingValueHasChanged: i,
  disabled: a,
  tableMode: s,
  partOfArray: l,
  autoFocus: c,
  context: {
    values: d,
    collection: A,
    path: u,
    entityId: h
  }
}) {
  const g = ie(), p = Qn(t, g.plugins) ? ml : Mi;
  return /* @__PURE__ */ n(
    p,
    {
      name: e,
      children: (m) => {
        let w;
        const b = We({
          propertyKey: e,
          propertyValue: m.field.value,
          propertyOrBuilder: t,
          values: m.form.values,
          path: r.path,
          entityId: r.entityId,
          fields: g.fields
        });
        if (b === null || Hn(b))
          return /* @__PURE__ */ n(q, {});
        if (hn(b))
          w = ka;
        else if (b.Field)
          typeof b.Field == "function" && (w = b.Field);
        else {
          const v = ho(b);
          if (!v)
            throw new Error(`INTERNAL: Could not find field config for property ${e}`);
          w = v.Field;
        }
        return w ? /* @__PURE__ */ n(
          Td,
          {
            Component: w,
            componentProps: {
              propertyKey: e,
              property: b,
              includeDescription: o,
              underlyingValueHasChanged: i,
              context: r,
              disabled: a,
              tableMode: s,
              partOfArray: l,
              autoFocus: c
            },
            fieldProps: m
          }
        ) : /* @__PURE__ */ n("div", { children: `Currently the field ${b.dataType} is not supported` });
      }
    }
  );
}
function Td({
  Component: e,
  componentProps: {
    propertyKey: t,
    property: r,
    includeDescription: o,
    underlyingValueHasChanged: i,
    tableMode: a,
    partOfArray: s,
    autoFocus: l,
    context: c,
    disabled: d
  },
  fieldProps: A
}) {
  const { plugins: u } = ie(), h = r.customProps, g = A.field.value, f = A.meta.initialValue, p = wr(A.form.errors, t), m = wr(A.form.touched, t), w = p && (A.form.submitCount > 0 || r.validation?.unique) && (!Array.isArray(p) || !!p.filter((F) => !!F).length), E = Qd(c.path, c.collection, t, r, e, u) ?? e, v = A.form.isSubmitting, x = y((F, S) => {
    A.form.setFieldTouched(t, !0, !1), A.form.setFieldValue(t, F, S);
  }, []), I = y((F, S, D) => {
    A.form.setFieldTouched(t, !0, !1), A.form.setFieldValue(F, S, D);
  }, []);
  return /* @__PURE__ */ C(he, { children: [
    /* @__PURE__ */ n(E, { ...{
      propertyKey: t,
      value: g,
      initialValue: f,
      setValue: x,
      setFieldValue: I,
      error: p,
      touched: m,
      showError: w,
      isSubmitting: v,
      includeDescription: o ?? !0,
      property: r,
      disabled: d ?? !1,
      underlyingValueHasChanged: i ?? !1,
      tableMode: a ?? !1,
      partOfArray: s ?? !1,
      autoFocus: l ?? !1,
      customProps: h,
      context: c
    } }),
    i && !v && /* @__PURE__ */ n(Se, { children: "This value has been updated elsewhere" })
  ] });
}
const Qn = (e, t) => {
  if (t?.some((i) => i.form?.fieldBuilder) || je(e))
    return !0;
  const r = e, o = !!r.Field || "fromBuilder" in r && r.fromBuilder;
  return r.dataType === "map" && r.properties ? o || Object.values(r.properties).some((i) => Qn(i, t)) : r.dataType === "array" && "resolvedProperties" in r ? o || r.resolvedProperties?.some((i) => i && Qn(i, t)) : o;
};
function Qd(e, t, r, o, i, a) {
  return ce((() => {
    let l = null;
    return a && a.forEach((c) => {
      const d = Oa(o);
      if (d && c.form?.fieldBuilder) {
        const A = {
          fieldConfigId: d,
          propertyKey: r,
          property: o,
          Field: i,
          plugin: c,
          path: e,
          collection: t
        }, u = c.form?.fieldBuilderEnabled?.(A);
        (u === void 0 || u) && (l = c.form.fieldBuilder(A) || l);
      }
      d || console.warn("INTERNAL: Field id not found for property", o);
    }), l;
  })()).current;
}
function Md({
  propertyKey: e,
  value: t,
  error: r,
  showError: o,
  isSubmitting: i,
  setValue: a,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: u
}) {
  if (!Array.isArray(l.resolvedProperties))
    throw Error("ArrayCustomShapedFieldBinding misconfiguration. Property `of` not set");
  const h = l.expanded === void 0 ? !0 : l.expanded;
  Ge({
    property: l,
    value: t,
    setValue: a
  });
  const g = /* @__PURE__ */ n(
    Oe,
    {
      icon: Re(l),
      required: l.validation?.required,
      title: l.name
    }
  ), f = l.resolvedProperties.map((p, m) => {
    const w = {
      propertyKey: `${e}[${m}]`,
      disabled: u,
      property: p,
      includeDescription: c,
      underlyingValueHasChanged: d,
      context: A,
      tableMode: !1,
      partOfArray: !0,
      autoFocus: !1
    };
    return /* @__PURE__ */ n(B, { pb: 1, children: /* @__PURE__ */ n(Ut, { ...w }) }, `custom_shaped_array_${m}`);
  });
  return /* @__PURE__ */ C(we, { fullWidth: !0, error: o, children: [
    !s && /* @__PURE__ */ n(Bt, { initiallyExpanded: h, title: g, children: f }),
    s && f,
    c && /* @__PURE__ */ n(Me, { property: l }),
    o && typeof r == "string" && /* @__PURE__ */ n(Se, { error: !0, children: r })
  ] });
}
function ei({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  disabled: a,
  autoFocus: s,
  touched: l,
  property: c,
  includeDescription: d
}) {
  const A = c.enumValues;
  Ge({
    property: c,
    value: t,
    setValue: r
  });
  const u = y(() => {
    r(null);
  }, [r]);
  return /* @__PURE__ */ C(
    we,
    {
      fullWidth: !0,
      error: i,
      disabled: a,
      sx: {
        "& .MuiInputLabel-root": {
          mt: 1 / 2,
          ml: 1 / 2
        },
        "& .MuiInputLabel-shrink": {
          mt: 2
        }
      },
      children: [
        /* @__PURE__ */ n(wt, { id: `${e}-select-label`, children: /* @__PURE__ */ n(
          Oe,
          {
            icon: Re(c),
            required: c.validation?.required,
            title: c.name
          }
        ) }),
        /* @__PURE__ */ n(
          Ke,
          {
            sx: (h) => ({
              minHeight: "64px",
              borderRadius: `${h.shape.borderRadius}px`
            }),
            variant: "filled",
            labelId: `${e}-select-label`,
            autoFocus: s,
            value: t ?? "",
            disabled: a,
            disableUnderline: !0,
            endAdornment: c.clearable && /* @__PURE__ */ n(
              oe,
              {
                sx: {
                  position: "absolute",
                  top: "12px",
                  right: "32px"
                },
                onClick: u,
                children: /* @__PURE__ */ n(et, {})
              }
            ),
            onChange: (h) => {
              const g = h.target.value, f = g ? c.dataType === "number" ? parseFloat(g) : g : null;
              return r(f);
            },
            renderValue: (h) => /* @__PURE__ */ n(
              Ve,
              {
                enumKey: h,
                enumValues: A,
                small: !1
              }
            ),
            children: A && A.map((h) => /* @__PURE__ */ n(
              Te,
              {
                value: h.id,
                disabled: Rn(h),
                children: /* @__PURE__ */ n(
                  Ve,
                  {
                    enumKey: h.id,
                    enumValues: A,
                    small: !0
                  }
                )
              },
              `select_${e}_${h.id}`
            ))
          }
        ),
        d && /* @__PURE__ */ n(Me, { property: c }),
        i && /* @__PURE__ */ n(Se, { error: !0, children: o })
      ]
    }
  );
}
function ti({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  disabled: a,
  property: s,
  includeDescription: l,
  autoFocus: c
}) {
  const d = s.of;
  if (!d)
    throw Error("Using wrong component ArrayEnumSelect");
  if (Array.isArray(d))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (d.dataType !== "string" && d.dataType !== "number")
    throw Error("Field misconfiguration: array field of type string or number");
  const A = d.enumValues;
  if (!A)
    throw console.error(s), Error("Field misconfiguration: array field of type string or number needs to have enumValues");
  Ge({
    property: s,
    value: t,
    setValue: r
  });
  const u = y(() => {
    r(null);
  }, [r]);
  if (A instanceof Error)
    return /* @__PURE__ */ n(Ee, { error: A.message });
  const h = !!t && Array.isArray(t);
  return /* @__PURE__ */ C(
    we,
    {
      fullWidth: !0,
      required: s.validation?.required,
      error: i,
      sx: {
        "& .MuiInputLabel-root": {
          mt: 1 / 2,
          ml: 1 / 2
        },
        "& .MuiInputLabel-shrink": {
          mt: 2
        }
      },
      children: [
        /* @__PURE__ */ n(wt, { id: `${e}-multiselect-label`, children: /* @__PURE__ */ n(
          Oe,
          {
            icon: Re(s),
            required: s.validation?.required,
            title: s.name
          }
        ) }),
        /* @__PURE__ */ n(
          Ke,
          {
            multiple: !0,
            sx: (g) => ({
              minHeight: "64px",
              borderRadius: `${g.shape.borderRadius}px`
            }),
            variant: "filled",
            labelId: `${e}-multiselect-label`,
            value: h ? t.map((g) => g.toString()) : [],
            autoFocus: c,
            disabled: a,
            disableUnderline: !0,
            endAdornment: d.clearable && /* @__PURE__ */ n(
              oe,
              {
                sx: {
                  position: "absolute",
                  top: "12px",
                  right: "32px"
                },
                onClick: u,
                children: /* @__PURE__ */ n(et, {})
              }
            ),
            onChange: (g) => {
              let f;
              return d?.dataType === "number" ? f = g.target.value ? g.target.value.map((p) => parseFloat(p)) : [] : f = g.target.value, r(
                f
              );
            },
            renderValue: (g) => /* @__PURE__ */ n(
              so,
              {
                value: g,
                name: e,
                enumValues: A,
                size: "regular"
              }
            ),
            children: jn(A).map((g) => {
              const f = g.id, p = h && t.map((m) => m.toString()).includes(f.toString());
              return /* @__PURE__ */ C(
                Te,
                {
                  value: f,
                  disabled: Rn(g),
                  dense: !0,
                  children: [
                    /* @__PURE__ */ n(Ln, { checked: p }),
                    /* @__PURE__ */ n(Qt, { primary: /* @__PURE__ */ n(
                      Ve,
                      {
                        enumKey: f,
                        enumValues: A,
                        small: !0
                      }
                    ) })
                  ]
                },
                `form-select-${e}-${f}`
              );
            })
          }
        ),
        l && /* @__PURE__ */ n(Me, { property: s }),
        i && /* @__PURE__ */ n(Se, { error: !0, children: o })
      ]
    }
  );
}
function Od({
  propertyKey: e,
  value: t,
  error: r,
  showError: o,
  isSubmitting: i,
  tableMode: a,
  property: s,
  includeDescription: l,
  setValue: c,
  setFieldValue: d
}) {
  const A = s.of;
  if (A.dataType !== "reference")
    throw Error("ArrayOfReferencesField expected a property containing references");
  const u = s.expanded === void 0 ? !0 : s.expanded, [h, g] = R.useState(!1), f = t && Array.isArray(t) ? t.map((k) => k.id) : [];
  Ge({
    property: s,
    value: t,
    setValue: c
  });
  const p = ke(), m = le(() => A.path ? p.getCollection(A.path) : void 0, [A.path]);
  if (!m)
    throw Error(`Couldn't find the corresponding collection for the path: ${A.path}`);
  const w = y((k) => {
    c(k.map((F) => $t(F)));
  }, [c]), b = Un(
    {
      multiselect: !0,
      path: A.path,
      collection: m,
      onMultipleEntitiesSelected: w,
      selectedEntityIds: f,
      forceFilter: A.forceFilter
    }
  ), E = y(() => {
    b.open();
  }, [b]), v = y((k, F) => {
    const S = t && t.length > k ? t[k] : void 0;
    return S ? /* @__PURE__ */ n(
      "div",
      {
        onMouseEnter: () => g(!0),
        onMouseMove: () => g(!0),
        onMouseLeave: () => g(!1),
        children: /* @__PURE__ */ n(
          xt,
          {
            disabled: !A.path,
            previewProperties: A.previewProperties,
            size: "regular",
            onClick: E,
            reference: S,
            onHover: h
          }
        )
      }
    ) : /* @__PURE__ */ n("div", { children: "Internal ERROR" });
  }, [A.path, A.previewProperties, h, t]), x = /* @__PURE__ */ n(
    Oe,
    {
      icon: Re(s),
      required: s.validation?.required,
      title: s.name
    }
  ), I = /* @__PURE__ */ C(q, { children: [
    !m && /* @__PURE__ */ n(
      Ee,
      {
        error: "The specified collection does not exist. Check console"
      }
    ),
    m && /* @__PURE__ */ C(q, { children: [
      /* @__PURE__ */ n(
        Ao,
        {
          value: t,
          addLabel: s.name ? "Add reference to " + s.name : "Add reference",
          name: e,
          buildEntry: v,
          disabled: i,
          setFieldValue: d,
          newDefaultEntry: s.of.defaultValue
        }
      ),
      /* @__PURE__ */ n(
        B,
        {
          p: 1,
          justifyContent: "center",
          textAlign: "left",
          children: /* @__PURE__ */ C(
            de,
            {
              variant: "outlined",
              color: "primary",
              disabled: i,
              onClick: E,
              children: [
                "Edit ",
                s.name
              ]
            }
          )
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ n(q, { children: /* @__PURE__ */ C(we, { fullWidth: !0, error: o, children: [
    !a && /* @__PURE__ */ n(Bt, { initiallyExpanded: u, title: x, children: I }),
    a && I,
    l && /* @__PURE__ */ n(Me, { property: s }),
    o && typeof r == "string" && /* @__PURE__ */ n(Se, { error: !0, children: r })
  ] }) });
}
async function $d(e, t, r, o, i, a, s, l) {
  let c;
  return typeof e == "function" ? (c = await e({
    path: i,
    entityId: o,
    values: r,
    property: a,
    file: s,
    storage: t,
    propertyKey: l
  }), c || console.warn("Storage callback returned empty result. Using default name value")) : c = Ia(s, e, o, l, i), c || (c = ln() + "_" + s.name), c;
}
function Gd(e, t, r, o, i, a, s, l) {
  let c;
  return typeof e == "function" ? (c = e({
    path: i,
    entityId: o,
    values: r,
    property: a,
    file: s,
    storage: t,
    propertyKey: l
  }), c || console.warn("Storage callback returned empty result. Using default name value")) : c = Ia(s, e, o, l, i), c || (c = ln() + "_" + s.name), c;
}
function Ia(e, t, r, o, i) {
  const a = e.name.split(".").pop();
  let s = t.replace("{entityId}", r).replace("{propertyKey}", o).replace("{rand}", ln()).replace("{file}", e.name).replace("{file.type}", e.type).replace("{path}", i);
  if (a) {
    s = s.replace("{file.ext}", a);
    const l = e.name.replace(`.${a}`, "");
    s = s.replace("{file.name}", l);
  }
  return s || (s = ln() + "_" + e.name), s;
}
function Sa({
  entityId: e,
  entityValues: t,
  path: r,
  value: o,
  property: i,
  propertyKey: a,
  storageSource: s,
  disabled: l,
  onChange: c
}) {
  const d = i.dataType === "string" ? i.storage : i.dataType === "array" && i.of.dataType === "string" ? i.of.storage : void 0, A = i.dataType === "array";
  if (!d)
    throw Error("Storage meta must be specified");
  const u = d?.metadata, h = A ? "small" : "regular", g = d?.imageCompression, f = (A ? o ?? [] : o ? [o] : []).map((k) => ({
    id: dr(),
    storagePathOrDownloadUrl: k,
    metadata: u,
    size: h
  })), [p, m] = Q(o), [w, b] = Q(f);
  Y(() => {
    xe(p, o) || (m(o), b(f));
  }, [f, o, p]);
  const E = y(async (k) => {
    if (d.fileName) {
      const F = await $d(d.fileName, d, t, e, r, i, k, a);
      if (!F || F.length === 0)
        throw Error("You need to return a valid filename");
      return F;
    }
    return ln() + "_" + k.name;
  }, [e, t, r, i, a, d]), v = y((k) => Gd(d.storagePath, d, t, e, r, i, k, a) ?? "/", [e, t, r, i, a, d]), x = y(async (k, F, S) => {
    console.debug("onFileUploadComplete", k, F);
    let D = k;
    d.storeUrl && (D = (await s.getDownloadURL(k)).url), d.postProcess && (D = await d.postProcess(D));
    let P;
    F.storagePathOrDownloadUrl = D, F.metadata = S, P = [...w], P = ni(P), b(P);
    const T = P.filter((O) => !!O.storagePathOrDownloadUrl).map((O) => O.storagePathOrDownloadUrl);
    c(A ? T : T ? T[0] : null);
  }, [w, A, c, d, s]), I = y(async (k) => {
    if (!k.length || l)
      return;
    let F;
    if (A)
      F = [
        ...w,
        ...await Promise.all(k.map(async (S) => (g && kr(S) && (S = await oi(S, g)), {
          id: dr(),
          file: S,
          fileName: await E(S),
          metadata: u,
          size: h
        })))
      ];
    else {
      let S = k[0];
      g && kr(S) && (S = await oi(S, g)), F = [{
        id: dr(),
        file: S,
        fileName: await E(S),
        metadata: u,
        size: h
      }];
    }
    F = ni(F), b(F);
  }, [l, E, w, u, A, h]);
  return {
    internalValue: w,
    setInternalValue: b,
    storage: d,
    fileNameBuilder: E,
    storagePathBuilder: v,
    onFileUploadComplete: x,
    onFilesAdded: I,
    multipleFilesSupported: A
  };
}
function ni(e) {
  return e.filter(
    (t, r) => (e.map((o) => o.storagePathOrDownloadUrl).indexOf(t.storagePathOrDownloadUrl) === r || !t.storagePathOrDownloadUrl) && (e.map((o) => o.file).indexOf(t.file) === r || !t.file)
  );
}
function dr() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
const ri = {
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/webp": "WEBP"
}, kr = (e) => ri[e.type] ? ri[e.type] : null, Ld = 100, oi = (e, t) => new Promise((r) => {
  const o = t.quality === void 0 ? Ld : t.quality, i = o >= 0 && o <= 100 ? o : 100, a = kr(e);
  if (!a)
    throw Error("resizeAndCompressImage: Unsupported image format");
  Hl.imageFileResizer(
    e,
    t.maxWidth || Number.MAX_VALUE,
    t.maxHeight || Number.MAX_VALUE,
    a,
    i,
    0,
    (s) => r(s),
    "file"
  );
});
function Fa({
  storagePath: e,
  entry: t,
  metadata: r,
  onFileUploadComplete: o,
  imageSize: i,
  simple: a
}) {
  const s = fn(), l = Ct(), [c, d] = R.useState(), [A, u] = R.useState(!1), h = R.useRef(!1), g = R.useRef(!1), f = y((p, m) => {
    g.current || (g.current = !0, d(void 0), u(!0), s.uploadFile({
      file: p,
      fileName: m,
      path: e,
      metadata: r
    }).then(async ({ path: w }) => {
      console.debug("Upload successful"), await o(w, t, r), h.current && u(!1);
    }).catch((w) => {
      console.error("Upload error", w), h.current && (d(w), u(!1), l.open({
        type: "error",
        message: "Error uploading file: " + w.message
      }));
    }).finally(() => {
      g.current = !1;
    }));
  }, [t, r, o, s, e]);
  return R.useEffect(() => (h.current = !0, t.file && f(t.file, t.fileName), () => {
    h.current = !1;
  }), [t.file, t.fileName, f]), a ? /* @__PURE__ */ n(B, { m: 1, sx: {
    width: i,
    height: i
  }, children: A && /* @__PURE__ */ n(Xe, { variant: "rectangular", sx: {
    width: i,
    height: i
  } }) }) : /* @__PURE__ */ n(B, { m: 1, children: /* @__PURE__ */ C(
    Wt,
    {
      elevation: 0,
      sx: {
        padding: 1,
        boxSizing: "border-box",
        minWidth: i,
        minHeight: i
      },
      variant: "outlined",
      children: [
        A && /* @__PURE__ */ n(Xe, { variant: "rectangular", sx: {
          width: "100%",
          height: "100%"
        } }),
        c && /* @__PURE__ */ n(
          Ee,
          {
            title: "Error uploading file",
            error: c
          }
        )
      ]
    }
  ) });
}
function Ra({
  name: e,
  property: t,
  value: r,
  entity: o,
  onRemove: i,
  disabled: a,
  size: s
}) {
  return /* @__PURE__ */ n(B, { m: 1, position: "relative", children: /* @__PURE__ */ C(
    Wt,
    {
      elevation: 0,
      sx: {
        padding: 1,
        boxSizing: "border-box",
        minWidth: s === "regular" ? 220 : 118,
        minHeight: s === "regular" ? 220 : 118
      },
      variant: "outlined",
      children: [
        !a && /* @__PURE__ */ n(
          B,
          {
            sx: (l) => ({
              position: "absolute",
              borderRadius: "9999px",
              top: -8,
              right: -8,
              zIndex: 1,
              backgroundColor: l.palette.background.paper
            }),
            children: /* @__PURE__ */ n(
              me,
              {
                title: "Remove",
                children: /* @__PURE__ */ n(
                  oe,
                  {
                    size: "small",
                    onClick: (l) => {
                      l.stopPropagation(), i(r);
                    },
                    children: /* @__PURE__ */ n(In, { fontSize: "small" })
                  }
                )
              }
            )
          }
        ),
        r && /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
          Qe,
          {
            propertyKey: e,
            value: r,
            property: t,
            entity: o,
            size: s
          }
        ) })
      ]
    }
  ) });
}
const Dt = "StorageUploadField", Ye = {
  dropZone: `${Dt}-dropZone`,
  disabled: `${Dt}-disabled`,
  nonActiveDrop: `${Dt}-nonActiveDrop`,
  activeDrop: `${Dt}-activeDrop`,
  acceptDrop: `${Dt}-acceptDrop`,
  rejectDrop: `${Dt}-rejectDrop`
}, Yd = tt(B)(({ theme: e }) => ({
  [`&.${Ye.dropZone}`]: {
    position: "relative",
    paddingTop: "2px",
    border: "2px solid transparent",
    minHeight: "254px",
    outline: 0,
    borderRadius: `${e.shape.borderRadius}px`,
    backgroundColor: Ne(e),
    boxSizing: "border-box",
    transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:focus": {
      border: `2px solid ${e.palette.primary.main}`
    }
  },
  [`&.${Ye.disabled}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: e.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)",
    border: `1px dotted ${e.palette.grey[400]}`
  },
  [`&.${Ye.nonActiveDrop}`]: {
    "&:hover": {
      backgroundColor: vt(e)
    }
  },
  [`&.${Ye.activeDrop}`]: {
    paddingTop: "0px",
    boxSizing: "border-box",
    border: "2px solid"
  },
  [`&.${Ye.acceptDrop}`]: {
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09) 10px, rgba(0, 0, 0, 0.12) 10px, rgba(0, 0, 0, 0.12) 20px) !important",
    border: "2px solid",
    borderColor: e.palette.success.light
  },
  [`&.${Ye.rejectDrop}`]: {
    border: "2px solid",
    borderColor: e.palette.error.light
  }
}));
function ii({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  autoFocus: a,
  tableMode: s,
  property: l,
  includeDescription: c,
  context: d,
  isSubmitting: A
}) {
  if (!d.entityId)
    throw new Error("StorageUploadFieldBinding: Entity id is null");
  const u = fn(), h = hn(l) || !!l.disabled || A, {
    internalValue: g,
    setInternalValue: f,
    onFilesAdded: p,
    storage: m,
    onFileUploadComplete: w,
    storagePathBuilder: b,
    multipleFilesSupported: E
  } = Sa({
    entityValues: d.values,
    entityId: d.entityId,
    path: d.path,
    property: l,
    propertyKey: e,
    value: t,
    storageSource: u,
    disabled: h,
    onChange: r
  });
  Ge({
    property: l,
    value: t,
    setValue: r
  });
  const v = {
    id: d.entityId,
    values: d.values,
    path: d.path
  };
  return /* @__PURE__ */ C(
    we,
    {
      fullWidth: !0,
      required: l.validation?.required,
      error: i,
      children: [
        !s && /* @__PURE__ */ n(Se, { filled: !0, children: /* @__PURE__ */ n(
          Oe,
          {
            icon: Re(l),
            required: l.validation?.required,
            title: l.name
          }
        ) }),
        /* @__PURE__ */ n(
          Vd,
          {
            value: g,
            name: e,
            disabled: h,
            autoFocus: a,
            property: l,
            onChange: r,
            setInternalValue: f,
            onFilesAdded: p,
            entity: v,
            onFileUploadComplete: w,
            storagePathBuilder: b,
            storage: m,
            multipleFilesSupported: E
          }
        ),
        c && /* @__PURE__ */ n(Me, { property: l }),
        i && /* @__PURE__ */ n(Se, { error: !0, children: o })
      ]
    }
  );
}
function Wd({
  storage: e,
  disabled: t,
  isDraggingOver: r,
  onFilesAdded: o,
  multipleFilesSupported: i,
  droppableProvided: a,
  autoFocus: s,
  internalValue: l,
  property: c,
  entity: d,
  onClear: A,
  metadata: u,
  storagePathBuilder: h,
  onFileUploadComplete: g,
  size: f,
  name: p,
  helpText: m
}) {
  const w = Ct(), {
    getRootProps: b,
    getInputProps: E,
    isDragActive: v,
    isDragAccept: x,
    isDragReject: I
  } = Yi(
    {
      accept: e.acceptedFiles ? e.acceptedFiles.map((k) => ({ [k]: [] })).reduce((k, F) => ({ ...k, ...F }), {}) : void 0,
      disabled: t || r,
      noDragEventsBubbling: !0,
      maxSize: e.maxSize,
      onDrop: o,
      onDropRejected: (k, F) => {
        for (const S of k)
          for (const D of S.errors)
            w.open({
              type: "error",
              message: `Error uploading file: File is larger than ${e.maxSize} bytes`
            });
      }
    }
  );
  return /* @__PURE__ */ C(
    Yd,
    {
      ...b(),
      className: jl(Ye.dropZone, {
        [Ye.nonActiveDrop]: !v,
        [Ye.activeDrop]: v,
        [Ye.rejectDrop]: I,
        [Ye.acceptDrop]: x,
        [Ye.disabled]: t
      }),
      sx: {
        display: i && l.length ? void 0 : "flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ C(
          B,
          {
            ...a.droppableProps,
            ref: a.innerRef,
            sx: {
              display: "flex",
              alignItems: "center",
              overflow: i && l.length ? "auto" : void 0,
              minHeight: i && l.length ? 180 : 250,
              p: 1,
              "&::-webkit-scrollbar": {
                display: "none"
              }
            },
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  autoFocus: s,
                  ...E()
                }
              ),
              l.map((k, F) => {
                let S;
                return k.storagePathOrDownloadUrl ? S = /* @__PURE__ */ n(
                  Ra,
                  {
                    name: `storage_preview_${k.storagePathOrDownloadUrl}`,
                    property: c,
                    disabled: t,
                    entity: d,
                    value: k.storagePathOrDownloadUrl,
                    onRemove: A,
                    size: k.size
                  }
                ) : k.file && (S = /* @__PURE__ */ n(
                  Fa,
                  {
                    entry: k,
                    metadata: u,
                    storagePath: h(k.file),
                    onFileUploadComplete: g,
                    imageSize: f === "regular" ? 220 : 118,
                    simple: !1
                  }
                )), /* @__PURE__ */ n(
                  _i,
                  {
                    draggableId: `array_field_${p}_${k.id}`,
                    index: F,
                    children: (D, P) => /* @__PURE__ */ n(
                      B,
                      {
                        ref: D.innerRef,
                        ...D.draggableProps,
                        ...D.dragHandleProps,
                        style: D.draggableProps.style,
                        sx: (T) => ({
                          borderRadius: `${T.shape.borderRadius}px`
                        }),
                        children: S
                      }
                    )
                  },
                  `array_field_${p}_${k.id}`
                );
              }),
              a.placeholder
            ]
          }
        ),
        /* @__PURE__ */ n(
          B,
          {
            sx: {
              flexGrow: 1,
              minHeight: 38,
              boxSizing: "border-box",
              m: 2
            },
            children: /* @__PURE__ */ n(
              X,
              {
                align: "center",
                variant: "label",
                children: m
              }
            )
          }
        )
      ]
    }
  );
}
function Vd({
  property: e,
  name: t,
  value: r,
  setInternalValue: o,
  onChange: i,
  multipleFilesSupported: a,
  onFileUploadComplete: s,
  disabled: l,
  onFilesAdded: c,
  autoFocus: d,
  storage: A,
  entity: u,
  storagePathBuilder: h
}) {
  if (a) {
    const v = e;
    if (v.of) {
      if (Array.isArray(v.of) || v.of.dataType !== "string")
        throw Error("Storage field using array must be of data type string");
    } else
      throw Error("Storage field using array must be of data type string");
  }
  const g = A?.metadata, f = a ? "small" : "regular", p = y((v, x) => {
    if (!a)
      return;
    const I = [...r], k = I[v];
    I.splice(v, 1), I.splice(x, 0, k), o(I);
    const F = I.filter((S) => !!S.storagePathOrDownloadUrl).map((S) => S.storagePathOrDownloadUrl);
    i(F);
  }, [a, i, o, r]), m = y((v) => {
    v.destination && p(v.source.index, v.destination.index);
  }, [p]), w = y((v) => {
    if (a) {
      const x = r.filter((I) => I.storagePathOrDownloadUrl !== v);
      i(x.filter((I) => !!I.storagePathOrDownloadUrl).map((I) => I.storagePathOrDownloadUrl)), o(x);
    } else
      i(null), o([]);
  }, [r, a, i]), b = a ? "Drag 'n' drop some files here, or click to select files" : "Drag 'n' drop a file here, or click to select one", E = a ? e.of : e;
  return /* @__PURE__ */ n(ji, { onDragEnd: m, children: /* @__PURE__ */ n(
    Hi,
    {
      droppableId: `droppable_${t}`,
      direction: "horizontal",
      renderClone: (v, x, I) => {
        const k = r[I.source.index];
        return /* @__PURE__ */ n(
          B,
          {
            ref: v.innerRef,
            ...v.draggableProps,
            ...v.dragHandleProps,
            style: v.draggableProps.style,
            sx: (F) => ({
              borderRadius: F.shape.borderRadius
            }),
            children: /* @__PURE__ */ n(
              Ra,
              {
                name: `storage_preview_${k.storagePathOrDownloadUrl}`,
                property: E,
                disabled: !0,
                entity: u,
                value: k.storagePathOrDownloadUrl,
                onRemove: w,
                size: k.size
              }
            )
          }
        );
      },
      children: (v, x) => /* @__PURE__ */ n(
        Wd,
        {
          storage: A,
          disabled: l,
          isDraggingOver: x.isDraggingOver,
          droppableProvided: v,
          onFilesAdded: c,
          multipleFilesSupported: a,
          autoFocus: d,
          internalValue: r,
          property: E,
          entity: u,
          onClear: w,
          metadata: g,
          storagePathBuilder: h,
          onFileUploadComplete: s,
          size: f,
          name: t,
          helpText: b
        }
      )
    }
  ) });
}
function vn(e) {
  return parseInt(e, 10) || 0;
}
const zd = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function ai(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const Da = Pe.forwardRef(function(t, r) {
  const {
    onChange: o,
    onScroll: i,
    onResize: a,
    maxRows: s,
    minRows: l = 1,
    style: c,
    value: d,
    onFocus: A,
    onBlur: u,
    sizeRef: h,
    ...g
  } = t, { current: f } = Pe.useRef(d != null), p = Pe.useRef(null), m = El(r, p), w = Pe.useRef(null), b = Pe.useRef(0), [E, v] = Pe.useState({
    outerHeightStyle: 0
  }), x = Pe.useCallback(() => {
    const D = p.current, T = Ro(D).getComputedStyle(D);
    if (T.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const O = h?.current ?? w.current, ne = w.current;
    O.style.width = T.width, ne.value = D.value || t.placeholder || "x", ne.value.slice(-1) === `
` && (ne.value += " ");
    const L = T.boxSizing, U = vn(T.paddingBottom) + vn(T.paddingTop), _ = vn(T.borderBottomWidth) + vn(T.borderTopWidth), ee = O.scrollHeight;
    ne.value = "x";
    const $ = O.scrollHeight;
    let G = ee;
    l && (G = Math.max(Number(l) * $, G)), s && (G = Math.min(Number(s) * $, G)), G = Math.max(G, $);
    const H = G + (L === "border-box" ? U + _ : 0), V = Math.abs(G - ee) <= 1;
    return { outerHeightStyle: H, overflow: V };
  }, [s, l, t.placeholder]), I = (D, P) => {
    const { outerHeightStyle: T, overflow: O } = P;
    return b.current < 20 && (T > 0 && Math.abs((D.outerHeightStyle || 0) - T) > 1 || D.overflow !== O) ? (b.current += 1, {
      overflow: O,
      outerHeightStyle: T
    }) : (process.env.NODE_ENV !== "production" && b.current === 20 && console.error(
      [
        "MUI: Too many re-renders. The layout is unstable.",
        "TextareaAutosize limits the number of renders to prevent an infinite loop."
      ].join(`
`)
    ), D);
  }, k = Pe.useCallback(() => {
    const D = x();
    ai(D) || (a && a(D), v((P) => I(P, D)));
  }, [x, a]), F = () => {
    const D = x();
    ai(D) || yl.flushSync(() => {
      v((P) => I(P, D));
    });
  };
  Pe.useEffect(() => {
    const D = Cl(() => {
      b.current = 0, p.current && F();
    });
    let P;
    const T = p.current, O = Ro(T);
    return O.addEventListener("resize", D), typeof ResizeObserver < "u" && (P = new ResizeObserver(D), P.observe(T)), () => {
      D.clear(), O.removeEventListener("resize", D), P && P.disconnect();
    };
  }), Bl(() => {
    k();
  }), Pe.useEffect(() => {
    b.current = 0;
  }, [d]);
  const S = (D) => {
    b.current = 0, f || k(), o && o(D);
  };
  return /* @__PURE__ */ C(Pe.Fragment, { children: [
    /* @__PURE__ */ n(
      "textarea",
      {
        value: d,
        onChange: S,
        ref: m,
        onFocus: A,
        onBlur: u,
        rows: l,
        style: {
          height: E.outerHeightStyle,
          // Need a large enough difference to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: E.overflow ? "hidden" : void 0,
          ...c
        },
        onScroll: i,
        ...g
      }
    ),
    /* @__PURE__ */ n(
      "textarea",
      {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: w,
        tabIndex: -1,
        style: {
          ...zd.shadow,
          ...c,
          padding: 0
        }
      }
    )
  ] });
});
function Ud({
  label: e,
  small: t,
  value: r
}) {
  return /* @__PURE__ */ C(B, { sx: (o) => ({
    position: "relative",
    background: ld,
    borderRadius: `${o.shape.borderRadius}px`,
    maxWidth: "100%",
    minHeight: t ? "48px" : "64px",
    color: o.palette.text.disabled
  }), children: [
    /* @__PURE__ */ n(
      wt,
      {
        shrink: !!r,
        sx: {
          position: "absolute",
          color: (o) => o.palette.text.disabled,
          left: 0,
          top: "4px",
          pointerEvents: "none"
        },
        variant: "filled",
        children: e
      }
    ),
    /* @__PURE__ */ n(B, { sx: {
      padding: e ? "32px 12px 8px 12px" : t ? "12px" : "8px 12px 8px 12px",
      overflow: "auto"
    }, children: /* @__PURE__ */ n(
      X,
      {
        variant: "body1",
        sx: {
          fontFamily: "inherit"
        },
        children: r
      }
    ) })
  ] });
}
function Mn({
  value: e,
  onChange: t,
  label: r,
  inputType: o = "text",
  multiline: i = !1,
  disabled: a,
  error: s,
  endAdornment: l,
  autoFocus: c,
  placeholder: d,
  small: A
}) {
  const u = ce(null), [h, g] = R.useState(document.activeElement === u.current), f = e != null && e !== "", p = y((b) => {
    b.target.blur(), b.stopPropagation(), setTimeout(() => {
      b.target.focus();
    }, 0);
  }, []);
  if (a)
    return /* @__PURE__ */ n(
      Ud,
      {
        label: r,
        small: A,
        value: e
      }
    );
  const m = i ? /* @__PURE__ */ n(
    jd,
    {
      ref: u,
      placeholder: d,
      autoFocus: c,
      onFocus: () => g(!0),
      onBlur: () => g(!1),
      value: e ?? "",
      onChange: t
    }
  ) : /* @__PURE__ */ n(
    Nd,
    {
      ref: u,
      onWheel: o === "number" ? p : void 0,
      sx: {
        padding: r ? "32px 12px 8px 12px" : "8px 12px 8px 12px"
      },
      small: A ?? !1,
      placeholder: d,
      autoFocus: c,
      onFocus: () => g(!0),
      onBlur: () => g(!1),
      type: o,
      value: Number.isNaN(e) ? "" : e ?? "",
      onChange: t
    }
  );
  return /* @__PURE__ */ C(
    B,
    {
      sx: (b) => ({
        position: "relative",
        background: Ne(b),
        borderRadius: `${b.shape.borderRadius}px`,
        maxWidth: "100%",
        minHeight: A ? "48px" : "64px",
        "&:hover": {
          backgroundColor: vt(b)
        }
      }),
      children: [
        /* @__PURE__ */ n(
          wt,
          {
            shrink: f || h,
            sx: {
              position: "absolute",
              left: 0,
              top: "4px",
              pointerEvents: "none",
              color: (b) => s ? b.palette.error.main : h ? b.palette.primary.main : void 0
            },
            variant: "filled",
            children: r
          }
        ),
        l ? /* @__PURE__ */ C(B, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          m,
          /* @__PURE__ */ n(B, { sx: {
            mr: 2,
            my: 1
          }, children: l })
        ] }) : m
      ]
    }
  );
}
const Nd = Wn("input")(({ small: e }) => ({
  width: "100%",
  outlineWidth: 0,
  minHeight: e ? "48px" : "64px",
  fontSize: "16px",
  padding: "32px 12px 8px 12px",
  font: "inherit",
  letterSpacing: "inherit",
  color: "currentcolor",
  border: "0px",
  background: "none",
  height: "1.4375em",
  margin: "0px",
  WebkitTapHighlightColor: "transparent",
  display: "block",
  minWidth: "0px",
  animationName: "mui-auto-fill-cancel",
  animationDuration: "10ms",
  "&::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0
  }
})), jd = Wn(Da)({
  width: "100%",
  outlineWidth: 0,
  resize: "none",
  minHeight: "64px",
  fontSize: "16px",
  padding: "32px 12px 8px 12px",
  font: "inherit",
  letterSpacing: "inherit",
  color: "currentcolor",
  border: "0px",
  background: "none",
  height: "1.4375em",
  margin: "0px",
  WebkitTapHighlightColor: "transparent",
  display: "block",
  minWidth: "0px",
  animationName: "mui-auto-fill-cancel",
  animationDuration: "10ms"
});
function Kt({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  disabled: a,
  autoFocus: s,
  property: l,
  includeDescription: c,
  allowInfinity: d
}) {
  let A, u;
  l.dataType === "string" && (A = l.multiline, u = l.url), Ge({
    property: l,
    value: t,
    setValue: r
  });
  const h = y(() => {
    r(null);
  }, [r]), g = (b) => {
    if (w === "number") {
      const E = b.target.value ? parseFloat(b.target.value) : void 0;
      E && isNaN(E) ? r(null) : E != null ? r(E) : r(null);
    } else
      r(b.target.value);
  }, f = !!A, w = !((t ?? (l.dataType === "string" ? "" : t === 0 ? 0 : "")) === 1 / 0) && l.dataType === "number" ? "number" : void 0;
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(
      Mn,
      {
        value: t,
        onChange: g,
        autoFocus: s,
        label: /* @__PURE__ */ n(
          Oe,
          {
            icon: Re(l),
            required: l.validation?.required,
            title: l.name
          }
        ),
        inputType: w,
        multiline: f,
        disabled: a,
        endAdornment: l.clearable && /* @__PURE__ */ n(
          oe,
          {
            onClick: h,
            children: /* @__PURE__ */ n(et, {})
          }
        ),
        error: i ? o : void 0
      }
    ),
    (i && o || c && (l.description || l.longDescription) || d) && /* @__PURE__ */ n(
      B,
      {
        display: "flex",
        sx: { marginLeft: "14px" },
        children: /* @__PURE__ */ C(B, { flexGrow: 1, children: [
          i && /* @__PURE__ */ n(
            Se,
            {
              error: !0,
              children: o
            }
          ),
          c && /* @__PURE__ */ n(Me, { property: l })
        ] })
      }
    ),
    u && /* @__PURE__ */ n(
      Ei,
      {
        sx: {
          marginTop: 1,
          marginLeft: 1
        },
        in: !!t,
        appear: !0,
        timeout: 500,
        children: /* @__PURE__ */ n(
          Qe,
          {
            value: t,
            property: l,
            size: "regular"
          }
        )
      }
    )
  ] });
}
const uo = R.forwardRef(function({
  value: t,
  position: r = "end",
  onChange: o,
  error: i,
  label: a,
  autoFocus: s,
  disabled: l,
  small: c
}, d) {
  const [A, u] = Q(s ?? !1);
  return /* @__PURE__ */ n(q, { children: /* @__PURE__ */ n(we, { fullWidth: !0, children: /* @__PURE__ */ n(
    Lr,
    {
      sx: (h) => ({
        color: i ? h.palette.error.main : A ? h.palette.primary.main : h.palette.text.secondary,
        justifyContent: "space-between",
        margin: 0,
        width: "100%",
        minHeight: c ? "48px" : "64px",
        paddingLeft: c ? "8px" : "16px",
        paddingRight: c ? "16px" : "24px",
        boxSizing: "border-box",
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        flexDirection: r === "end" ? "row-reverse" : "row",
        backgroundColor: Ne(h),
        borderRadius: `${h.shape.borderRadius}px`,
        transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        "&:hover": {
          backgroundColor: vt(h)
        }
      }),
      onClick: (h) => u(!0),
      labelPlacement: "start",
      checked: !!t,
      inputRef: d,
      control: /* @__PURE__ */ n(
        Yr,
        {
          size: c ? "small" : "medium",
          type: "checkbox",
          color: "secondary",
          autoFocus: s,
          disabled: l,
          onFocus: (h) => u(!0),
          onBlur: (h) => u(!1),
          onChange: (h) => {
            u(!0), o?.(h);
          }
        }
      ),
      disabled: l,
      label: a
    }
  ) }) });
}), Hd = R.forwardRef(function({
  propertyKey: t,
  value: r,
  setValue: o,
  error: i,
  showError: a,
  autoFocus: s,
  disabled: l,
  touched: c,
  property: d,
  includeDescription: A
}, u) {
  return Ge({
    property: d,
    value: r,
    setValue: o
  }), /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(
      uo,
      {
        value: r,
        onChange: (h) => o(h.target.checked),
        error: a,
        label: /* @__PURE__ */ n(
          Oe,
          {
            icon: Re(d),
            required: d.validation?.required,
            title: d.name
          }
        ),
        disabled: l,
        autoFocus: s,
        small: !1
      }
    ),
    (a && i || A && (d.description || d.longDescription)) && /* @__PURE__ */ C(
      B,
      {
        display: "flex",
        sx: { marginLeft: "14px" },
        children: [
          A && /* @__PURE__ */ n(Me, { property: d }),
          a && /* @__PURE__ */ n(Se, { error: !0, children: i })
        ]
      }
    )
  ] });
});
function _d({
  propertyKey: e,
  value: t,
  setValue: r,
  autoFocus: o,
  error: i,
  showError: a,
  disabled: s,
  touched: l,
  property: c,
  includeDescription: d
}) {
  const A = t || null;
  Ge({
    property: c,
    value: t,
    setValue: r
  });
  const u = y(() => {
    r(null);
  }, [r]), h = c.mode === void 0 || c.mode === "date_time" ? Jr : _r;
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(
      h,
      {
        autoFocus: o,
        value: A,
        renderInput: (g) => /* @__PURE__ */ n(
          ot,
          {
            ...g,
            fullWidth: !0,
            sx: (f) => ({
              minHeight: "64px",
              borderRadius: `${f.shape.borderRadius}px`,
              backgroundColor: Ne(f),
              "&:hover": {
                backgroundColor: vt(f)
              }
            }),
            label: /* @__PURE__ */ n(
              Oe,
              {
                icon: Re(c),
                required: c.validation?.required,
                title: c.name
              }
            ),
            InputProps: {
              ...g.InputProps,
              sx: (f) => ({
                minHeight: "64px",
                borderRadius: `${f.shape.borderRadius}px`,
                backgroundColor: Ne(f),
                "&:hover": {
                  backgroundColor: vt(f)
                }
              }),
              disableUnderline: !0,
              endAdornment: /* @__PURE__ */ C(
                B,
                {
                  sx: {
                    pr: 2,
                    gap: 2
                  },
                  children: [
                    c.clearable && /* @__PURE__ */ n(
                      oe,
                      {
                        sx: {
                          position: "absolute",
                          right: "56px",
                          top: "12px"
                        },
                        onClick: u,
                        children: /* @__PURE__ */ n(et, {})
                      }
                    ),
                    g.InputProps?.endAdornment
                  ]
                }
              )
            },
            error: a,
            variant: "filled",
            helperText: a ? i : null
          }
        ),
        disabled: s,
        onChange: (g) => r(g)
      }
    ),
    d && /* @__PURE__ */ n(Me, { property: c })
  ] });
}
function Jd({
  name: e,
  path: t,
  disabled: r,
  value: o,
  setValue: i,
  previewProperties: a,
  forceFilter: s
}) {
  const l = ie(), c = ke(), d = Et(), A = le(() => c.getCollection(t), [t, c]);
  if (!A)
    throw Error(`Couldn't find the corresponding collection for the path: ${t}`);
  const u = o && o instanceof _e, {
    entity: h,
    dataLoading: g,
    dataLoadingError: f
  } = no({
    path: t,
    entityId: u ? o.id : void 0,
    collection: A,
    useCache: !0
  }), p = y((x) => {
    r || i(x ? $t(x) : null);
  }, [r, i]), m = Un(
    {
      multiselect: !1,
      path: t,
      collection: A,
      onSingleEntitySelected: p,
      forceFilter: s
    }
  ), w = y(() => {
    m.open();
  }, [m]), b = y((x) => {
    x.stopPropagation(), i(null);
  }, [i]), E = y((x) => {
    x.stopPropagation(), h && (l.onAnalyticsEvent?.("entity_click_from_reference", {
      path: h.path,
      entityId: h.id
    }), d.open({
      entityId: h.id,
      path: t,
      updateUrl: !0
    }));
  }, [h, t, d]);
  return /* @__PURE__ */ n(X, { variant: "label", sx: (x) => ({
    elevation: 0,
    width: "100%",
    padding: x.spacing(1),
    position: "relative",
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    borderRadius: `${x.shape.borderRadius}px`,
    backgroundColor: r ? "rgba(0, 0, 0, 0.12)" : Ne(x),
    "&:hover": {
      cursor: r ? void 0 : "pointer",
      backgroundColor: r ? "rgba(0, 0, 0, 0.12)" : vt(x)
    },
    color: r ? x.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)" : void 0,
    fontWeight: x.typography.fontWeightMedium
  }), children: A && ((x) => {
    const I = h && !h.values;
    let k;
    if (!x)
      k = /* @__PURE__ */ n(
        Ee,
        {
          error: "The specified collection does not exist. Check console"
        }
      );
    else if (I)
      k = /* @__PURE__ */ n(me, { title: o && o.path, children: /* @__PURE__ */ C(
        B,
        {
          display: "flex",
          alignItems: "center",
          p: 1,
          flexGrow: 1,
          children: [
            /* @__PURE__ */ n(Nr, { fontSize: "small", color: "error" }),
            /* @__PURE__ */ C(B, { marginLeft: 1, children: [
              "Missing reference ",
              h && h.id
            ] })
          ]
        }
      ) });
    else if (u) {
      const F = Va(x, l.fields, a, 3);
      k = /* @__PURE__ */ n(
        B,
        {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          ml: 1,
          mr: 1,
          children: F && F.map((S) => {
            const D = x.properties[S];
            return D ? /* @__PURE__ */ n(
              B,
              {
                mt: 0.25,
                mb: 0.25,
                children: /* @__PURE__ */ n(he, { children: h ? /* @__PURE__ */ n(
                  Qe,
                  {
                    propertyKey: S,
                    value: h.values[S],
                    property: D,
                    entity: h,
                    size: "tiny"
                  }
                ) : /* @__PURE__ */ n(
                  Ot,
                  {
                    property: D,
                    size: "tiny"
                  }
                ) })
              },
              `reference_previews_${S}`
            ) : null;
          })
        }
      );
    } else
      k = /* @__PURE__ */ C(
        B,
        {
          p: 1,
          onClick: r ? void 0 : w,
          justifyContent: "center",
          display: "flex",
          children: [
            /* @__PURE__ */ n(X, { variant: "label", sx: (F) => ({
              flexGrow: 1,
              textAlign: "center"
            }), children: "No value set" }),
            !r && /* @__PURE__ */ n(
              de,
              {
                variant: "outlined",
                color: "primary",
                children: "Set"
              }
            )
          ]
        }
      );
    return /* @__PURE__ */ n(
      B,
      {
        onClick: r ? void 0 : w,
        display: "flex",
        children: /* @__PURE__ */ C(
          B,
          {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            children: [
              /* @__PURE__ */ C(
                B,
                {
                  display: "flex",
                  flexDirection: "row",
                  flexGrow: 1,
                  children: [
                    /* @__PURE__ */ n(
                      Oe,
                      {
                        icon: /* @__PURE__ */ n(
                          Ti,
                          {
                            color: "inherit",
                            fontSize: "inherit"
                          }
                        ),
                        sx: {
                          flexGrow: 1,
                          color: "text.secondary",
                          ml: 1
                        },
                        title: e
                      }
                    ),
                    h && /* @__PURE__ */ n(
                      B,
                      {
                        alignSelf: "center",
                        m: 1,
                        children: /* @__PURE__ */ n(me, { title: o && o.path, children: /* @__PURE__ */ n(
                          X,
                          {
                            variant: "caption",
                            className: "mono",
                            children: h.id
                          }
                        ) })
                      }
                    ),
                    !I && h && o && /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(me, { title: `See details for ${h.id}`, children: /* @__PURE__ */ n("span", { children: /* @__PURE__ */ n(
                      oe,
                      {
                        onClick: E,
                        size: "large",
                        children: /* @__PURE__ */ n(jr, {})
                      }
                    ) }) }) }),
                    o && /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(me, { title: "Clear", children: /* @__PURE__ */ n("span", { children: /* @__PURE__ */ n(
                      oe,
                      {
                        disabled: r,
                        onClick: r ? void 0 : b,
                        size: "large",
                        children: /* @__PURE__ */ n(et, {})
                      }
                    ) }) }) })
                  ]
                }
              ),
              k
            ]
          }
        )
      }
    );
  })(A) });
}
function qd(e) {
  return typeof e.property.path != "string" ? /* @__PURE__ */ n(ka, { ...e }) : /* @__PURE__ */ n(Zd, { ...e });
}
function Zd({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  disabled: a,
  touched: s,
  autoFocus: l,
  property: c,
  includeDescription: d,
  context: A
}) {
  if (!c.path)
    throw new Error("Property path is required for ReferenceFieldBinding");
  Ge({
    property: c,
    value: t,
    setValue: r
  });
  const h = t && t instanceof _e ? t.path : c.path;
  return /* @__PURE__ */ C(we, { error: i, fullWidth: !0, children: [
    /* @__PURE__ */ n(
      Jd,
      {
        name: c.name,
        path: h,
        forceFilter: c.forceFilter,
        previewProperties: c.previewProperties,
        value: t,
        disabled: !!c.disabled,
        setValue: r
      }
    ),
    d && /* @__PURE__ */ n(Me, { property: c }),
    i && /* @__PURE__ */ n(Se, { error: !0, children: o })
  ] });
}
function Xd({
  propertyKey: e,
  value: t,
  showError: r,
  disabled: o,
  property: i,
  setValue: a,
  tableMode: s,
  includeDescription: l,
  underlyingValueHasChanged: c,
  autoFocus: d,
  context: A
}) {
  const u = i.pickOnlySomeKeys || !1, h = (i.expanded === void 0 ? !0 : i.expanded) || d;
  if (!i.properties)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  let g;
  u ? t ? g = Cd(
    i.properties,
    ...Object.keys(t).filter((m) => m in i.properties)
  ) : g = {} : g = i.properties, Ge({
    property: i,
    value: t,
    setValue: a
  });
  const f = /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(B, { sx: { py: 1, display: "flex", flexDirection: "column", gap: 2 }, children: Object.entries(g).filter(([m, w]) => !Hn(w)).map(
      ([m, w], b) => {
        const E = {
          propertyKey: `${e}.${m}`,
          disabled: o,
          property: w,
          includeDescription: l,
          underlyingValueHasChanged: c,
          context: A,
          tableMode: !1,
          partOfArray: !1,
          autoFocus: d && b === 0
        };
        return /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
          Ut,
          {
            ...E
          }
        ) }, `map-${e}-${b}`);
      }
    ) }),
    u && Kd(o, i.properties, a, t)
  ] }), p = /* @__PURE__ */ n(
    Oe,
    {
      icon: Re(i),
      required: i.validation?.required,
      title: i.name
    }
  );
  return /* @__PURE__ */ C(we, { fullWidth: !0, error: r, children: [
    !s && /* @__PURE__ */ n(
      Bt,
      {
        initiallyExpanded: h,
        title: p,
        children: f
      }
    ),
    s && f,
    l && /* @__PURE__ */ n(Me, { property: i })
  ] });
}
const Kd = (e, t, r, o) => {
  const i = Object.keys(t).filter((s) => !o || !(s in o)), a = (s) => {
    r({
      ...o,
      [s.target.value]: null
    });
  };
  return i.length ? /* @__PURE__ */ n(B, { m: 1, children: /* @__PURE__ */ C(we, { fullWidth: !0, children: [
    /* @__PURE__ */ n(wt, { children: "Add property" }),
    /* @__PURE__ */ n(
      Ke,
      {
        variant: "standard",
        value: "",
        disabled: e,
        onChange: a,
        children: i.map((s) => /* @__PURE__ */ n(Te, { value: s, children: t[s].name || s }, s))
      }
    )
  ] }) }) : /* @__PURE__ */ n(q, {});
};
function eA({
  propertyKey: e,
  value: t,
  showError: r,
  disabled: o,
  property: i,
  setValue: a,
  tableMode: s,
  includeDescription: l,
  underlyingValueHasChanged: c,
  autoFocus: d,
  context: A
}) {
  const u = (i.expanded === void 0 ? !0 : i.expanded) || d;
  if (!i.keyValue)
    throw Error(`Your property ${e} needs to have the 'keyValue' prop in order to use this field binding`);
  const h = /* @__PURE__ */ n(
    fo,
    {
      value: t,
      setValue: a,
      disabled: o,
      fieldName: i.name ?? e
    }
  ), g = /* @__PURE__ */ n(
    Oe,
    {
      icon: Re(i),
      required: i.validation?.required,
      title: i.name
    }
  );
  return /* @__PURE__ */ C(we, { fullWidth: !0, error: r, children: [
    !s && /* @__PURE__ */ n(
      Bt,
      {
        initiallyExpanded: u,
        title: g,
        children: h
      }
    ),
    s && h,
    l && /* @__PURE__ */ n(Me, { property: i })
  ] });
}
function tA({
  rowId: e,
  fieldKey: t,
  value: r,
  onFieldKeyChange: o,
  onDeleteClick: i,
  setValue: a,
  entryValue: s,
  dataType: l,
  updateDataType: c,
  disabled: d
}) {
  const [A, u] = R.useState(null), h = !!A, g = (w) => {
    u(w.currentTarget);
  }, f = () => {
    u(null);
  };
  function p(w, b, E) {
    return E === "string" || E === "number" ? /* @__PURE__ */ n(
      Mn,
      {
        value: w,
        inputType: E === "number" ? "number" : "text",
        small: !0,
        disabled: d || !b,
        onChange: (v) => {
          if (E === "number") {
            const x = v.target.value ? parseFloat(v.target.value) : void 0;
            x && isNaN(x) ? a({
              ...r,
              [b]: null
            }) : x != null ? a({
              ...r,
              [b]: x
            }) : a({
              ...r,
              [b]: null
            });
          } else
            a({
              ...r,
              [b]: v.target.value
            });
        }
      },
      E
    ) : E === "date" ? /* @__PURE__ */ n(
      mo,
      {
        value: w,
        small: !0,
        disabled: d || !b,
        onChange: (v) => {
          a({
            ...r,
            [b]: v
          });
        }
      }
    ) : E === "boolean" ? /* @__PURE__ */ n(
      uo,
      {
        value: w,
        small: !0,
        position: "start",
        disabled: d || !b,
        onChange: (v) => {
          const x = v.target.checked;
          a({
            ...r,
            [b]: x
          });
        }
      }
    ) : E === "array" ? /* @__PURE__ */ n(B, { sx: (v) => ({
      ml: 1,
      pl: 1,
      borderLeft: `1px solid ${v.palette.divider}`
    }), children: /* @__PURE__ */ n(
      ss,
      {
        value: w,
        newDefaultEntry: "",
        droppableId: e.toString(),
        addLabel: b ? `Add to ${b}` : "Add",
        small: !0,
        disabled: d || !b,
        includeAddButton: !0,
        onValueChange: (v) => {
          a({
            ...r,
            [b]: v
          });
        },
        buildEntry: (v, x) => /* @__PURE__ */ n(
          nA,
          {
            index: v,
            id: x,
            value: w[v],
            disabled: d || !b,
            setValue: (I) => {
              const k = [...w];
              k[v] = I, a({
                ...r,
                [b]: k
              });
            }
          }
        )
      }
    ) }) : E === "map" ? /* @__PURE__ */ n(B, { sx: (v) => ({
      ml: 1,
      pl: 1,
      borderLeft: `1px solid ${v.palette.divider}`
    }), children: /* @__PURE__ */ n(
      fo,
      {
        value: w,
        fieldName: b,
        setValue: (v) => {
          a({
            ...r,
            [b]: v
          });
        }
      }
    ) }) : /* @__PURE__ */ n(
      X,
      {
        variant: "caption",
        children: `Data type ${E} not supported yet`
      }
    );
  }
  function m(w) {
    c(e, w), f();
  }
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ C(
      X,
      {
        component: "div",
        className: "mono",
        sx: {
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ n(B, { sx: { width: "200px", maxWidth: "25%" }, children: /* @__PURE__ */ n(
            Mn,
            {
              value: t,
              disabled: d || !!s,
              small: !0,
              onChange: (w) => {
                o(w.target.value);
              }
            }
          ) }),
          /* @__PURE__ */ n(B, { sx: { flexGrow: 1 }, children: l !== "map" && l !== "array" && p(s, t, l) }),
          /* @__PURE__ */ n(
            oe,
            {
              size: "small",
              sx: (w) => ({
                background: w.palette.background.default,
                height: "28px",
                width: "28px"
              }),
              onClick: g,
              children: /* @__PURE__ */ n(Ui, {})
            }
          ),
          /* @__PURE__ */ n(
            oe,
            {
              "aria-label": "delete",
              size: "small",
              onClick: i,
              sx: {
                height: "28px",
                width: "28px"
              },
              children: /* @__PURE__ */ n(In, { fontSize: "small" })
            }
          )
        ]
      },
      e.toString()
    ),
    (l === "map" || l === "array") && p(s, t, l),
    /* @__PURE__ */ C(
      zi,
      {
        anchorEl: A,
        open: h,
        onClose: f,
        children: [
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => m("string"),
              children: "string"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => m("number"),
              children: "number"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => m("boolean"),
              children: "boolean"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => m("date"),
              children: "date"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => m("map"),
              children: "map"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => m("array"),
              children: "array"
            }
          )
        ]
      }
    )
  ] });
}
function nA({
  id: e,
  index: t,
  value: r,
  setValue: o
}) {
  const [i, a] = Q(Ir(r) ?? "string");
  function s(g) {
    a(g), u();
  }
  const [l, c] = R.useState(null), d = !!l, A = (g) => {
    c(g.currentTarget);
  }, u = () => {
    c(null);
  };
  function h(g, f) {
    return f === "string" || f === "number" ? /* @__PURE__ */ n(
      Mn,
      {
        value: g,
        inputType: f === "number" ? "number" : "text",
        small: !0,
        onChange: (p) => {
          if (f === "number") {
            const m = p.target.value ? parseFloat(p.target.value) : void 0;
            m && isNaN(m) ? o(null) : m != null ? o(m) : o(null);
          } else
            o(p.target.value);
        }
      }
    ) : f === "date" ? /* @__PURE__ */ n(
      mo,
      {
        value: g,
        small: !0,
        onChange: (p) => {
          o(p);
        }
      }
    ) : f === "boolean" ? /* @__PURE__ */ n(
      uo,
      {
        value: g,
        small: !0,
        position: "start",
        onChange: (p) => {
          o(p.target.checked);
        }
      }
    ) : f === "array" ? /* @__PURE__ */ n(X, { variant: "caption", children: "Arrays of arrays are not supported." }) : f === "map" ? /* @__PURE__ */ n(B, { sx: (p) => ({
      ml: 1,
      pl: 1,
      borderLeft: `1px solid ${p.palette.divider}`
    }), children: /* @__PURE__ */ n(
      fo,
      {
        value: g,
        setValue: (p) => {
          o(p);
        }
      }
    ) }) : /* @__PURE__ */ n(
      X,
      {
        variant: "caption",
        children: `Data type ${f} not supported yet`
      }
    );
  }
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ C(
      X,
      {
        component: "div",
        className: "mono",
        sx: {
          display: "flex",
          minHeight: "48px",
          flexDirection: "row",
          gap: 1,
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ n(B, { sx: { flexGrow: 1 }, children: i !== "map" && h(r, i) }),
          /* @__PURE__ */ n(
            oe,
            {
              size: "small",
              sx: (g) => ({
                background: g.palette.background.default,
                height: "28px",
                width: "28px"
              }),
              onClick: A,
              children: /* @__PURE__ */ n(Ui, {})
            }
          )
        ]
      },
      e.toString()
    ),
    i === "map" && h(r, i),
    /* @__PURE__ */ C(
      zi,
      {
        anchorEl: l,
        open: d,
        onClose: u,
        children: [
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => s("string"),
              children: "string"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => s("number"),
              children: "number"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => s("boolean"),
              children: "boolean"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => s("map"),
              children: "map"
            }
          ),
          /* @__PURE__ */ n(
            Le,
            {
              dense: !0,
              onClick: () => s("date"),
              children: "date"
            }
          )
        ]
      }
    )
  ] });
}
function fo({
  value: e,
  setValue: t,
  fieldName: r,
  disabled: o
}) {
  const [i, a] = R.useState(
    Object.keys(e ?? {}).map((c) => [Ar(), {
      key: c,
      dataType: Ir(e[c]) ?? "string"
    }])
  );
  Y(() => {
    const c = i.map(([g, { key: f }]) => f), d = Object.entries(e ?? {}).filter(([g, f]) => f !== void 0).map(([g]) => g), A = d.filter((g) => !c.includes(g)), u = c.filter((g) => !d.includes(g)), h = [...i];
    A.forEach((g) => {
      h.push([Ar(), {
        key: g,
        dataType: Ir(e[g]) ?? "string"
      }]);
    }), u.forEach((g) => {
      const f = h.findIndex(([p, { key: m }]) => m === g);
      h.splice(f, 1);
    }), a(h);
  }, [e]);
  const s = R.useRef(e), l = (c, d) => {
    if (!c) {
      console.warn("No key selected for data type update");
      return;
    }
    a(i.map((A) => A[0] === c ? [A[0], {
      key: A[1].key,
      dataType: d
    }] : A)), t({
      ...e,
      [i.find((A) => A[0] === c)?.[1].key ?? ""]: wa(d)
    });
  };
  return /* @__PURE__ */ C(B, { sx: {
    py: 1,
    display: "flex",
    flexDirection: "column",
    gap: 1
  }, children: [
    i.map(
      ([c, { key: d, dataType: A }], u) => {
        const h = d ? e[d] : "";
        return /* @__PURE__ */ n(
          tA,
          {
            rowId: c,
            fieldKey: d,
            value: e,
            onDeleteClick: () => {
              const f = { ...e };
              s.current && d in s.current ? f[d] = void 0 : delete f[d], a(i.filter((p) => p[0] !== c)), t({
                ...f
              });
            },
            onFieldKeyChange: (f) => {
              if (a(i.map((m) => m[0] === c ? [c, {
                key: f ?? "",
                dataType: m[1].dataType
              }] : m)), typeof e == "object" && f in e)
                return;
              const p = { ...e };
              s.current && d in s.current ? p[d] = void 0 : delete p[d], t({
                ...p,
                [f ?? ""]: h
              });
            },
            setValue: t,
            entryValue: h,
            dataType: A,
            disabled: o,
            updateDataType: l
          },
          c
        );
      }
    ),
    /* @__PURE__ */ n(
      B,
      {
        p: 1,
        justifyContent: "center",
        textAlign: "left",
        children: /* @__PURE__ */ n(
          de,
          {
            variant: "text",
            size: "small",
            color: "primary",
            fullWidth: !1,
            disabled: o,
            startIcon: /* @__PURE__ */ n(Ni, {}),
            onClick: () => {
              t({
                ...e,
                "": null
              }), a([...i, [Ar(), {
                key: "",
                dataType: "string"
              }]]);
            },
            children: r ? `Add to ${r}` : "Add"
          }
        )
      }
    )
  ] });
}
function Ar() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
function Ir(e) {
  if (typeof e == "string")
    return "string";
  if (typeof e == "number")
    return "number";
  if (typeof e == "boolean")
    return "boolean";
  if (Array.isArray(e))
    return "array";
  if (e instanceof Date)
    return "date";
  if (e instanceof _e)
    return "reference";
  if (e instanceof Nn)
    return "geopoint";
  if (typeof e == "object")
    return "map";
}
function Bt({
  title: e,
  children: t,
  invisible: r = !1,
  initiallyExpanded: o = !0,
  highlightOnHover: i = !1,
  padding: a = 1,
  dark: s = !0,
  onExpandedChange: l
}) {
  const [c, d] = R.useState(!1), A = y(() => d(!0), []), u = y(() => d(!1), []), [h, g] = Q(o);
  return /* @__PURE__ */ C(
    ws,
    {
      variant: "outlined",
      onMouseEnter: A,
      onMouseMove: A,
      onMouseLeave: u,
      disableGutters: !0,
      expanded: h,
      sx: (f) => ({
        backgroundColor: r ? "transparent" : s ? c && i ? va(f) : "transparent" : "inherit",
        borderRadius: r ? 0 : `${f.shape.borderRadius}px`,
        border: r ? "none" : void 0,
        "&::before": {
          display: "none"
        }
        // color: "inherit"
      }),
      TransitionProps: { unmountOnExit: !0 },
      onChange: y((f, p) => {
        l?.(p), g(p);
      }, [l]),
      children: [
        /* @__PURE__ */ n(
          ys,
          {
            expandIcon: /* @__PURE__ */ n(Il, {}),
            sx: (f) => ({
              color: f.palette.text.secondary,
              padding: r ? 0 : void 0,
              minHeight: "56px",
              alignItems: "center",
              borderTopLeftRadius: `${f.shape.borderRadius}px`,
              borderTopRightRadius: `${f.shape.borderRadius}px`,
              borderBottomLeftRadius: !h && !r ? `${f.shape.borderRadius}px` : void 0,
              borderBottomRightRadius: !h && !r ? `${f.shape.borderRadius}px` : void 0,
              border: r ? "none" : void 0,
              borderBottom: r ? `1px solid ${f.palette.divider}` : void 0,
              "&.Mui-expanded": {
                borderBottom: `1px solid ${f.palette.divider}`
              }
            }),
            children: e
          }
        ),
        /* @__PURE__ */ n(Es, { sx: (f) => ({
          padding: r ? 0 : typeof a == "string" ? a : f.spacing(a),
          py: f.spacing(2),
          border: r ? "none" : void 0,
          color: "inherit"
        }), children: t })
      ]
    }
  );
}
function rA({
  propertyKey: e,
  value: t,
  error: r,
  showError: o,
  isSubmitting: i,
  setValue: a,
  setFieldValue: s,
  tableMode: l,
  property: c,
  includeDescription: d,
  underlyingValueHasChanged: A,
  context: u,
  disabled: h
}) {
  if (!c.of)
    throw Error("RepeatFieldBinding misconfiguration. Property `of` not set");
  if (!c.resolvedProperties || !Array.isArray(c.resolvedProperties))
    throw Error("RepeatFieldBinding - Internal error: Expected array in 'property.resolvedProperties'");
  const g = c.expanded === void 0 ? !0 : c.expanded, f = c.of, [p, m] = Q();
  Ge({
    property: c,
    value: t,
    setValue: a
  });
  const w = (v, x) => {
    const I = c.resolvedProperties[v] ?? f, k = {
      propertyKey: `${e}.${v}`,
      disabled: h,
      property: I,
      includeDescription: d,
      underlyingValueHasChanged: A,
      context: u,
      tableMode: !1,
      partOfArray: !0,
      autoFocus: x === p
    };
    return /* @__PURE__ */ n(Ut, { ...k });
  }, b = /* @__PURE__ */ n(
    Ao,
    {
      value: t,
      addLabel: c.name ? "Add entry to " + c.name : "Add entry",
      name: e,
      setFieldValue: s,
      buildEntry: w,
      onInternalIdAdded: m,
      disabled: i || !!c.disabled,
      includeAddButton: !c.disabled,
      newDefaultEntry: c.of.defaultValue
    }
  ), E = /* @__PURE__ */ n(
    Oe,
    {
      icon: Re(c),
      required: c.validation?.required,
      title: c.name
    }
  );
  return /* @__PURE__ */ C(we, { fullWidth: !0, error: o, children: [
    !l && /* @__PURE__ */ n(
      Bt,
      {
        initiallyExpanded: g,
        title: E,
        children: b
      }
    ),
    l && b,
    d && /* @__PURE__ */ n(Me, { property: c }),
    o && typeof r == "string" && /* @__PURE__ */ n(Se, { error: !0, children: r })
  ] });
}
function oA({
  propertyKey: e,
  value: t,
  error: r,
  showError: o,
  isSubmitting: i,
  setValue: a,
  setFieldValue: s,
  tableMode: l,
  property: c,
  includeDescription: d,
  underlyingValueHasChanged: A,
  context: u,
  disabled: h
}) {
  if (!c.oneOf)
    throw Error("ArrayOneOfField misconfiguration. Property `oneOf` not set");
  const g = c.expanded === void 0 ? !0 : c.expanded;
  Ge({
    property: c,
    value: t,
    setValue: a
  });
  const [f, p] = Q(), m = y((v, x) => /* @__PURE__ */ n(
    iA,
    {
      name: `${e}.${v}`,
      index: v,
      value: t[v],
      typeField: c.oneOf.typeField ?? sn,
      valueField: c.oneOf.valueField ?? Pn,
      properties: c.oneOf.properties,
      autoFocus: x === f,
      context: u
    },
    `array_one_of_${v}`
  ), [u, f, c.oneOf, e, t]), w = /* @__PURE__ */ n(
    Oe,
    {
      icon: Re(c),
      required: c.validation?.required,
      title: c.name
    }
  ), b = Object.keys(c.oneOf.properties)[0], E = /* @__PURE__ */ n(
    Ao,
    {
      value: t,
      name: e,
      addLabel: c.name ? "Add entry to " + c.name : "Add entry",
      buildEntry: m,
      onInternalIdAdded: p,
      disabled: i || !!c.disabled,
      includeAddButton: !c.disabled,
      setFieldValue: s,
      newDefaultEntry: {
        [c.oneOf.typeField ?? sn]: b,
        [c.oneOf.valueField ?? Pn]: lo(c.oneOf.properties[b])
      }
    }
  );
  return /* @__PURE__ */ C(we, { fullWidth: !0, error: o, children: [
    !l && /* @__PURE__ */ n(Bt, { initiallyExpanded: g, title: w, children: E }),
    l && E,
    d && /* @__PURE__ */ n(Me, { property: c }),
    o && typeof r == "string" && /* @__PURE__ */ n(Se, { error: !0, children: r })
  ] });
}
function iA({
  name: e,
  index: t,
  value: r,
  typeField: o,
  valueField: i,
  properties: a,
  autoFocus: s,
  context: l
}) {
  const c = r && r[o], [d, A] = Q(c ?? void 0), u = Oi();
  Y(() => {
    c || w(Object.keys(a)[0]);
  }, []), Y(() => {
    c !== d && A(c);
  }, [c]);
  const h = d ? a[d] : void 0, g = Object.entries(a).map(([b, E]) => ({
    id: b,
    label: E.name ?? b
  })), f = `${e}.${o}`, p = `${e}.${i}`, m = h ? {
    propertyKey: p,
    property: h,
    context: l,
    autoFocus: s,
    tableMode: !1
  } : void 0, w = (b) => {
    const E = b ? a[b] : void 0;
    A(b), u.setFieldTouched(f), u.setFieldValue(f, b), u.setFieldValue(p, E ? lo(E) : null);
  };
  return /* @__PURE__ */ C(Wt, { sx: (b) => ({
    background: "transparent",
    padding: b.spacing(1),
    my: 1,
    py: 2
  }), elevation: 0, children: [
    /* @__PURE__ */ n(
      Mi,
      {
        required: !0,
        name: f,
        children: (b) => /* @__PURE__ */ C(we, { fullWidth: !0, size: "small", children: [
          /* @__PURE__ */ n(
            wt,
            {
              id: `${e}_${t}_select_label`,
              children: /* @__PURE__ */ n("span", { children: "Type" })
            }
          ),
          /* @__PURE__ */ n(
            Ke,
            {
              fullWidth: !0,
              sx: { marginBottom: 2 },
              labelId: `${e}_${t}_select_label`,
              label: "Type",
              value: b.field.value !== void 0 && b.field.value !== null ? b.field.value : "",
              onChange: (E) => {
                const v = E.target.value;
                w(v);
              },
              renderValue: (E) => /* @__PURE__ */ n(
                Ve,
                {
                  enumKey: E,
                  enumValues: g,
                  small: !0
                }
              ),
              children: g.map((E) => {
                const v = E.id;
                return /* @__PURE__ */ n(
                  Te,
                  {
                    value: v,
                    children: /* @__PURE__ */ n(
                      Ve,
                      {
                        enumKey: v,
                        enumValues: g,
                        small: !0
                      }
                    )
                  },
                  `select_${e}_${t}_${v}`
                );
              })
            }
          )
        ] })
      }
    ),
    m && /* @__PURE__ */ n(
      we,
      {
        fullWidth: !0,
        children: /* @__PURE__ */ n(Ut, { ...m })
      },
      `form_control_${e}_${d}`
    )
  ] });
}
const aA = new Li();
Vn.use(qr.AutoResize, {
  min: 100
});
Vn.unuse(qr.FontUnderline);
Vn.unuse(qr.Clear);
function sA({
  propertyKey: e,
  value: t,
  setValue: r,
  error: o,
  showError: i,
  disabled: a,
  autoFocus: s,
  touched: l,
  property: c,
  tableMode: d,
  includeDescription: A,
  context: u
}) {
  const [h, g] = R.useState(t), f = ce(t), p = $r({
    internalValue: h,
    value: t
  });
  return Y(() => {
    f.current = t, g(t);
  }, [t]), Y(() => {
    p.internalValue !== f.current && r(p.internalValue);
  }, [p]), /* @__PURE__ */ C(
    lA,
    {
      required: c.validation?.required,
      error: i,
      fullWidth: !0,
      children: [
        !d && /* @__PURE__ */ n(Se, { filled: !0, children: /* @__PURE__ */ n(
          Oe,
          {
            icon: Re(c),
            required: c.validation?.required,
            title: c.name
          }
        ) }),
        /* @__PURE__ */ n(
          Vn,
          {
            value: h ?? "",
            readOnly: a,
            renderHTML: (m) => aA.render(m),
            view: {
              menu: !0,
              md: !0,
              html: !1
            },
            onChange: ({
              html: m,
              text: w
            }) => {
              g(w ?? null);
            }
          }
        ),
        /* @__PURE__ */ n(B, { display: "flex", children: /* @__PURE__ */ C(B, { flexGrow: 1, children: [
          i && typeof o == "string" && /* @__PURE__ */ n(Se, { error: !0, children: o }),
          A && /* @__PURE__ */ n(Me, { property: c })
        ] }) })
      ]
    }
  );
}
const lA = tt(we)(({ theme: e }) => `
  @font-face {
    font-family: rmel-iconfont;
    src: url(data:application/vnd.ms-fontobject;base64,fBkAAMAYAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAB9vj4gAAAAAAAAAAAAAAAAAAAAAAABoAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdAAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAAGgByAG0AZQBsAC0AaQBjAG8AbgBmAG8AbgB0AAAAAAAAAQAAAAsAgAADADBHU1VCsP6z7QAAATgAAABCT1MvMj3jT5QAAAF8AAAAVmNtYXBA5I9dAAACPAAAAwhnbHlmMImhbQAABXwAAA9gaGVhZBtQ+k8AAADgAAAANmhoZWEH3gObAAAAvAAAACRobXR4aAAAAAAAAdQAAABobG9jYTX6MgAAAAVEAAAANm1heHABMAB7AAABGAAAACBuYW1lc9ztwgAAFNwAAAKpcG9zdCcpv64AABeIAAABNQABAAADgP+AAFwEAAAAAAAEAAABAAAAAAAAAAAAAAAAAAAAGgABAAAAAQAA4uPbB18PPPUACwQAAAAAANwY2ykAAAAA3BjbKQAA//8EAAMBAAAACAACAAAAAAAAAAEAAAAaAG8ADAAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQAAAAoAHgAsAAFERkxUAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACAABAAYAAAABAAAAAAABBAABkAAFAAgCiQLMAAAAjwKJAswAAAHrADIBCAAAAgAFAwAAAAAAAAAAAAAAAAAAAAAAAAAAAABQZkVkAEDnbe2iA4D/gABcA4AAgAAAAAEAAAAAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAAAAAUAAAADAAAALAAAAAQAAAHMAAEAAAAAAMYAAwABAAAALAADAAoAAAHMAAQAmgAAABYAEAADAAbnbelB7TztRe1h7XXteO2A7Y3tov//AADnbelB7TvtRO1f7W/td+2A7Yztn///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAWABYAFgAYABoAHgAqACwALAAuAAAAAQAEAAUAAwAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAAgAUABUAFgAXABgAGQAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAABPAAAAAAAAAAZAADnbQAA520AAAABAADpQQAA6UEAAAAEAADtOwAA7TsAAAAFAADtPAAA7TwAAAADAADtRAAA7UQAAAAGAADtRQAA7UUAAAAHAADtXwAA7V8AAAAIAADtYAAA7WAAAAAJAADtYQAA7WEAAAAKAADtbwAA7W8AAAALAADtcAAA7XAAAAAMAADtcQAA7XEAAAANAADtcgAA7XIAAAAOAADtcwAA7XMAAAAPAADtdAAA7XQAAAAQAADtdQAA7XUAAAARAADtdwAA7XcAAAASAADteAAA7XgAAAATAADtgAAA7YAAAAACAADtjAAA7YwAAAAUAADtjQAA7Y0AAAAVAADtnwAA7Z8AAAAWAADtoAAA7aAAAAAXAADtoQAA7aEAAAAYAADtogAA7aIAAAAZAAAAAABmAMwBHgGEAbwB/gJmAsgC/gM0A3IDogRABKgE7gUuBXAFygYKBmoGpAbEBugHRgewAAAABQAAAAADVgLWAAsAGAAlADQAQAAAEyEyFhQGByEuATQ2Fz4BNyEeARQGIyEiJgM0NjchHgEUBiMhIiY3PgEzITIeARQOASMhIiYnFhQPAQYmNRE0NhfWAlQSGRkS/awSGRnaARgTAWASGRkS/qASGfQZEgJUEhkZEv2sEhnzARgTAWAMFAsLFAz+oBIZOQgIkgseHgsC1RklGAEBGCUZ8hMYAQEYJRkZ/oUTGAEBGCUZGdkSGQsVFxQMGoYGFgaVDAwRASoRDAwAAAAADAAAAAADqwKrAA8AEwAXABsAHwAjACcAMwA3ADsAPwBDAAABIQ4BBwMeARchPgE3ES4BBTMVIxUzFSMnMxUjFTMVKwI1MzUjNTMBISImNDYzITIWFAY3IzUzNSM1MxcjNTM1IzUzA1X9ViQwAQEBMSQCqiQxAQEx/lxWVlZWgFZWVlYqVlZWVgFV/wASGBgSAQASGBgZVlZWVoBWVlZWAqsBMST+ViQxAQExJAGqJDF/VipW1lYqVlYqVv6AGCQZGSQYqlYqVtZWKlYAAwAAAAADKwMAAA8AHwAzAAAlHgEXIT4BNxEuASchDgEHMyEyFhcRDgEHIS4BJxE+ASUnJisBIg8BIyIGFBYzITI2NCYjAQABMCQBViQwAQEwJP6qJDABgAEAExcBARcT/wATFwEBFwEoHgsStBILHmsTFxcTAgARGRkRVSQwAQEwJAGrJDABATAkFxT+qxEZAQEZEQFVFBfVHg0NHhcnFxcnFwADAAAAAAOrAtkAFgAtAD4AAAEVBg8BBiIvASY0PwEnJjQ/ATYyHwEWBTc2NC8BJiIPAQYHFRYfARYyPwE2NCcBJyYGBwMGFh8BFjY3EzYmJwOrAQmwBxEHHgYGk5MGBh4HEQewCf0PkwYGHwYSBrAJAQEJsAcRBx4GBgFCKQkPBOMCBwgoCQ8E4gMHCQGIEA0KsAYGHgcRBpOTBhIGHgYGsAoVkwYRBx4GBrAKDRANCrAGBh4GEgYB2Q8DBwj9jAgQAw4DBwgCcwgPBAACAAAAAAOaAm8AEAAhAAAlJzc2NCYiDwEGFB8BFjI2NCU3JyY0NjIfARYUDwEGIiY0AXOmpg0ZJAzEDQ3EDiEaAQ2mpg0aIQ7EDQ3EDiEa2qamDiEaDcQNIg3EDRohDqamDCQZDcQNIg3EDRkkAAAAAwAAAAADuAKsAAsAFwAjAAABDgEHHgEXPgE3LgEDLgEnPgE3HgEXDgEDDgEHHgEXPgE3LgECAJjrNTXrmJjrNTXrmFZwAgJwVlZwAgJwVjRDAQFDNDRDAQFDAqwCpIaGpAICpIaGpP4OAnBWVnACAnBWVnABPgFDNDRDAQFDNDRDAAAABQAAAAADgAKrAAsAFwAjADAAQAAAEyEyNjQmIyEiBhQWFyE+ATQmJyEOARQWEyEyNjQmIyEiBhQWJx4BFyE+ATQmJyEOASUhHgEXEQ4BByEuATURNDarAQATFxcT/wARGRkRAQATFxcT/wARGRkRAQATFxcT/wARGRkaARkRAQATFxcT/wARGQHUAQARGQEBGRH/ABMXFwEAFycXFycXqwEZIhkBARkiGQFVFycXFycX1RMXAQEXJhcBARcYARcT/gARGQEBGRECABMXAAAAAAMAAAAAA6sCVgAZACYAQAAAASMiBhQWOwEeARcOAQcjIgYUFjsBPgE3LgEFHgEXIT4BNCYnIQ4BFyMuASc+ATczMjY0JisBDgEHHgEXMzI2NCYC1YASGBgSgDdIAQFIN4ASGBgSgFt4AwN4/iUBGBIBABIYGBL/ABIYVYA3SAEBSDeAEhgYEoBbeAMDeFuAEhgYAlUYJBkBSTY2SQEZJBgCeFtbeNMSGAEBGCQYAQEYkgFJNjZJARkkGAJ4W1t4AhgkGQABAAAAAAOsAisAHgAAAS4BJw4BBwYWFxY2Nz4BNzIWFwcGFhczPgE3NS4BBwMSO5ZVh9Q4ChMXFCMJK6FnP28sURMTHu4SGAECMRYBvDQ6AQKJchcqCAYPElZpASslUhYxAgEYEu8dFBMAAAABAAAAAAOyAisAHgAAAQ4BBycmBgcVHgEXMz4BLwE+ATMeARceATc+AScuAQIUVZY7URYxAgEYEu4eFBNSLW8+Z6ErCSQTFxMKOdMCKwE6NFAUFB3vEhgBAjEWUiUrAWlWEg8GCCoXcokAAAADAAAAAAL1Ar8AFAAcACQAAAE+ATcuAScjDgEHER4BFyE+ATc0JiUzHgEUBgcjEyM1Mx4BFAYCkyEpAQJmTu8UGQEBGRQBB0lpAjT+1IgdJycdiJ+fnx0nJwGKF0QkTmYCARoT/d4TGgECYUk1UtkBJjsmAf7viQEmOyYAAQAAAAADEgK/ABwAAAEeARczAyMOARQWFzM+ATQmJyMTMz4BNCYnIw4BAaUBJh0hnDsdJiYd5B0mJh0hnDsdJiYd5B0mAnodJgH+lAEmOicBASc6JgEBbAEmOicBAScABgAAAAADlgLWAAsAFwAjAEEAUgBuAAABIT4BNCYnIQ4BFBYBIQ4BFBYXIT4BNCYDIQ4BFBYXIT4BNCYFIyIGFBY7ARUjIgYUFjsBFSMiBhQWOwEyNjc1LgEDMxUeATI2PQE0JisBIgYUFhcjIgYUFjsBBwYdARQWOwEyNjQmKwE3Nj0BLgEBawIAEhgYEv4AEhkZAhL+ABIZGRICABIYGBL+ABIZGRICABIYGP1YVQkMDAlAFQoLCwoVQAkMDAlVCgsBAQtfFQELEwwMCSsJDAxeVQkMDAk3RwUMCVUKCwsKN0gFAQsCVQEYJBgBARgkGP5VARgkGAEBGCQYAQEBGCQYAQEYJBjVDBIMFgwSDBYMEgwMCYAJDAHWawkMDAmACQwMEgzWDBIMVAYICQkMDBIMVAYICQkMAAAAAAYAAAAAA4sCwAAIABEAGgAmADIAPwAAEw4BFBYyNjQmAw4BFBYyNjQmAw4BFBYyNjQmFyE+ATQmJyEOARQWNyE+ATQmJyEOARQWAx4BFyE+ATQmJyEOAbUbJCQ3JCQcGyQkNyQkHBskJDYlJI8CABIYGBL+ABIYGBICABIYGBL+ABIYGBkBGBICABIYGBL+ABIYAcABJDYkJDYkAQEBJDYkJDYk/gEBJDYkJDYkagEYJBgBARgkGP8BGCQYAQEYJBgBKhIYAQEYJBgBARgAAAACAAAAAANWAlYAFgAtAAAlMjY/ATY9AS4BKwEiBh0BFBYXMwcGFgUyNj8BNj0BNCYrASIGBxUeARczBwYWATIRGwc9CQEYEqsSGBgSViwOIAHMEBsIPAkYEqsSGAEBGBJVLA0gqxEOeRIUwhIYGBKrEhgBWB4zAREOeRIUwhIYGBKrEhgBWB4zAAAAAAMAAAAAA4ACwAAIABkAJQAAJT4BNzUjFR4BAR4BFzMVMzUzPgE0JichDgEDIT4BNCYnIQ4BFBYCACQwAaoBMP75ASQblqqWGyQkG/4qGyQrAqoSGRkS/VYSGRlAATAkKyskMAI/GyQBgIABJDYkAQEk/noBGCQYAQEYJBgAAAAAAgAA//8DKwMBABsAKAAAJT4BNxEuASIGBxEUBgcGLgI1ES4BIgYHER4BBx4BMyEyNjQmIyEiBgIiYnoCAR4tHgFBNSFBNR0BHi0eAQOm1AEYEgIAEhgYEv4AEhitD5NlARcWHh4W/uQ3UwwHDys8IwEgFh4eFv7gdpR2EhkZJBgYAAAAAwAAAAADcALHAAsALQA5AAATIT4BNCYjISIGFBYFISIGFBYXITIWFxYGByM1LgEPAQYUHwEWNjc1Mz4BJy4BBSMiBhQWFzM+ATQmwAJVEhkZEv2rEhgYAgv+BxIYGBICBiAzBgUxKGABGQtMBgZMDBgBVU1iBQhk/m2rEhgYEqsSGBgCcQEYJBgYJBisGCQYAScgKTkCIg8KCkwHEQdMCgoPIgJrTkRV/xgkGAEBGCQYAAAAAgAAAAADlgLAABQAKAAAARQWFzMRHgEyNjcRMz4BNCYnIQ4BAzMVFBYyNjc1MzI2NCYnIQ4BFBYBayQclQEkNiQBlRwkJBz+VhwkwEAkNyQBQBskJBv/ABwkJAKAGyQB/kAbJCQbAcABJDYkAQEk/tDrGyQkG+skNyQBASQ3JAAKAAAAAAN4AvgADwAWABoAIQAlACkALQA0ADgAPwAAASEOAQcRHgEXIT4BNxEuAQEjIiY9ATM1IzUzNSM1NDY7ARMjNTM1IzUzNSM1MxMjNTMVFAY3IzUzNSM1MzIWFQMs/aggKgEBKiACWCAqAQEq/h5xDxaWlpaWFg9x4ZaWlpaWlrxxlhYWlpaWcQ8WAvcBKiD9qCAqAQEqIAJYICr9XhYPcUuWS3EPFv2olkuWS5b9qJZxDxbhlkuWFg8AAAACAAD//wOAAwAADwAgAAAlES4BJyEOAQcRHgEXIT4BJRc3NjIfARYGIyEiJj8BPgEDgAEwJP2qJDABATAkAlYkMP39WYUHFAeVCAwN/gEOCwhqBxRVAlYkMAEBMCT9qiQwAQEw+2yqCAnHCxcXC4kIAQAAAAEAAAAAAzUCNgAQAAABBwYUFjI/ARcWMjY0LwEmIgHZ/hAhLBHX1xEsIRD+EC4CJv4RLCEQ19cQISwR/hAAAAABAAAAAAM1AjYAEgAAAQcnJiciDgEWHwEWMj8BNjQuAQLW1tcQFxEbDQYM/hEsEf4QIS0CJtfXDwESICAM/hAQ/hAtIAEAAAAEAAAAAANrAusAEAAhADMARAAANzMVFBYyNj0BNCYrASIGFBYTIyIGFBY7ATI2PQE0JiIGFQEyNj0BMzI2NCYrASIGHQEUFhM1NCYiBh0BFBY7ATI2NCYjyWgeLB0dFpwWHR1+aBYdHRacFh0dLB4BahYeaBYdHRacFh0dSh4sHR0WnBYdHRaxaBYdHRacFh0dLB4Bnh4sHR0WnBYdHRb9Xx0WaB4sHR0WnBYdAjloFh0dFpwWHR0sHgAAAAQAAAAAA1QC1AARACMANABGAAATDgEHFR4BFzM+ATQmKwE1NCYnPgE9ATMyNjQmJyMOAQcVHgEBIyIGFBYXMz4BNzUuASIGFQMeATsBFRQWMjY3NS4BJyMOAd0VGwEBGxWRFRsbFWEcFBQcYRUbGxWRFRsBARsCK2EVGxsVkRUbAQEbKRySARsVYRwpGwEBGxWRFRsBHwEbFZEVGwEBGykcYRUbwwEbFWEcKRsBARsVkRUb/qscKRsBARsVkRUbGxUBtRQcYRUbGxWRFRsBARsAAAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQANABUAAQAAAAAAAgAHACIAAQAAAAAAAwANACkAAQAAAAAABAANADYAAQAAAAAABQALAEMAAQAAAAAABgANAE4AAQAAAAAACgArAFsAAQAAAAAACwATAIYAAwABBAkAAAAqAJkAAwABBAkAAQAaAMMAAwABBAkAAgAOAN0AAwABBAkAAwAaAOsAAwABBAkABAAaAQUAAwABBAkABQAWAR8AAwABBAkABgAaATUAAwABBAkACgBWAU8AAwABBAkACwAmAaUKQ3JlYXRlZCBieSBpY29uZm9udApybWVsLWljb25mb250UmVndWxhcnJtZWwtaWNvbmZvbnRybWVsLWljb25mb250VmVyc2lvbiAxLjBybWVsLWljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAHIAbQBlAGwALQBpAGMAbwBuAGYAbwBuAHQAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwADdGFiCGtleWJvYXJkBmRlbGV0ZQpjb2RlLWJsb2NrBGNvZGUKdmlzaWJpbGl0eQp2aWV3LXNwbGl0BGxpbmsEcmVkbwR1bmRvBGJvbGQGaXRhbGljDGxpc3Qtb3JkZXJlZA5saXN0LXVub3JkZXJlZAVxdW90ZQ1zdHJpa2V0aHJvdWdoCXVuZGVybGluZQR3cmFwCWZvbnQtc2l6ZQRncmlkBWltYWdlC2V4cGFuZC1sZXNzC2V4cGFuZC1tb3JlD2Z1bGxzY3JlZW4tZXhpdApmdWxsc2NyZWVuAAAAAAA=);
    src: url(data:font/ttf;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzI940+UAAABfAAAAFZjbWFwQOSPXQAAAjwAAAMIZ2x5ZjCJoW0AAAV8AAAPYGhlYWQbUPpPAAAA4AAAADZoaGVhB94DmwAAALwAAAAkaG10eGgAAAAAAAHUAAAAaGxvY2E1+jIAAAAFRAAAADZtYXhwATAAewAAARgAAAAgbmFtZXPc7cIAABTcAAACqXBvc3QnKb+uAAAXiAAAATUAAQAAA4D/gABcBAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAABoAAQAAAAEAAOLjgrdfDzz1AAsEAAAAAADcGNspAAAAANwY2ykAAP//BAADAQAAAAgAAgAAAAAAAAABAAAAGgBvAAwAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQQAAZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA523togOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAFAAAAAwAAACwAAAAEAAABzAABAAAAAADGAAMAAQAAACwAAwAKAAABzAAEAJoAAAAWABAAAwAG523pQe087UXtYe117XjtgO2N7aL//wAA523pQe077UTtX+1v7XftgO2M7Z///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFgAWABYAGAAaAB4AKgAsACwALgAAAAEABAAFAAMABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATAAIAFAAVABYAFwAYABkAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAATwAAAAAAAAAGQAA520AAOdtAAAAAQAA6UEAAOlBAAAABAAA7TsAAO07AAAABQAA7TwAAO08AAAAAwAA7UQAAO1EAAAABgAA7UUAAO1FAAAABwAA7V8AAO1fAAAACAAA7WAAAO1gAAAACQAA7WEAAO1hAAAACgAA7W8AAO1vAAAACwAA7XAAAO1wAAAADAAA7XEAAO1xAAAADQAA7XIAAO1yAAAADgAA7XMAAO1zAAAADwAA7XQAAO10AAAAEAAA7XUAAO11AAAAEQAA7XcAAO13AAAAEgAA7XgAAO14AAAAEwAA7YAAAO2AAAAAAgAA7YwAAO2MAAAAFAAA7Y0AAO2NAAAAFQAA7Z8AAO2fAAAAFgAA7aAAAO2gAAAAFwAA7aEAAO2hAAAAGAAA7aIAAO2iAAAAGQAAAAAAZgDMAR4BhAG8Af4CZgLIAv4DNANyA6IEQASoBO4FLgVwBcoGCgZqBqQGxAboB0YHsAAAAAUAAAAAA1YC1gALABgAJQA0AEAAABMhMhYUBgchLgE0Nhc+ATchHgEUBiMhIiYDNDY3IR4BFAYjISImNz4BMyEyHgEUDgEjISImJxYUDwEGJjURNDYX1gJUEhkZEv2sEhkZ2gEYEwFgEhkZEv6gEhn0GRICVBIZGRL9rBIZ8wEYEwFgDBQLCxQM/qASGTkICJILHh4LAtUZJRgBARglGfITGAEBGCUZGf6FExgBARglGRnZEhkLFRcUDBqGBhYGlQwMEQEqEQwMAAAAAAwAAAAAA6sCqwAPABMAFwAbAB8AIwAnADMANwA7AD8AQwAAASEOAQcDHgEXIT4BNxEuAQUzFSMVMxUjJzMVIxUzFSsCNTM1IzUzASEiJjQ2MyEyFhQGNyM1MzUjNTMXIzUzNSM1MwNV/VYkMAEBATEkAqokMQEBMf5cVlZWVoBWVlZWKlZWVlYBVf8AEhgYEgEAEhgYGVZWVlaAVlZWVgKrATEk/lYkMQEBMSQBqiQxf1YqVtZWKlZWKlb+gBgkGRkkGKpWKlbWVipWAAMAAAAAAysDAAAPAB8AMwAAJR4BFyE+ATcRLgEnIQ4BBzMhMhYXEQ4BByEuAScRPgElJyYrASIPASMiBhQWMyEyNjQmIwEAATAkAVYkMAEBMCT+qiQwAYABABMXAQEXE/8AExcBARcBKB4LErQSCx5rExcXEwIAERkZEVUkMAEBMCQBqyQwAQEwJBcU/qsRGQEBGREBVRQX1R4NDR4XJxcXJxcAAwAAAAADqwLZABYALQA+AAABFQYPAQYiLwEmND8BJyY0PwE2Mh8BFgU3NjQvASYiDwEGBxUWHwEWMj8BNjQnAScmBgcDBhYfARY2NxM2JicDqwEJsAcRBx4GBpOTBgYeBxEHsAn9D5MGBh8GEgawCQEBCbAHEQceBgYBQikJDwTjAgcIKAkPBOIDBwkBiBANCrAGBh4HEQaTkwYSBh4GBrAKFZMGEQceBgawCg0QDQqwBgYeBhIGAdkPAwcI/YwIEAMOAwcIAnMIDwQAAgAAAAADmgJvABAAIQAAJSc3NjQmIg8BBhQfARYyNjQlNycmNDYyHwEWFA8BBiImNAFzpqYNGSQMxA0NxA4hGgENpqYNGiEOxA0NxA4hGtqmpg4hGg3EDSINxA0aIQ6mpgwkGQ3EDSINxA0ZJAAAAAMAAAAAA7gCrAALABcAIwAAAQ4BBx4BFz4BNy4BAy4BJz4BNx4BFw4BAw4BBx4BFz4BNy4BAgCY6zU165iY6zU165hWcAICcFZWcAICcFY0QwEBQzQ0QwEBQwKsAqSGhqQCAqSGhqT+DgJwVlZwAgJwVlZwAT4BQzQ0QwEBQzQ0QwAAAAUAAAAAA4ACqwALABcAIwAwAEAAABMhMjY0JiMhIgYUFhchPgE0JichDgEUFhMhMjY0JiMhIgYUFiceARchPgE0JichDgElIR4BFxEOAQchLgE1ETQ2qwEAExcXE/8AERkZEQEAExcXE/8AERkZEQEAExcXE/8AERkZGgEZEQEAExcXE/8AERkB1AEAERkBARkR/wATFxcBABcnFxcnF6sBGSIZAQEZIhkBVRcnFxcnF9UTFwEBFyYXAQEXGAEXE/4AERkBARkRAgATFwAAAAADAAAAAAOrAlYAGQAmAEAAAAEjIgYUFjsBHgEXDgEHIyIGFBY7AT4BNy4BBR4BFyE+ATQmJyEOARcjLgEnPgE3MzI2NCYrAQ4BBx4BFzMyNjQmAtWAEhgYEoA3SAEBSDeAEhgYEoBbeAMDeP4lARgSAQASGBgS/wASGFWAN0gBAUg3gBIYGBKAW3gDA3hbgBIYGAJVGCQZAUk2NkkBGSQYAnhbW3jTEhgBARgkGAEBGJIBSTY2SQEZJBgCeFtbeAIYJBkAAQAAAAADrAIrAB4AAAEuAScOAQcGFhcWNjc+ATcyFhcHBhYXMz4BNzUuAQcDEjuWVYfUOAoTFxQjCSuhZz9vLFETEx7uEhgBAjEWAbw0OgECiXIXKggGDxJWaQErJVIWMQIBGBLvHRQTAAAAAQAAAAADsgIrAB4AAAEOAQcnJgYHFR4BFzM+AS8BPgEzHgEXHgE3PgEnLgECFFWWO1EWMQIBGBLuHhQTUi1vPmehKwkkExcTCjnTAisBOjRQFBQd7xIYAQIxFlIlKwFpVhIPBggqF3KJAAAAAwAAAAAC9QK/ABQAHAAkAAABPgE3LgEnIw4BBxEeARchPgE3NCYlMx4BFAYHIxMjNTMeARQGApMhKQECZk7vFBkBARkUAQdJaQI0/tSIHScnHYifn58dJycBihdEJE5mAgEaE/3eExoBAmFJNVLZASY7JgH+74kBJjsmAAEAAAAAAxICvwAcAAABHgEXMwMjDgEUFhczPgE0JicjEzM+ATQmJyMOAQGlASYdIZw7HSYmHeQdJiYdIZw7HSYmHeQdJgJ6HSYB/pQBJjonAQEnOiYBAWwBJjonAQEnAAYAAAAAA5YC1gALABcAIwBBAFIAbgAAASE+ATQmJyEOARQWASEOARQWFyE+ATQmAyEOARQWFyE+ATQmBSMiBhQWOwEVIyIGFBY7ARUjIgYUFjsBMjY3NS4BAzMVHgEyNj0BNCYrASIGFBYXIyIGFBY7AQcGHQEUFjsBMjY0JisBNzY9AS4BAWsCABIYGBL+ABIZGQIS/gASGRkSAgASGBgS/gASGRkSAgASGBj9WFUJDAwJQBUKCwsKFUAJDAwJVQoLAQELXxUBCxMMDAkrCQwMXlUJDAwJN0cFDAlVCgsLCjdIBQELAlUBGCQYAQEYJBj+VQEYJBgBARgkGAEBARgkGAEBGCQY1QwSDBYMEgwWDBIMDAmACQwB1msJDAwJgAkMDBIM1gwSDFQGCAkJDAwSDFQGCAkJDAAAAAAGAAAAAAOLAsAACAARABoAJgAyAD8AABMOARQWMjY0JgMOARQWMjY0JgMOARQWMjY0JhchPgE0JichDgEUFjchPgE0JichDgEUFgMeARchPgE0JichDgG1GyQkNyQkHBskJDckJBwbJCQ2JSSPAgASGBgS/gASGBgSAgASGBgS/gASGBgZARgSAgASGBgS/gASGAHAASQ2JCQ2JAEBASQ2JCQ2JP4BASQ2JCQ2JGoBGCQYAQEYJBj/ARgkGAEBGCQYASoSGAEBGCQYAQEYAAAAAgAAAAADVgJWABYALQAAJTI2PwE2PQEuASsBIgYdARQWFzMHBhYFMjY/ATY9ATQmKwEiBgcVHgEXMwcGFgEyERsHPQkBGBKrEhgYElYsDiABzBAbCDwJGBKrEhgBARgSVSwNIKsRDnkSFMISGBgSqxIYAVgeMwERDnkSFMISGBgSqxIYAVgeMwAAAAADAAAAAAOAAsAACAAZACUAACU+ATc1IxUeAQEeARczFTM1Mz4BNCYnIQ4BAyE+ATQmJyEOARQWAgAkMAGqATD++QEkG5aqlhskJBv+KhskKwKqEhkZEv1WEhkZQAEwJCsrJDACPxskAYCAASQ2JAEBJP56ARgkGAEBGCQYAAAAAAIAAP//AysDAQAbACgAACU+ATcRLgEiBgcRFAYHBi4CNREuASIGBxEeAQceATMhMjY0JiMhIgYCImJ6AgEeLR4BQTUhQTUdAR4tHgEDptQBGBICABIYGBL+ABIYrQ+TZQEXFh4eFv7kN1MMBw8rPCMBIBYeHhb+4HaUdhIZGSQYGAAAAAMAAAAAA3ACxwALAC0AOQAAEyE+ATQmIyEiBhQWBSEiBhQWFyEyFhcWBgcjNS4BDwEGFB8BFjY3NTM+AScuAQUjIgYUFhczPgE0JsACVRIZGRL9qxIYGAIL/gcSGBgSAgYgMwYFMShgARkLTAYGTAwYAVVNYgUIZP5tqxIYGBKrEhgYAnEBGCQYGCQYrBgkGAEnICk5AiIPCgpMBxEHTAoKDyICa05EVf8YJBgBARgkGAAAAAIAAAAAA5YCwAAUACgAAAEUFhczER4BMjY3ETM+ATQmJyEOAQMzFRQWMjY3NTMyNjQmJyEOARQWAWskHJUBJDYkAZUcJCQc/lYcJMBAJDckAUAbJCQb/wAcJCQCgBskAf5AGyQkGwHAASQ2JAEBJP7Q6xskJBvrJDckAQEkNyQACgAAAAADeAL4AA8AFgAaACEAJQApAC0ANAA4AD8AAAEhDgEHER4BFyE+ATcRLgEBIyImPQEzNSM1MzUjNTQ2OwETIzUzNSM1MzUjNTMTIzUzFRQGNyM1MzUjNTMyFhUDLP2oICoBASogAlggKgEBKv4ecQ8WlpaWlhYPceGWlpaWlpa8cZYWFpaWlnEPFgL3ASog/aggKgEBKiACWCAq/V4WD3FLlktxDxb9qJZLlkuW/aiWcQ8W4ZZLlhYPAAAAAgAA//8DgAMAAA8AIAAAJREuASchDgEHER4BFyE+ASUXNzYyHwEWBiMhIiY/AT4BA4ABMCT9qiQwAQEwJAJWJDD9/VmFBxQHlQgMDf4BDgsIagcUVQJWJDABATAk/aokMAEBMPtsqggJxwsXFwuJCAEAAAABAAAAAAM1AjYAEAAAAQcGFBYyPwEXFjI2NC8BJiIB2f4QISwR19cRLCEQ/hAuAib+ESwhENfXECEsEf4QAAAAAQAAAAADNQI2ABIAAAEHJyYnIg4BFh8BFjI/ATY0LgEC1tbXEBcRGw0GDP4RLBH+ECEtAibX1w8BEiAgDP4QEP4QLSABAAAABAAAAAADawLrABAAIQAzAEQAADczFRQWMjY9ATQmKwEiBhQWEyMiBhQWOwEyNj0BNCYiBhUBMjY9ATMyNjQmKwEiBh0BFBYTNTQmIgYdARQWOwEyNjQmI8loHiwdHRacFh0dfmgWHR0WnBYdHSweAWoWHmgWHR0WnBYdHUoeLB0dFpwWHR0WsWgWHR0WnBYdHSweAZ4eLB0dFpwWHR0W/V8dFmgeLB0dFpwWHQI5aBYdHRacFh0dLB4AAAAEAAAAAANUAtQAEQAjADQARgAAEw4BBxUeARczPgE0JisBNTQmJz4BPQEzMjY0JicjDgEHFR4BASMiBhQWFzM+ATc1LgEiBhUDHgE7ARUUFjI2NzUuAScjDgHdFRsBARsVkRUbGxVhHBQUHGEVGxsVkRUbAQEbAithFRsbFZEVGwEBGykckgEbFWEcKRsBARsVkRUbAR8BGxWRFRsBARspHGEVG8MBGxVhHCkbAQEbFZEVG/6rHCkbAQEbFZEVGxsVAbUUHGEVGxsVkRUbAQEbAAAAAAAAEgDeAAEAAAAAAAAAFQAAAAEAAAAAAAEADQAVAAEAAAAAAAIABwAiAAEAAAAAAAMADQApAAEAAAAAAAQADQA2AAEAAAAAAAUACwBDAAEAAAAAAAYADQBOAAEAAAAAAAoAKwBbAAEAAAAAAAsAEwCGAAMAAQQJAAAAKgCZAAMAAQQJAAEAGgDDAAMAAQQJAAIADgDdAAMAAQQJAAMAGgDrAAMAAQQJAAQAGgEFAAMAAQQJAAUAFgEfAAMAAQQJAAYAGgE1AAMAAQQJAAoAVgFPAAMAAQQJAAsAJgGlCkNyZWF0ZWQgYnkgaWNvbmZvbnQKcm1lbC1pY29uZm9udFJlZ3VsYXJybWVsLWljb25mb250cm1lbC1pY29uZm9udFZlcnNpb24gMS4wcm1lbC1pY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAHIAbQBlAGwALQBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgByAG0AZQBsAC0AaQBjAG8AbgBmAG8AbgB0AHIAbQBlAGwALQBpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAHIAbQBlAGwALQBpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsAA3RhYghrZXlib2FyZAZkZWxldGUKY29kZS1ibG9jawRjb2RlCnZpc2liaWxpdHkKdmlldy1zcGxpdARsaW5rBHJlZG8EdW5kbwRib2xkBml0YWxpYwxsaXN0LW9yZGVyZWQObGlzdC11bm9yZGVyZWQFcXVvdGUNc3RyaWtldGhyb3VnaAl1bmRlcmxpbmUEd3JhcAlmb250LXNpemUEZ3JpZAVpbWFnZQtleHBhbmQtbGVzcwtleHBhbmQtbW9yZQ9mdWxsc2NyZWVuLWV4aXQKZnVsbHNjcmVlbgAAAAAA) format("truetype")
  }

  .rmel-iconfont {
    font-family: rmel-iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .rmel-icon-tab:before {
    content: "\\e76d"
  }

  .rmel-icon-keyboard:before {
    content: "\\ed80"
  }

  .rmel-icon-delete:before {
    content: "\\ed3c"
  }

  .rmel-icon-code-block:before {
    content: "\\e941"
  }

  .rmel-icon-code:before {
    content: "\\ed3b"
  }

  .rmel-icon-visibility:before {
    content: "\\ed44"
  }

  .rmel-icon-view-split:before {
    content: "\\ed45"
  }

  .rmel-icon-link:before {
    content: "\\ed5f"
  }

  .rmel-icon-redo:before {
    content: "\\ed60"
  }

  .rmel-icon-undo:before {
    content: "\\ed61"
  }

  .rmel-icon-bold:before {
    content: "\\ed6f"
  }

  .rmel-icon-italic:before {
    content: "\\ed70"
  }

  .rmel-icon-list-ordered:before {
    content: "\\ed71"
  }

  .rmel-icon-list-unordered:before {
    content: "\\ed72"
  }

  .rmel-icon-quote:before {
    content: "\\ed73"
  }

  .rmel-icon-strikethrough:before {
    content: "\\ed74"
  }

  .rmel-icon-underline:before {
    content: "\\ed75"
  }

  .rmel-icon-wrap:before {
    content: "\\ed77"
  }

  .rmel-icon-font-size:before {
    content: "\\ed78"
  }

  .rmel-icon-grid:before {
    content: "\\ed8c"
  }

  .rmel-icon-image:before {
    content: "\\ed8d"
  }

  .rmel-icon-expand-less:before {
    content: "\\ed9f"
  }

  .rmel-icon-expand-more:before {
    content: "\\eda0"
  }

  .rmel-icon-fullscreen-exit:before {
    content: "\\eda1"
  }

  .rmel-icon-fullscreen:before {
    content: "\\eda2"
  }

  .rc-md-editor {
    padding-bottom: 1px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
            border-radius: 6px;
            background-color: ${Ne(e)};
  }

  .rc-md-editor.full {
    width: 100%;
    height: 100% !important;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000
  }

  .rc-md-editor .editor-container {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 0;
    position: relative;
                background-color: ${Ne(e)};

  }

  .rc-md-editor .editor-container > .section {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -webkit-flex-basis: 1px;
    -ms-flex-preferred-size: 1px;
    flex-basis: 1px;
    padding: 4px;
    
            border: none
  }

  .rc-md-editor .editor-container > .section.in-visible {
    display: none
  }

  .rc-md-editor .editor-container > .section > .section-container {
    padding: 8x 16px 16px
  }
  
  .rc-md-editor .editor-container > .section:last-child {
    border-radius: unset
  }

  .rc-md-editor .editor-container .sec-md {
    min-height: 0;
    min-width: 0
  }

  .rc-md-editor .editor-container .sec-md .input {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border: none;
    resize: none;
    outline: none;
    min-height: 0;
    color: inherit;
    font-size: 14px;
    line-height: 1.7;   
             background-color: ${Ne(e)};

  }

  .rc-md-editor .editor-container .sec-html {
    min-height: 0;
    min-width: 0;         
       background-color: ${Ne(e)};

  }

  .rc-md-editor .editor-container .sec-html .html-wrap {
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto
  }

  .custom-html-style {
    color: inherit
  }

  .custom-html-style h1 {
    font-size: 32px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 32px 0;
    line-height: 1.2
  }

  .custom-html-style h2 {
    font-size: 24px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 24px 0;
    line-height: 1.7
  }

  .custom-html-style h3 {
    font-size: 18px;
    margin: 18px 0;
    padding: 0;
    line-height: 1.7;
    border: none
  }

  .custom-html-style p {
    font-size: 14px;
    line-height: 1.7;
    margin: 8px 0
  }

  .custom-html-style a {
    color: ${Fe(e.palette.text.secondary, 0)}
  }

  .custom-html-style a:hover {
    text-decoration: none
  }

  .custom-html-style strong {
    font-weight: 700
  }

  .custom-html-style ol, .custom-html-style ul {
    font-size: 14px;
    line-height: 28px;
    padding-left: 36px
  }

  .custom-html-style li {
    margin-bottom: 8px;
    line-height: 1.7
  }

  .custom-html-style hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid ${e.palette.divider}
  }

  .custom-html-style pre {
    display: block;
    padding: 20px;
    line-height: 28px;
    word-break: break-word
  }

  .custom-html-style code, .custom-html-style pre {
    background-color: ${Fe(e.palette.background.default, 0.1)};
    font-size: 14px;
    border-radius: 0;
    overflow-x: auto
  }

  .custom-html-style code {
    padding: 3px 0;
    margin: 0;
    word-break: normal
  }

  .custom-html-style code:after, .custom-html-style code:before {
    letter-spacing: 0
  }

  .custom-html-style blockquote {
    position: relative;
    margin: 16px 0;
    padding: 5px 8px 5px 30px;
    background: none repeat scroll 0 0 rgb(39 39 41);
    color: inherit;
    border: none;
    border-left: 10px solid #d6dbdf
  }

  .custom-html-style img, .custom-html-style video {
    max-width: 100%
  }

  .custom-html-style table {
    font-size: 14px;
    line-height: 1.7;
    max-width: 100%;
    overflow: auto;
    border: 1px solid ${e.palette.divider};
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .custom-html-style table td, .custom-html-style table th {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal
  }

  .custom-html-style table tr {
    border: 1px solid ${e.palette.divider}
  }

  .custom-html-style table tr:nth-of-type(2n) {
    background-color: transparent
  }

  .custom-html-style table th {
    text-align: center;
    font-weight: 700;
    border: 1px solid ${e.palette.divider};
    padding: 10px 6px;
    background-color: #f5f7fa;
    word-break: break-word
  }

  .custom-html-style table td {
    border: 1px solid ${e.palette.divider};
    text-align: left;
    padding: 10px 15px;
    word-break: break-word;
    min-width: 60px
  }

  .rc-md-editor .drop-wrap {
    display: block;
    position: absolute;
    left: 0;
    top: 28px;
    z-index: 2;
    min-width: 20px;
    padding: 10px 0;
    text-align: center;
    background-color: ${Fe(e.palette.background.default, 0)};
    border-color: ${e.palette.divider};
    border-style: solid;
    border-width: 1px
  }

  .rc-md-editor .drop-wrap.hidden {
    display: none !important
  }

  .rc-md-editor .rc-md-navigation {
    min-height: 38px;
    padding: 0 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid ${e.palette.divider};
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    
            color: "inherit",
            background-color: ${e.palette.mode === "light", "rgb(39 39 41)"};
        
  }

  .rc-md-editor .rc-md-navigation.in-visible {
    display: none
  }

  .rc-md-editor .rc-md-navigation .navigation-nav {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 14px;
    color: ${Fe(e.palette.text.secondary, 0)};
  }

  .rc-md-editor .rc-md-navigation .button-wrap, .rc-md-editor .rc-md-navigation .navigation-nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row
  }

  .rc-md-editor .rc-md-navigation .button-wrap {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button {
    position: relative;
    min-width: 22px;
    height: 28px;
    margin-left: 3px;
    margin-right: -2px;
    display: inline-block;
    cursor: pointer;
    line-height: 28px;
    text-align: center;
    color: ${e.palette.text.secondary};
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:hover {
    color: ${Fe(e.palette.text.secondary, 0.2)};
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button.disabled {
    color: ${Fe(e.palette.text.disabled, 0)};
    cursor: not-allowed
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:first-of-type {
    margin-left: 0
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:last-child {
    margin-right: 0
  }

  .rc-md-editor .rc-md-navigation .button-wrap .rmel-iconfont {
    font-size: 18px
  }

  .rc-md-editor .rc-md-navigation li, .rc-md-editor .rc-md-navigation ul {
    list-style: none;
    margin: 0;
    padding: 0
  }

  .rc-md-editor .rc-md-navigation .h1, .rc-md-editor .rc-md-navigation .h2, .rc-md-editor .rc-md-navigation .h3, .rc-md-editor .rc-md-navigation .h4, .rc-md-editor .rc-md-navigation .h5, .rc-md-editor .rc-md-navigation .h6, .rc-md-editor .rc-md-navigation h1, .rc-md-editor .rc-md-navigation h2, .rc-md-editor .rc-md-navigation h3, .rc-md-editor .rc-md-navigation h4, .rc-md-editor .rc-md-navigation h5, .rc-md-editor .rc-md-navigation h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.1
  }

  .rc-md-editor .rc-md-navigation h1 {
    font-size: 34px
  }

  .rc-md-editor .rc-md-navigation h2 {
    font-size: 30px
  }

  .rc-md-editor .rc-md-navigation h3 {
    font-size: 24px
  }

  .rc-md-editor .rc-md-navigation h4 {
    font-size: 18px
  }

  .rc-md-editor .rc-md-navigation h5 {
    font-size: 14px
  }

  .rc-md-editor .rc-md-navigation h6 {
    font-size: 12px
  }

  .rc-md-editor .tool-bar {
    position: absolute;
    z-index: 1;
    right: 8px;
    top: 8px
  }

  .rc-md-editor .tool-bar .button {
    min-width: 24px;
    height: 28px;
    margin-right: 5px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    color: #999
  }

  .rc-md-editor .tool-bar .button:hover {
    color: inherit
  }

  .rc-md-editor .rc-md-divider {
    display: block;
    width: 1px;
    background-color: ${Fe(e.palette.background.paper, 0)}
  }

  .rc-md-editor .table-list.wrap {
    position: relative;
    margin: 0 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rc-md-editor .table-list.wrap .list-item {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${Fe(e.palette.background.paper, 0.05)};
    border-radius: 4px
  }

  .rc-md-editor .table-list.wrap .list-item.active {
    background: ${bt(e.palette.background.paper, 0.2)}
  }

  .rc-md-editor .tab-map-list .list-item {
    width: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rc-md-editor .tab-map-list .list-item:hover {
    background: ${Fe(e.palette.background.default, 0.1)}
  }

  .rc-md-editor .tab-map-list .list-item.active {
    font-weight: 700
  }

  .rc-md-editor .header-list .list-item {
    width: 100px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 8px 0
  }

  .rc-md-editor .header-list .list-item:hover {
    background: ${Fe(e.palette.background.default, 0.1)}
  }

`);
$e.addMethod($e.array, "uniqueInArray", function(e = (r) => r, t) {
  return this.test("uniqueInArray", t, (r) => !r || r.length === new Set(r.map(e)).size);
});
function Pa(e, t, r) {
  const o = {};
  return Object.entries(t).forEach(([i, a]) => {
    o[i] = cn({
      property: a,
      customFieldValidator: r,
      name: i,
      entityId: e
    });
  }), $e.object().shape(o);
}
function cn(e) {
  const t = e.property;
  if (je(t))
    throw console.error("Error in property", e), Error("Trying to create a yup mapping from a property builder. Please use resolved properties only");
  if (t.dataType === "string")
    return dA(e);
  if (t.dataType === "number")
    return AA(e);
  if (t.dataType === "boolean")
    return gA(e);
  if (t.dataType === "map")
    return cA(e);
  if (t.dataType === "array")
    return mA(e);
  if (t.dataType === "date")
    return fA(e);
  if (t.dataType === "geopoint")
    return uA(e);
  if (t.dataType === "reference")
    return hA(e);
  throw console.error("Unsupported data type in yup mapping", t), Error("Unsupported data type in yup mapping");
}
function cA({
  property: e,
  entityId: t,
  customFieldValidator: r,
  name: o
}) {
  const i = {};
  return e.validation, e.properties && Object.entries(e.properties).forEach(([a, s]) => {
    i[a] = cn({
      property: s,
      parentProperty: e,
      customFieldValidator: r,
      name: `${o}[${a}]`,
      entityId: t
    });
  }), $e.object().shape(i);
}
function dA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  let a = $e.string();
  const s = e.validation;
  if (e.enumValues) {
    s?.required && (a = a.required(s?.requiredMessage ? s.requiredMessage : "Required"));
    const l = jn(e.enumValues);
    a = a.oneOf(
      (s?.required ? l : [...l, null]).map((c) => c?.id ?? null)
    ).nullable(!0);
  }
  if (s) {
    if (a = s.required ? a.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : a.notRequired().nullable(!0), s.unique && r && o && (a = a.test(
      "unique",
      "This value already exists and should be unique",
      (l, c) => r({
        name: o,
        property: e,
        parentProperty: t,
        value: l,
        entityId: i
      })
    )), (s.min || s.min === 0) && (a = a.min(s.min, `${e.name} must be min ${s.min} characters long`)), (s.max || s.max === 0) && (a = a.max(s.max, `${e.name} must be max ${s.max} characters long`)), s.matches) {
      const l = typeof s.matches == "string" ? Dd(s.matches) : s.matches;
      l && (a = a.matches(l, s.matchesMessage ? { message: s.matchesMessage } : void 0));
    }
    s.trim && (a = a.trim()), s.lowercase && (a = a.lowercase()), s.uppercase && (a = a.uppercase()), e.email && (a = a.email(`${e.name} must be an email`)), e.url && (a = a.url(`${e.name} must be a url`));
  } else
    a = a.notRequired().nullable(!0);
  return a;
}
function AA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  const a = e.validation;
  let s = $e.number().typeError("Must be a number");
  return a ? (s = a.required ? s.required(a.requiredMessage ? a.requiredMessage : "Required").nullable(!0) : s.notRequired().nullable(!0), a.unique && r && o && (s = s.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: i
    })
  )), (a.min || a.min === 0) && (s = s.min(a.min, `${e.name} must be higher or equal to ${a.min}`)), (a.max || a.max === 0) && (s = s.max(a.max, `${e.name} must be lower or equal to ${a.max}`)), (a.lessThan || a.lessThan === 0) && (s = s.lessThan(a.lessThan, `${e.name} must be higher than ${a.lessThan}`)), (a.moreThan || a.moreThan === 0) && (s = s.moreThan(a.moreThan, `${e.name} must be lower than ${a.moreThan}`)), a.positive && (s = s.positive(`${e.name} must be positive`)), a.negative && (s = s.negative(`${e.name} must be negative`)), a.integer && (s = s.integer(`${e.name} must be an integer`))) : s = s.notRequired().nullable(!0), s;
}
function uA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  let a = $e.object();
  const s = e.validation;
  return s?.unique && r && o && (a = a.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: i
    })
  )), s?.required ? a = a.required(s.requiredMessage).nullable(!0) : a = a.notRequired().nullable(!0), a;
}
function fA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  if (e.autoValue)
    return $e.object().nullable();
  let a = $e.date();
  const s = e.validation;
  return s ? (a = s.required ? a.required(s?.requiredMessage ? s.requiredMessage : "Required") : a.notRequired(), s.unique && r && o && (a = a.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: i
    })
  )), s.min && (a = a.min(s.min, `${e.name} must be after ${s.min}`)), s.max && (a = a.max(s.max, `${e.name} must be before ${s.min}`))) : a = a.notRequired(), a.transform((l) => l instanceof Date ? l : null).nullable();
}
function hA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  let a = $e.object();
  const s = e.validation;
  return s ? (a = s.required ? a.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : a.notRequired().nullable(!0), s.unique && r && o && (a = a.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: i
    })
  ))) : a = a.notRequired().nullable(!0), a;
}
function gA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  let a = $e.boolean();
  const s = e.validation;
  return s ? (a = s.required ? a.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : a.notRequired().nullable(!0), s.unique && r && o && (a = a.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: o,
      property: e,
      parentProperty: t,
      value: l,
      entityId: i
    })
  ))) : a = a.notRequired().nullable(!0), a;
}
function pA(e) {
  return e.validation?.uniqueInArray ? !0 : e.dataType === "map" && e.properties ? Object.entries(e.properties).filter(([t, r]) => r.validation?.uniqueInArray) : !1;
}
function mA({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: o,
  entityId: i
}) {
  let a = $e.array();
  if (e.of)
    if (Array.isArray(e.of)) {
      const l = e.of.map((c, d) => ({
        [`${o}[${d}]`]: cn({
          property: c,
          parentProperty: e,
          entityId: i
        })
      })).reduce((c, d) => ({ ...c, ...d }), {});
      return $e.array().of(
        $e.mixed().test(
          "Dynamic object validation",
          "Dynamic object validation error",
          (c, d) => dt(l, d.path).validate(c)
        )
      );
    } else {
      a = a.of(cn({
        property: e.of,
        parentProperty: e,
        entityId: i
      }));
      const l = pA(e.of);
      l && (typeof l == "boolean" ? a = a.uniqueInArray((c) => c, `${e.name} should have unique values within the array`) : Array.isArray(l) && l.forEach(
        ([c, d]) => {
          a = a.uniqueInArray((A) => A && A[c], `${e.name} → ${d.name ?? c}: should have unique values within the array`);
        }
      ));
    }
  const s = e.validation;
  return s ? (a = s.required ? a.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : a.notRequired().nullable(!0), (s.min || s.min === 0) && (a = a.min(s.min, `${e.name} should be min ${s.min} entries long`)), s.max && (a = a.max(s.max, `${e.name} should be max ${s.max} entries long`))) : a = a.notRequired().nullable(!0), a;
}
const bA = ({ containerRef: e }) => {
  const { isSubmitting: t, isValidating: r, errors: o } = Oi();
  return Y(() => {
    const i = Object.keys(o);
    if (i.length > 0 && t && !r) {
      const a = e?.current?.querySelector(
        `#form_field_${i[0]}`
      );
      if (a && e?.current) {
        const s = Ta(e.current);
        if (s) {
          const c = a.getBoundingClientRect().top;
          s.scrollTo({
            top: s.scrollTop + c - 64,
            behavior: "smooth"
          });
        }
        const l = a.querySelector("input");
        l && l.focus();
      }
    }
  }, [t, r, o, e]), null;
}, vA = (e) => {
  const t = e && e.scrollHeight > e.clientHeight, r = e ? window.getComputedStyle(e).overflowY : null, o = r && r.indexOf("hidden") !== -1;
  return t && !o;
}, Ta = (e) => !e || e === document.body ? document.body : vA(e) ? e : Ta(e.parentNode), Ie = ({
  collection: e,
  path: t,
  entityId: r,
  values: o,
  previousValues: i,
  userConfigPersistence: a,
  fields: s
}) => {
  const l = a?.getCollectionConfig(t), c = dt(l, "properties"), d = Tn(e.properties), A = o ?? d, u = i ?? o ?? d, h = Object.entries(e.properties).map(([p, m]) => {
    const w = A ? wr(A, p) : void 0;
    return {
      [p]: We({
        propertyKey: p,
        propertyOrBuilder: m,
        values: A,
        previousValues: u,
        path: t,
        propertyValue: w,
        entityId: r,
        fields: s
      })
    };
  }).filter((p) => p !== null).reduce((p, m) => ({ ...p, ...m }), {}), g = it(h, c), f = Object.entries(g).filter(([p, m]) => !!m?.dataType).map(([p, m]) => ({ [p]: m })).reduce((p, m) => ({ ...p, ...m }), {});
  return {
    ...e,
    properties: f,
    originalCollection: e
  };
};
function We({
  propertyOrBuilder: e,
  propertyValue: t,
  fromBuilder: r = !1,
  ...o
}) {
  if (typeof e == "object" && "resolved" in e)
    return e;
  let i = null;
  if (e)
    if (je(e)) {
      const a = o.path;
      if (!a)
        throw Error("Trying to resolve a property builder without specifying the entity path");
      const s = e({
        ...o,
        path: a,
        propertyValue: t,
        values: o.values ?? {},
        previousValues: o.previousValues ?? o.values ?? {}
      });
      if (!s)
        return console.debug("Property builder not returning `Property` so it is not rendered", a, o.entityId, e), null;
      i = We({
        ...o,
        propertyValue: t,
        propertyOrBuilder: s,
        fromBuilder: !0
      });
    } else {
      const a = e;
      if (a.dataType === "map" && a.properties) {
        const s = Qa({
          ...o,
          properties: a.properties,
          propertyValue: t
        });
        i = {
          ...a,
          resolved: !0,
          fromBuilder: r,
          properties: s
        };
      } else
        a.dataType === "array" ? i = kt({
          property: a,
          propertyValue: t,
          fromBuilder: r,
          ...o
        }) : (a.dataType === "string" || a.dataType === "number") && a.enumValues && (i = Ma(a, r));
    }
  else
    return null;
  if (i || (i = {
    ...e,
    resolved: !0,
    fromBuilder: r
  }), i.fieldConfig) {
    const a = o.fields;
    if (!a)
      throw Error(`Trying to resolve a property with key ${i.fieldConfig} that inherits from a custom field but no custom fields were provided. Use the property 'fields' in your top level component to provide them`);
    const s = a[i.fieldConfig];
    if (!s)
      throw Error(`Trying to resolve a property that inherits from a custom field but no custom field with id ${i.fieldConfig} was found. Check the \`fields\` in your top level component`);
    if (s.defaultProperty) {
      const l = We({
        propertyOrBuilder: s.defaultProperty,
        propertyValue: t,
        ...o
      });
      l && (i = it(l, i));
    }
    s.Field && (i.Field = s.Field);
  }
  return i ? {
    ...i,
    resolved: !0
  } : null;
}
function kt({
  propertyKey: e,
  property: t,
  propertyValue: r,
  ...o
}) {
  if (t.of) {
    if (Array.isArray(t.of))
      return {
        ...t,
        resolved: !0,
        fromBuilder: o.fromBuilder,
        resolvedProperties: t.of.map((i, a) => We({
          propertyKey: `${e}.${a}`,
          propertyOrBuilder: i,
          propertyValue: Array.isArray(r) ? r[a] : void 0,
          ...o,
          index: a
        }))
      };
    {
      const i = t.of, a = Array.isArray(r) ? r.map((l, c) => We({
        propertyKey: `${e}.${c}`,
        propertyOrBuilder: i,
        propertyValue: l,
        ...o,
        index: c
      })).filter((l) => !!l) : [], s = We({
        propertyKey: `${e}`,
        propertyOrBuilder: i,
        propertyValue: void 0,
        ...o
      });
      if (!s)
        throw Error("When using a property builder as the 'of' prop of an ArrayProperty, you must return a valid child property");
      return {
        ...t,
        resolved: !0,
        fromBuilder: o.fromBuilder,
        of: s,
        resolvedProperties: a
      };
    }
  } else if (t.oneOf) {
    const i = t.oneOf?.typeField ?? sn, a = Array.isArray(r) ? r.map((l, c) => {
      const d = l && l[i], A = t.oneOf?.properties[d];
      return !d || !A ? null : We({
        propertyKey: `${e}.${c}`,
        propertyOrBuilder: A,
        propertyValue: r,
        ...o
      });
    }).filter((l) => !!l) : [], s = Qa({
      properties: t.oneOf.properties,
      propertyValue: void 0,
      ...o
    });
    return {
      ...t,
      resolved: !0,
      oneOf: {
        ...t.oneOf,
        properties: s
      },
      fromBuilder: o.fromBuilder,
      resolvedProperties: a
    };
  } else {
    if (t.Field)
      return {
        ...t,
        resolved: !0,
        fromBuilder: o.fromBuilder
      };
    throw Error("The array property needs to declare an 'of' or a 'oneOf' property, or provide a custom `Field`");
  }
}
function Qa({
  properties: e,
  propertyValue: t,
  ...r
}) {
  return Object.entries(e).map(([o, i]) => ({
    [o]: We({
      propertyKey: o,
      propertyOrBuilder: i,
      propertyValue: t && typeof t == "object" ? dt(t, o) : void 0,
      ...r
    })
  })).filter((o) => o !== null).reduce((o, i) => ({ ...o, ...i }), {});
}
function Ma(e, t) {
  return typeof e.enumValues == "object" ? {
    ...e,
    resolved: !0,
    enumValues: _n(e.enumValues)?.filter((r) => r && r.id && r.label) ?? [],
    fromBuilder: t ?? !1
  } : e;
}
function _n(e) {
  return typeof e == "object" ? Object.entries(e).map(([t, r]) => typeof r == "string" ? {
    id: t,
    label: r
  } : r) : Array.isArray(e) ? e : void 0;
}
const si = "CustomIdField", Sr = {
  input: `${si}-input`,
  select: `${si}-select`
}, xA = tt(we)(({ theme: e }) => ({
  marginBottom: "16px",
  [`& .${Sr.input}`]: {
    minHeight: "64px"
  },
  [`& .${Sr.select}`]: {
    paddingTop: e.spacing(1 / 2)
  }
}));
function wA({
  customId: e,
  entityId: t,
  status: r,
  onChange: o,
  error: i,
  entity: a
}) {
  const s = r === "existing" || !e, l = r !== "existing" && !e, c = le(() => {
    if (!(!e || typeof e == "boolean" || e === "optional"))
      return _n(e);
  }, [e]), d = Ct(), { copy: A } = Lc({
    onSuccess: (f) => d.open({
      type: "success",
      message: `Copied ${f}`
    })
  }), u = ie(), h = {
    sx: (f) => ({
      minHeight: "64px",
      borderRadius: `${f.shape.borderRadius}px`
    }),
    disableUnderline: !0,
    endAdornment: a ? /* @__PURE__ */ C(Cs, { position: "end", children: [
      /* @__PURE__ */ n(
        oe,
        {
          onClick: (f) => A(a.id),
          "aria-label": "copy-id",
          size: "large",
          children: /* @__PURE__ */ n(me, { title: "Copy", children: /* @__PURE__ */ n(
            "svg",
            {
              className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
              fill: "currentColor",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ n(
                "path",
                {
                  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                }
              )
            }
          ) })
        }
      ),
      u?.entityLinkBuilder && /* @__PURE__ */ n(
        "a",
        {
          href: u.entityLinkBuilder({ entity: a }),
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ n(
            oe,
            {
              onClick: (f) => f.stopPropagation(),
              "aria-label": "go-to-datasource",
              size: "large",
              children: /* @__PURE__ */ n(me, { title: "Open in the console", children: /* @__PURE__ */ n(un, { fontSize: "small" }) })
            }
          )
        }
      )
    ] }) : void 0
  }, g = {
    label: l ? "ID is set automatically" : "ID",
    disabled: s,
    name: "id",
    type: null,
    value: (a && r === "existing" ? a.id : t) ?? "",
    variant: "filled",
    sx: (f) => ({
      minHeight: "64px",
      borderRadius: `${f.shape.borderRadius}px`
    })
  };
  return /* @__PURE__ */ Yl(
    xA,
    {
      fullWidth: !0,
      error: i,
      ...g,
      key: "custom-id-field"
    },
    c && /* @__PURE__ */ C(q, { children: [
      /* @__PURE__ */ n(wt, { id: "id-label", children: g.label }),
      /* @__PURE__ */ n(
        Ke,
        {
          labelId: "id-label",
          fullWidth: !0,
          className: Sr.select,
          disableUnderline: !0,
          error: i,
          ...g,
          onChange: (f) => o(f.target.value),
          children: c.map((f) => /* @__PURE__ */ n(
            Te,
            {
              value: f.id,
              children: `${f.id} - ${f.label}`
            },
            `custom-id-item-${f.id}`
          ))
        }
      )
    ] }),
    !c && /* @__PURE__ */ n(
      ot,
      {
        ...g,
        error: i,
        InputProps: h,
        helperText: e === "optional" ? "Autogenerated ID, it can be manually changed" : r === "new" || r === "copy" ? "ID of the new document" : "ID of the document",
        onChange: (f) => {
          let p = f.target.value;
          return p && (p = p.trim()), o(p.length ? p : void 0);
        }
      }
    ),
    /* @__PURE__ */ n(
      bl,
      {
        name: "id",
        component: "div",
        children: (f) => "You need to specify an ID"
      }
    )
  );
}
const yA = R.memo(
  EA,
  (e, t) => e.status === t.status && e.path === t.path && xe(e.entity?.values, t.entity?.values)
);
function EA({
  status: e,
  path: t,
  collection: r,
  entity: o,
  onEntitySaveRequested: i,
  onDiscard: a,
  onModified: s,
  onValuesChanged: l,
  onIdChange: c,
  onFormContextChange: d,
  hideId: A,
  autoSave: u,
  onIdUpdateError: h
}) {
  const g = ie(), f = Ue(), p = g.plugins, m = le(() => Ie({
    collection: r,
    path: t,
    values: o?.values,
    fields: g.fields
  }), [o?.values, t]), w = (e === "new" || e === "copy") && !!m.customId && m.customId !== "optional", b = le(() => e === "new" || e === "copy" ? w ? void 0 : f.generateEntityId(t) : o?.id, []), E = ce(!1), v = le(() => {
    const z = m.properties;
    if ((e === "existing" || e === "copy") && o)
      return o.values ?? Tn(z);
    if (e === "new")
      return Tn(z);
    throw console.error({
      status: e,
      entity: o
    }), new Error("Form has not been initialised with the correct parameters");
  }, [e, m, o]), [x, I] = R.useState(b), [k, F] = R.useState(!1), [S, D] = R.useState(), P = ce(o?.values ?? v), T = P.current, [O, ne] = Q(T), L = (z) => {
    ne(z), l && l(z), u && z && !xe(z, T) && $(z);
  };
  Y(() => {
    x && c && c(x);
  }, [x, c]);
  const U = Ie({
    collection: r,
    path: t,
    entityId: x,
    values: O,
    previousValues: T,
    fields: g.fields
  }), _ = U.callbacks?.onIdUpdate;
  Y(() => {
    if (_ && O && (e === "new" || e === "copy"))
      try {
        const z = _({
          collection: U,
          path: t,
          entityId: x,
          values: O,
          context: g
        });
        I(z);
      } catch (z) {
        h && h(z), console.error(z);
      }
  }, [x, O, e]);
  const ee = le(() => T && e === "existing" ? Object.entries(U.properties).map(([z, Z]) => {
    if (Hn(Z))
      return {};
    const J = T[z], M = v[z];
    return xe(J, M) ? {} : { [z]: M };
  }).reduce((z, Z) => ({ ...z, ...Z }), {}) : {}, [v, U.properties, T, e]), $ = (z) => i({
    collection: U,
    path: t,
    entityId: x,
    values: z,
    previousValues: o?.values,
    closeAfterSave: E.current,
    autoSave: u ?? !1
  }).then((Z) => {
    const J = e === "new" ? "new_entity_saved" : e === "copy" ? "entity_copied" : e === "existing" ? "entity_edited" : "unmapped_event";
    g.onAnalyticsEvent?.(J, { path: t }), P.current = z;
  }).catch((Z) => {
    console.error(Z), D(Z);
  }).finally(() => {
    E.current = !1;
  }), G = (z, Z) => {
    if (w && !x) {
      console.error("Missing custom Id"), F(!0), Z.setSubmitting(!1);
      return;
    }
    if (D(void 0), F(!1), e === "existing") {
      if (!o?.id)
        throw Error("Form misconfiguration when saving, no id for existing entity");
    } else if (e === "new" || e === "copy") {
      if (U.customId && U.customId !== "optional" && !x)
        throw Error("Form misconfiguration when saving, entityId should be set");
    } else
      throw Error("New FormType added, check EntityForm");
    $(z)?.then((J) => {
      Z.resetForm({
        values: z,
        submitCount: 0,
        touched: {}
      });
    }).finally(() => {
      Z.setSubmitting(!1);
    });
  }, H = y(
    ({
      name: z,
      value: Z,
      property: J
    }) => f.checkUniqueField(t, z, Z, J, x),
    [f, t, x]
  ), V = le(
    () => x ? Pa(
      x,
      U.properties,
      H
    ) : void 0,
    [x, U.properties, H]
  );
  return /* @__PURE__ */ n(
    $i,
    {
      initialValues: v,
      onSubmit: G,
      validationSchema: V,
      validate: (z) => console.debug("Validating", z),
      onReset: () => a && a(),
      children: (z) => {
        const Z = [], J = {
          setFieldValue: z.setFieldValue,
          values: z.values,
          collection: Ie({
            collection: U,
            path: t,
            fields: g.fields
          }),
          entityId: x,
          path: t,
          save: $
        };
        if (Y(() => {
          d && d(J);
        }, [d, J]), p && U) {
          const M = {
            entityId: x,
            path: t,
            status: e,
            collection: r,
            context: g,
            currentEntityId: x,
            formContext: J
          };
          Z.push(...p.map((j, K) => j.form?.Actions ? /* @__PURE__ */ n(
            j.form.Actions,
            {
              ...M
            },
            `actions_${j.name}`
          ) : null).filter(Boolean));
        }
        return /* @__PURE__ */ n(q, { children: /* @__PURE__ */ C(
          B,
          {
            sx: (M) => ({
              paddingLeft: M.spacing(4),
              paddingRight: M.spacing(4),
              paddingTop: M.spacing(3),
              paddingBottom: M.spacing(4),
              marginBottom: M.spacing(2),
              [M.breakpoints.down("lg")]: {
                paddingLeft: M.spacing(2),
                paddingRight: M.spacing(2),
                paddingTop: M.spacing(2),
                paddingBottom: M.spacing(3)
              },
              [M.breakpoints.down("md")]: {
                padding: M.spacing(2)
              }
            }),
            children: [
              Z.length > 0 && /* @__PURE__ */ n(
                B,
                {
                  sx: (M) => ({
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    background: M.palette.mode === "light" ? "rgba(255,255,255,0.6)" : an(M.palette.background.paper, 0.1),
                    backdropFilter: "blur(8px)",
                    borderBottom: `1px solid ${M.palette.divider}`,
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    textAlign: "right",
                    zIndex: 2,
                    "& > *:not(:last-child)": {
                      [M.breakpoints.down("md")]: {
                        mr: M.spacing(1)
                      },
                      mr: M.spacing(2)
                    }
                  }),
                  children: Z
                }
              ),
              /* @__PURE__ */ n(
                B,
                {
                  sx: (M) => ({
                    width: "100%",
                    marginTop: M.spacing(4 + (Z ? 4 : 0)),
                    paddingY: 2,
                    display: "flex",
                    alignItems: "center",
                    [M.breakpoints.down("lg")]: {
                      marginTop: M.spacing(3 + (Z ? 4 : 0))
                    },
                    [M.breakpoints.down("md")]: {
                      marginTop: M.spacing(2 + (Z ? 4 : 0))
                    }
                  }),
                  children: /* @__PURE__ */ n(
                    X,
                    {
                      sx: {
                        marginTop: 4,
                        marginBottom: U.hideIdFromForm ? 0 : 4,
                        flexGrow: 1
                      },
                      variant: "h4",
                      children: U.singularName ?? U.name + " entry"
                    }
                  )
                }
              ),
              !A && /* @__PURE__ */ n(
                wA,
                {
                  customId: U.customId,
                  entityId: x,
                  status: e,
                  onChange: I,
                  error: k,
                  entity: o
                }
              ),
              x && /* @__PURE__ */ n(
                CA,
                {
                  ...z,
                  initialValues: T,
                  onModified: s,
                  onValuesChanged: L,
                  underlyingChanges: ee,
                  entity: o,
                  collection: U,
                  formContext: J,
                  status: e,
                  savingError: S,
                  closeAfterSaveRef: E,
                  autoSave: u
                }
              )
            ]
          }
        ) });
      }
    }
  );
}
function CA(e) {
  const {
    values: t,
    onModified: r,
    onValuesChanged: o,
    underlyingChanges: i,
    formContext: a,
    entity: s,
    touched: l,
    setFieldValue: c,
    collection: d,
    isSubmitting: A,
    status: u,
    handleSubmit: h,
    savingError: g,
    dirty: f,
    closeAfterSaveRef: p,
    autoSave: m
  } = e, w = f;
  Y(() => {
    r && r(w), o && o(t);
  }, [w, t]), Y(() => {
    !m && i && s && Object.entries(i).forEach(([x, I]) => {
      const k = t[x];
      !xe(I, k) && !l[x] && (console.debug("Updated value from the datasource:", x, I), c(x, I !== void 0 ? I : null));
    });
  }, [m, i, s, t, l, c]);
  const b = /* @__PURE__ */ n(se, { container: !0, spacing: 6, children: Object.entries(d.properties).map(([x, I]) => {
    const k = !!i && Object.keys(i).includes(x) && !!l[x], F = !m && A || hn(I) || !!I.disabled;
    if (Hn(I))
      return null;
    const D = {
      propertyKey: x,
      disabled: F,
      property: I,
      includeDescription: !0,
      underlyingValueHasChanged: k && !m,
      context: a,
      tableMode: !1,
      partOfArray: !1,
      autoFocus: !1
    };
    return /* @__PURE__ */ n(
      se,
      {
        item: !0,
        xs: 12,
        id: `form_field_${x}`,
        children: /* @__PURE__ */ n(Ut, { ...D })
      },
      `field_${d.name}_${x}`
    );
  }).filter(Boolean) }), E = A || !w && u === "existing", v = R.createRef();
  return /* @__PURE__ */ C(
    Gi,
    {
      onSubmit: h,
      noValidate: !0,
      children: [
        /* @__PURE__ */ C(
          B,
          {
            sx: { mt: 4 },
            ref: v,
            children: [
              b,
              /* @__PURE__ */ n(bA, { containerRef: v })
            ]
          }
        ),
        /* @__PURE__ */ n(B, { sx: { height: 56 } }),
        !m && /* @__PURE__ */ C(It, { position: "absolute", children: [
          g && /* @__PURE__ */ n(B, { textAlign: "right", children: /* @__PURE__ */ n(X, { color: "error", children: g.message }) }),
          /* @__PURE__ */ n(
            en,
            {
              variant: "text",
              color: "primary",
              disabled: E,
              type: "reset",
              children: u === "existing" ? "Discard" : "Clear"
            }
          ),
          /* @__PURE__ */ C(
            en,
            {
              variant: "text",
              color: "primary",
              type: "submit",
              disabled: E,
              onClick: () => {
                p.current = !1;
              },
              children: [
                u === "existing" && "Save",
                u === "copy" && "Create copy",
                u === "new" && "Create"
              ]
            }
          ),
          /* @__PURE__ */ C(
            en,
            {
              variant: "contained",
              color: "primary",
              type: "submit",
              disabled: E,
              onClick: () => {
                p.current = !0;
              },
              children: [
                u === "existing" && "Save and close",
                u === "copy" && "Create copy and close",
                u === "new" && "Create and close"
              ]
            }
          )
        ] })
      ]
    }
  );
}
const BA = {
  text_field: {
    name: "Text field",
    description: "Simple short text",
    dataType: "string",
    Icon: rl,
    color: "#2d7ff9",
    Field: Kt
  },
  multiline: {
    name: "Multiline",
    description: "Text with multiple lines",
    dataType: "string",
    Icon: ol,
    color: "#2d7ff9",
    Field: Kt
  },
  markdown: {
    name: "Markdown",
    description: "Text with advanced markdown syntax",
    dataType: "string",
    Icon: gl,
    color: "#2d7ff9",
    Field: sA
  },
  url: {
    name: "Url",
    description: "Text with URL validation",
    dataType: "string",
    Icon: ul,
    color: "#154fb3",
    Field: Kt
  },
  email: {
    name: "Email",
    description: "Text with email validation",
    dataType: "string",
    Icon: Qi,
    color: "#154fb3",
    Field: Kt
  },
  select: {
    name: "Select/enum",
    description: "Select one text value from within an enumeration",
    dataType: "string",
    Icon: al,
    color: "#4223c9",
    Field: ei
  },
  multi_select: {
    name: "Multi select",
    description: "Select multiple text values from within an enumeration",
    dataType: "array",
    Icon: Al,
    color: "#4223c9",
    Field: ti
  },
  number_input: {
    name: "Number input",
    description: "Simple number field with validation",
    dataType: "number",
    Icon: hl,
    color: "#bec920",
    Field: Kt
  },
  number_select: {
    name: "Number select",
    description: "Select a number value from within an enumeration",
    dataType: "number",
    Icon: So,
    color: "#bec920",
    Field: ei
  },
  multi_number_select: {
    name: "Multiple number select",
    description: "Select multiple number values from within an enumeration",
    dataType: "array",
    Icon: So,
    color: "#bec920",
    Field: ti
  },
  file_upload: {
    name: "File upload",
    description: "Input for uploading single files",
    dataType: "string",
    Icon: ll,
    color: "#f92d9a",
    Field: ii
  },
  multi_file_upload: {
    name: "Multiple file upload",
    description: "Input for uploading multiple files",
    dataType: "array",
    Icon: cl,
    color: "#f92d9a",
    Field: ii
  },
  reference: {
    name: "Reference",
    description: "The value refers to a different collection",
    dataType: "reference",
    Icon: Ti,
    color: "#ff0042",
    Field: qd
  },
  multi_references: {
    name: "Multiple references",
    description: "Multiple values that refer to a different collection",
    dataType: "array",
    Icon: il,
    color: "#ff0042",
    Field: Od
  },
  switch: {
    name: "Switch",
    description: "True or false field (or yes or no, 0 or 1...)",
    dataType: "boolean",
    Icon: fl,
    color: "#20d9d2",
    Field: Hd
  },
  date_time: {
    name: "Date/time",
    description: "A date time select field",
    dataType: "date",
    Icon: sl,
    color: "#8b46ff",
    Field: _d
  },
  group: {
    name: "Group",
    description: "Group of multiple fields",
    dataType: "map",
    Icon: Fo,
    color: "#ff9408",
    Field: Xd
  },
  key_value: {
    name: "Key-value",
    description: "Flexible field that allows the user to add multiple key-value pairs",
    dataType: "map",
    Icon: Fo,
    color: "#ff9408",
    Field: eA
  },
  repeat: {
    name: "Repeat/list",
    description: "A field that gets repeated multiple times (e.g. multiple text fields)",
    dataType: "array",
    Icon: Io,
    color: "#ff9408",
    Field: rA
  },
  custom_array: {
    name: "Custom array",
    description: "A field that saved its value as an array of custom objects",
    dataType: "array",
    Icon: Io,
    color: "#ff9408",
    Field: Md
  },
  block: {
    name: "Block",
    description: "A complex field that allows the user to compose different fields together, with a key->value format",
    dataType: "array",
    Icon: dl,
    color: "#ff9408",
    Field: oA
  }
};
function ho(e) {
  const t = Oa(e);
  return t ? BA[t] : void 0;
}
function Oa(e) {
  if (e.dataType === "string")
    return e.multiline ? "multiline" : e.markdown ? "markdown" : e.storage ? "file_upload" : e.url ? "url" : e.email ? "email" : e.enumValues ? "select" : "text_field";
  if (e.dataType === "number")
    return e.enumValues ? "number_select" : "number_input";
  if (e.dataType === "map") {
    if (e.keyValue)
      return "key_value";
    if (e.properties)
      return "group";
  } else if (e.dataType === "array") {
    const t = e.of, r = e.oneOf;
    return Array.isArray(t) ? "custom_array" : je(t) ? "repeat" : t?.dataType === "string" && t.enumValues ? "multi_select" : t?.dataType === "number" && t.enumValues ? "multi_number_select" : t?.dataType === "string" && t.storage ? "multi_file_upload" : t?.dataType === "reference" ? "multi_references" : r ? "block" : "repeat";
  } else {
    if (e.dataType === "boolean")
      return "switch";
    if (e.dataType === "date")
      return "date_time";
    if (e.dataType === "reference")
      return "reference";
  }
  console.error("Unsupported field config mapping", e);
}
function kA(e, t) {
  const r = We({
    propertyKey: "ignore",
    // TODO
    propertyOrBuilder: e,
    fields: t
  });
  return r ? r.dataType === "reference" ? !0 : r.dataType === "array" ? Array.isArray(r.of) ? !1 : r.of?.dataType === "reference" : !1 : null;
}
function IA(e = "inherit", t = "inherit") {
  return /* @__PURE__ */ n(el, { color: e, fontSize: t });
}
function $a(e, t, r) {
  const o = e?.Icon ?? nl;
  return /* @__PURE__ */ n(o, { color: t, fontSize: r });
}
function Re(e, t = "inherit", r = "inherit") {
  if (je(e))
    return /* @__PURE__ */ n(tl, { color: t, fontSize: r });
  {
    const o = ho(e);
    return $a(o, t, r);
  }
}
function Ng(e, t = "inherit") {
  return /* @__PURE__ */ n(B, { sx: {
    background: e?.color ?? "#888",
    height: "32px",
    width: "32px",
    padding: 0.5,
    borderRadius: "50%",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    color: "white"
  }, children: $a(e, t, "medium") });
}
function jg(e) {
  return je(e) ? "#888" : ho(e)?.color ?? "#666";
}
function Ga(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const r = t.split("."), o = e[r[0]];
      if (typeof o == "object" && o.dataType === "map" && o.properties)
        return Ga(o.properties, r.slice(1).join("."));
    }
  }
}
function La(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const r = t.split("."), o = e[r[0]];
      if (o.dataType === "map" && o.properties)
        return La(o.properties, r.slice(1).join("."));
    }
  }
}
function Hg(e) {
  return e.replace(/\.([^.]*)/g, "[$1]");
}
const Jn = {
  read: !0,
  edit: !0,
  create: !0,
  delete: !0
};
function qn(e, t, r, o) {
  const i = e.permissions;
  if (i === void 0)
    return Jn;
  if (typeof i == "object")
    return i;
  if (typeof i == "function")
    return i({
      entity: o,
      user: t.user,
      authController: t,
      collection: e,
      pathSegments: r
    });
  throw console.error("Permissions:", i), Error("New type of permission added and not mapped");
}
function Ya(e, t, r, o) {
  return qn(e, t, r, o).edit ?? Jn.edit;
}
function go(e, t, r, o) {
  return qn(e, t, r, o).create ?? Jn.create;
}
function Wa(e, t, r, o) {
  return qn(e, t, r, o).delete ?? Jn.delete;
}
function SA(e) {
  if (e)
    return e in vr ? vr[e] : void 0;
}
function Fr(e) {
  const t = SA(e.icon);
  if (e?.icon && t)
    return t;
  const r = li.length, o = li[ga(e.path) % r];
  return vr[o];
}
const li = ["AcUnit", "Adjust", "AlignHorizontalCenter", "Album", "AllInclusive", "AllOut", "Animation", "Assistant", "Attractions", "Audiotrack", "AutoAwesome", "AutoAwesomeMosaic", "BeachAccess", "Bolt", "Brightness1", "BreakfastDining", "BrokenImage", "Brightness5", "Cable", "CalendarViewMonth", "CatchingPokemon", "Casino", "Category", "Cloud", "ColorLens", "CreditCard", "Coronavirus", "Earbuds", "EggAlt", "FiberSmartRecord", "Flag", "Healing", "HeatPump", "Hive", "Hub", "LocalFireDepartment", "LocalPizza", "Memory", "Outlet", "Pages", "PanoramaPhotosphere", "SignalCellular0Bar", "SportsBaseball", "Storm", "Stairs"];
function _g(e, t) {
  if (t !== void 0 && t === 1)
    return e;
  const r = {
    "(quiz)$": "$1zes",
    "^(ox)$": "$1en",
    "([m|l])ouse$": "$1ice",
    "(matr|vert|ind)ix|ex$": "$1ices",
    "(x|ch|ss|sh)$": "$1es",
    "([^aeiouy]|qu)y$": "$1ies",
    "(hive)$": "$1s",
    "(?:([^f])fe|([lr])f)$": "$1$2ves",
    "(shea|lea|loa|thie)f$": "$1ves",
    sis$: "ses",
    "([ti])um$": "$1a",
    "(tomat|potat|ech|her|vet)o$": "$1oes",
    "(bu)s$": "$1ses",
    "(alias)$": "$1es",
    "(octop)us$": "$1i",
    "(ax|test)is$": "$1es",
    "(us)$": "$1es",
    "([^s]+)$": "$1s"
  }, o = {
    move: "moves",
    foot: "feet",
    goose: "geese",
    sex: "sexes",
    child: "children",
    man: "men",
    tooth: "teeth",
    person: "people"
  };
  if ([
    "sheep",
    "fish",
    "deer",
    "moose",
    "series",
    "species",
    "money",
    "rice",
    "information",
    "equipment",
    "bison",
    "cod",
    "offspring",
    "pike",
    "salmon",
    "shrimp",
    "swine",
    "trout",
    "aircraft",
    "hovercraft",
    "spacecraft",
    "sugar",
    "tuna",
    "you",
    "wood"
  ].indexOf(e.toLowerCase()) >= 0)
    return e;
  for (const a in o) {
    const s = new RegExp(`${a}$`, "i"), l = o[a];
    if (s.test(e))
      return e.replace(s, l);
  }
  for (const a in r) {
    const s = new RegExp(a, "i");
    if (s.test(e))
      return e.replace(s, r[a]);
  }
  return e;
}
function Jg(e, t) {
  if (t !== void 0 && t !== 1)
    return e;
  const r = {
    "(quiz)zes$": "$1",
    "(matr)ices$": "$1ix",
    "(vert|ind)ices$": "$1ex",
    "^(ox)en$": "$1",
    "(alias)es$": "$1",
    "(octop|vir)i$": "$1us",
    "(cris|ax|test)es$": "$1is",
    "(shoe)s$": "$1",
    "(o)es$": "$1",
    "(bus)es$": "$1",
    "([m|l])ice$": "$1ouse",
    "(x|ch|ss|sh)es$": "$1",
    "(m)ovies$": "$1ovie",
    "(s)eries$": "$1eries",
    "([^aeiouy]|qu)ies$": "$1y",
    "([lr])ves$": "$1f",
    "(tive)s$": "$1",
    "(hive)s$": "$1",
    "(li|wi|kni)ves$": "$1fe",
    "(shea|loa|lea|thie)ves$": "$1f",
    "(^analy)ses$": "$1sis",
    "((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$": "$1$2sis",
    "([ti])a$": "$1um",
    "(n)ews$": "$1ews",
    "(h|bl)ouses$": "$1ouse",
    "(corpse)s$": "$1",
    "(us)es$": "$1",
    s$: ""
  }, o = {
    move: "moves",
    foot: "feet",
    goose: "geese",
    sex: "sexes",
    child: "children",
    man: "men",
    tooth: "teeth",
    person: "people"
  };
  if ([
    "sheep",
    "fish",
    "deer",
    "moose",
    "series",
    "species",
    "money",
    "rice",
    "information",
    "equipment",
    "bison",
    "cod",
    "offspring",
    "pike",
    "salmon",
    "shrimp",
    "swine",
    "trout",
    "aircraft",
    "hovercraft",
    "spacecraft",
    "sugar",
    "tuna",
    "you",
    "wood"
  ].indexOf(e.toLowerCase()) >= 0)
    return e;
  for (const a in o) {
    const s = new RegExp(`${o[a]}$`, "i");
    if (s.test(e))
      return e.replace(s, a);
  }
  for (const a in r) {
    const s = new RegExp(a, "i");
    if (s.test(e))
      return e.replace(s, r[a]);
  }
  return e;
}
function Va(e, t, r, o = 3) {
  const i = Object.keys(e.properties);
  let a = r?.filter((s) => i.includes(s));
  return a && a.length > 0 ? a : (a = i, a.filter((s) => {
    const l = e.properties[s];
    return l && !je(l) && !kA(l, t);
  }).slice(0, o));
}
const xn = "EntityPreview", Ze = {
  property: `${xn}-property`,
  valuePreview: `${xn}-valuePreview`,
  iconCell: `${xn}-iconCell`,
  titleCell: `${xn}-titleCell`
}, FA = tt(Bs)(({ theme: e }) => ({
  [`& .${Ze.property}`]: {
    display: "flex"
  },
  [`& .${Ze.valuePreview}`]: {
    height: "72px",
    padding: e.spacing(2, 3)
  },
  [`& .${Ze.iconCell}`]: {
    paddingTop: e.spacing(1)
  },
  [`& .${Ze.titleCell}`]: {
    width: "25%",
    padding: e.spacing(1)
  }
}));
function za({
  entity: e,
  collection: t,
  path: r
}) {
  const o = ie(), i = Pe.useMemo(() => Ie({
    collection: t,
    path: r,
    entityId: e.id,
    values: e.values,
    fields: o.fields
  }), [t, r, e]), a = ie(), s = i.properties;
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(
      B,
      {
        sx: (l) => ({
          width: "100%",
          marginTop: l.spacing(3),
          paddingLeft: l.spacing(4),
          paddingRight: l.spacing(4),
          paddingTop: l.spacing(3),
          [l.breakpoints.down("lg")]: {
            marginTop: l.spacing(2),
            paddingLeft: l.spacing(2),
            paddingRight: l.spacing(2),
            paddingTop: l.spacing(2)
          },
          [l.breakpoints.down("md")]: {
            marginTop: l.spacing(1),
            paddingLeft: l.spacing(2),
            paddingRight: l.spacing(2),
            paddingTop: l.spacing(2)
          }
        }),
        children: /* @__PURE__ */ n(
          X,
          {
            sx: {
              marginTop: 4,
              marginBottom: 4
            },
            variant: "h4",
            children: t.singularName ?? t.name + " entry"
          }
        )
      }
    ),
    /* @__PURE__ */ n(FA, { children: /* @__PURE__ */ n(On, { "aria-label": "entity table", children: /* @__PURE__ */ C($n, { children: [
      /* @__PURE__ */ C(on, { children: [
        /* @__PURE__ */ n(
          qe,
          {
            align: "right",
            component: "td",
            scope: "row",
            className: Ze.titleCell,
            children: /* @__PURE__ */ n(
              X,
              {
                variant: "caption",
                color: "textSecondary",
                children: "Id"
              }
            )
          }
        ),
        /* @__PURE__ */ n(
          qe,
          {
            padding: "none",
            className: Ze.iconCell,
            children: IA("disabled", "small")
          }
        ),
        /* @__PURE__ */ n(qe, { className: Ze.valuePreview, children: /* @__PURE__ */ C(B, { display: "flex", alignItems: "center", children: [
          e.id,
          a?.entityLinkBuilder && /* @__PURE__ */ n(
            "a",
            {
              href: a.entityLinkBuilder({ entity: e }),
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ n(
                oe,
                {
                  "aria-label": "go-to-entity-datasource",
                  size: "large",
                  children: /* @__PURE__ */ n(
                    un,
                    {
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          )
        ] }) })
      ] }),
      t && Object.entries(s).map(([l, c]) => {
        const d = e.values[l];
        return /* @__PURE__ */ C(
          on,
          {
            children: [
              /* @__PURE__ */ n(
                qe,
                {
                  align: "right",
                  component: "td",
                  scope: "row",
                  className: Ze.titleCell,
                  children: /* @__PURE__ */ n(
                    X,
                    {
                      sx: { paddingLeft: 2 },
                      variant: "caption",
                      color: "textSecondary",
                      children: c.name
                    }
                  )
                }
              ),
              /* @__PURE__ */ n(
                qe,
                {
                  padding: "none",
                  className: Ze.iconCell,
                  children: Re(c, "disabled", "small")
                }
              ),
              /* @__PURE__ */ n(
                qe,
                {
                  className: Ze.valuePreview,
                  children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
                    Qe,
                    {
                      propertyKey: l,
                      value: d,
                      entity: e,
                      property: c,
                      size: "regular"
                    }
                  ) })
                }
              )
            ]
          },
          "entity_prev" + c.name + l
        );
      })
    ] }) }) })
  ] });
}
function RA(e) {
  return e.dataType === "boolean" ? "center" : e.dataType === "number" ? e.enumValues ? "left" : "right" : e.dataType === "date" ? "right" : "left";
}
function Ua(e) {
  if (e.columnWidth)
    return e.columnWidth;
  if (e.dataType === "string")
    return e.url ? 280 : e.storage ? 160 : e.enumValues ? 200 : e.multiline || e.markdown ? 300 : (e.email, 200);
  if (e.dataType === "array") {
    const t = e;
    return t.of ? Array.isArray(e.of) ? 300 : Ua(t.of) : 300;
  } else
    return e.dataType === "number" ? e.enumValues ? 200 : 140 : e.dataType === "map" ? 360 : e.dataType === "date" ? 200 : e.dataType === "reference" ? 220 : e.dataType === "boolean" ? 140 : 200;
}
function Na(e) {
  return `subcollection:${e.alias ?? e.path}`;
}
function DA(e) {
  const t = R.createRef(), { disabled: r, value: o, multiline: i, updateValue: a, focused: s } = e, l = ce(o), [c, d] = Q(o), A = ce(!1);
  Y(() => {
    l.current !== o && o !== c && d(o), l.current = o;
  }, [o]);
  const u = R.useCallback(() => {
    !o && !c || c !== o && (l.current = c, a(c));
  }, [c, o]);
  return co(c, u, !s, 2e3), Y(() => {
    t.current && s && !A.current ? (A.current = !0, t.current.focus({ preventScroll: !0 }), t.current.selectionStart = t.current.value.length, t.current.selectionEnd = t.current.value.length) : A.current = s;
  }, [s, t]), /* @__PURE__ */ n(
    Da,
    {
      ref: t,
      style: {
        padding: 0,
        margin: 0,
        width: "100%",
        color: "unset",
        fontWeight: "unset",
        lineHeight: "unset",
        fontSize: "unset",
        fontFamily: "unset",
        background: "unset",
        border: "unset",
        resize: "none",
        outline: "none"
      },
      value: c ?? "",
      onChange: (h) => {
        const g = h.target.value;
        (i || !g.endsWith(`
`)) && d(g);
      },
      onFocus: () => {
        A.current = !0, e.setFocused(!0);
      },
      onBlur: () => {
        A.current = !1, u(), e.setFocused(!1);
      }
    }
  );
}
function ur(e) {
  const {
    name: t,
    enumValues: r,
    error: o,
    internalValue: i,
    disabled: a,
    small: s,
    focused: l,
    updateValue: c,
    multiple: d,
    valueType: A
  } = e, [u, h] = Q(!1), g = y(() => {
    h(!0);
  }, []), f = y(() => {
    h(!1);
  }, []), p = Array.isArray(i) && d || !Array.isArray(i) && !d, m = R.createRef();
  Y(() => {
    m.current && l && m.current?.focus({ preventScroll: !0 });
  }, [l, m]);
  const w = y((E) => {
    if (A === "number")
      if (d) {
        const v = E.target.value.map((x) => parseFloat(x));
        c(v);
      } else
        c(parseFloat(E.target.value));
    else if (A === "string")
      E.target.value ? c(E.target.value) : c(null);
    else
      throw Error("Missing mapping in TableSelect");
  }, [d, c, A]), b = (E) => d && Array.isArray(E) ? /* @__PURE__ */ n(
    so,
    {
      value: E,
      name: t,
      enumValues: r,
      size: s ? "small" : "regular"
    }
  ) : /* @__PURE__ */ n(
    Ve,
    {
      enumKey: E,
      enumValues: r,
      small: s
    }
  );
  return /* @__PURE__ */ n(
    Ke,
    {
      variant: "standard",
      inputRef: m,
      sx: {
        height: "100%"
      },
      open: u,
      disabled: a,
      multiple: d,
      onClose: f,
      onOpen: g,
      fullWidth: !0,
      inputProps: {
        sx: {
          height: "100% !important",
          display: "flex",
          alignItems: "center",
          padding: "0px 0 0px",
          background: "transparent !important"
        }
      },
      disableUnderline: !0,
      error: !!o,
      value: p ? d ? i.map((E) => E.toString()) : i : d ? [] : "",
      onChange: w,
      renderValue: b,
      children: jn(r).map((E) => {
        const v = E.id, x = /* @__PURE__ */ n(
          Ve,
          {
            enumKey: v,
            enumValues: r,
            small: !0
          }
        );
        return d ? /* @__PURE__ */ C(
          Te,
          {
            value: v,
            disabled: Rn(E),
            dense: !0,
            children: [
              /* @__PURE__ */ n(
                Ln,
                {
                  checked: Array.isArray(i) && i.map((I) => I.toString()).includes(v.toString())
                }
              ),
              /* @__PURE__ */ n(Qt, { primary: x })
            ]
          },
          `select-${t}-${v}`
        ) : /* @__PURE__ */ n(
          Te,
          {
            value: v,
            disabled: Rn(E),
            dense: !0,
            children: x
          },
          `select-${t}-${v}`
        );
      })
    },
    `table_select_${t}`
  );
}
function PA(e) {
  const { align: t, value: r, updateValue: o, focused: i, disabled: a } = e, s = r && typeof r == "number" ? r.toString() : "", [l, c] = Q(s), d = ce(r);
  Y(() => {
    d.current !== r && String(r) !== l && c(r ? r.toString() : null), d.current = r;
  }, [r]);
  const A = R.useCallback(() => {
    if (l !== s)
      if (l != null) {
        const g = parseFloat(l);
        if (isNaN(g))
          return;
        g != null && o(g);
      } else
        o(null);
  }, [l, r]);
  co(l, A, !i, 2e3), Y(
    () => {
      !i && s !== l && c(r != null ? r.toString() : null);
    },
    [r, i]
  );
  const u = R.createRef();
  Y(() => {
    u.current && i && u.current.focus({ preventScroll: !0 });
  }, [i, u]);
  const h = /^-?[0-9]+[,.]?[0-9]*$/;
  return /* @__PURE__ */ n(
    ks,
    {
      inputRef: u,
      sx: {
        width: "100%",
        fontSize: "unset",
        fontFamily: "unset",
        background: "unset",
        border: "unset",
        resize: "none",
        outline: "none",
        padding: 0,
        margin: 0,
        color: "unset",
        fontWeight: "unset",
        lineHeight: "unset",
        textAlign: "right"
      },
      inputProps: {
        style: {
          textAlign: t
        }
      },
      disabled: a,
      disableUnderline: !0,
      value: l ?? "",
      onFocus: () => {
        e.setFocused(!0);
      },
      onBlur: () => {
        A(), e.setFocused(!1);
      },
      onChange: (g) => {
        const f = g.target.value.replace(",", ".");
        f.length === 0 && c(null), (h.test(f) || f.startsWith("-")) && c(f);
      }
    }
  );
}
function TA(e) {
  const { disabled: t, internalValue: r, updateValue: o, focused: i } = e, a = R.createRef();
  return Y(() => {
    a.current && i && a.current.focus({ preventScroll: !0 });
  }, [i, a]), /* @__PURE__ */ n(
    Yr,
    {
      inputRef: a,
      color: "secondary",
      checked: !!r,
      disabled: t,
      onChange: (s) => {
        const l = s.target.checked;
        o(l);
      }
    }
  );
}
function QA(e) {
  const {
    disabled: t,
    error: r,
    mode: o,
    internalValue: i,
    updateValue: a
  } = e;
  return /* @__PURE__ */ n(
    o === void 0 || o === "date_time" ? Jr : _r,
    {
      value: i ?? null,
      disabled: t,
      onChange: (l) => {
        a(l);
      },
      renderInput: (l) => /* @__PURE__ */ n(
        ot,
        {
          ...l,
          fullWidth: !0,
          variant: "standard",
          error: !!r,
          style: {
            height: "100%"
          },
          InputProps: {
            ...l.InputProps,
            style: { fontSize: 14 },
            disableUnderline: !0,
            endAdornment: /* @__PURE__ */ n(B, { sx: { pr: 1 }, children: l.InputProps?.endAdornment })
          }
        }
      ),
      InputAdornmentProps: {
        style: {
          fontSize: "small",
          height: 26
        }
      }
    }
  );
}
function ci(e) {
  const {
    name: t,
    internalValue: r,
    updateValue: o,
    multiselect: i,
    path: a,
    size: s,
    previewProperties: l,
    title: c,
    disabled: d,
    forceFilter: A
  } = e, [u, h] = Q(!1), g = y(() => h(!0), []), f = y(() => h(!1), []), m = ke().getCollection(a);
  if (!m)
    throw Error(`Couldn't find the corresponding collection view for the path: ${a}`);
  const w = y((S) => {
    o(S ? $t(S) : null);
  }, [o]), b = y((S) => {
    o(S.map((D) => $t(D)));
  }, [o]), E = r ? Array.isArray(r) ? r.map((S) => S.id) : r.id ? [r.id] : [] : [], v = Un(
    {
      multiselect: i,
      path: a,
      collection: m,
      onMultipleEntitiesSelected: b,
      onSingleEntitySelected: w,
      selectedEntityIds: E,
      forceFilter: A
    }
  ), x = y(() => {
    d || v.open();
  }, [d, v]), I = !r || Array.isArray(r) && r.length === 0, k = () => r instanceof _e ? /* @__PURE__ */ n(
    xt,
    {
      onClick: d ? void 0 : x,
      size: pt(s),
      reference: r,
      onHover: u,
      disabled: !a,
      previewProperties: l
    }
  ) : /* @__PURE__ */ n(Ee, { error: "Data is not a reference" }), F = () => Array.isArray(r) ? /* @__PURE__ */ n(q, { children: r.map(
    (S, D) => /* @__PURE__ */ n(
      B,
      {
        sx: { m: 0.5, width: "100%" },
        children: /* @__PURE__ */ n(
          xt,
          {
            onClick: d ? void 0 : x,
            size: "tiny",
            reference: S,
            onHover: u,
            disabled: !a,
            previewProperties: l
          }
        )
      },
      `preview_array_ref_${t}_${D}`
    )
  ) }) : /* @__PURE__ */ n(Ee, { error: "Data is not an array of references" });
  return m ? /* @__PURE__ */ C(
    B,
    {
      sx: { width: "100%" },
      onMouseEnter: g,
      onMouseMove: g,
      onMouseLeave: f,
      children: [
        r && !i && k(),
        r && i && F(),
        I && /* @__PURE__ */ C(
          de,
          {
            onClick: x,
            size: "small",
            variant: "outlined",
            color: "primary",
            children: [
              "Edit ",
              c
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ n(Ee, { error: "The specified collection does not exist" });
}
const MA = (e) => ({
  transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
  position: "relative",
  height: "100%",
  width: "100%",
  outline: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: e ? "start" : "center",
  alignItems: "center",
  border: "2px solid",
  borderColor: "transparent"
}), OA = (e) => ({
  background: (e.palette.mode === "light", "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important"),
  borderRadius: `${e.shape.borderRadius}px`,
  border: "2px solid",
  borderColor: "transparent"
}), $A = (e) => ({
  background: "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important",
  // background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09) 10px, rgba(0, 0, 0, 0.12) 10px, rgba(0, 0, 0, 0.12) 20px) !important",
  borderColor: e.palette.success.light,
  border: "2px solid"
}), GA = (e) => ({
  borderColor: e.palette.error.light,
  border: "2px solid"
});
function LA(e) {
  const {
    propertyKey: t,
    error: r,
    value: o,
    disabled: i,
    property: a,
    entity: s,
    path: l,
    previewSize: c,
    updateValue: d
  } = e, A = fn(), {
    internalValue: u,
    setInternalValue: h,
    onFilesAdded: g,
    storage: f,
    onFileUploadComplete: p,
    storagePathBuilder: m,
    multipleFilesSupported: w
  } = Sa({
    entityValues: s.values,
    entityId: s.id,
    path: l,
    property: a,
    propertyKey: t,
    storageSource: A,
    onChange: d,
    value: o,
    disabled: i
  });
  return /* @__PURE__ */ n(
    YA,
    {
      internalValue: u,
      setInternalValue: h,
      name: t,
      disabled: i,
      autoFocus: !1,
      property: a,
      onChange: d,
      entity: s,
      storagePathBuilder: m,
      storage: f,
      multipleFilesSupported: w,
      onFilesAdded: g,
      onFileUploadComplete: p,
      previewSize: c
    }
  );
}
function YA({
  property: e,
  name: t,
  internalValue: r,
  setInternalValue: o,
  entity: i,
  onChange: a,
  multipleFilesSupported: s,
  previewSize: l,
  disabled: c,
  autoFocus: d,
  storage: A,
  onFilesAdded: u,
  onFileUploadComplete: h,
  storagePathBuilder: g
}) {
  const [f, p] = Q(!1), m = s && l === "regular" ? "small" : l;
  if (s) {
    const L = e;
    if (Array.isArray(L.of))
      throw Error("Using array properties instead of single one in `of` in ArrayProperty");
    if (L.of) {
      if (L.of.dataType !== "string")
        throw Error("Storage field using array must be of data type string");
    } else
      throw Error("Storage field using array must be of data type string");
  }
  const w = A?.metadata, b = !!r, E = Ct(), {
    open: v,
    getRootProps: x,
    getInputProps: I,
    isDragActive: k,
    isDragAccept: F,
    isDragReject: S
  } = Yi(
    {
      accept: A.acceptedFiles ? A.acceptedFiles.map((L) => ({ [L]: [] })).reduce((L, U) => ({ ...L, ...U }), {}) : void 0,
      disabled: c,
      maxSize: A.maxSize,
      noClick: !0,
      noKeyboard: !0,
      onDrop: u,
      onDropRejected: (L, U) => {
        for (const _ of L)
          for (const ee of _.errors)
            E.open({
              type: "error",
              message: `Error uploading file: File is larger than ${A.maxSize} bytes`
            });
      }
    }
  ), { ...D } = x(), P = s ? "Drag 'n' drop some files here, or click here to edit" : "Drag 'n' drop a file here, or click here edit", T = s ? e.of : e, O = le(() => Mt(m), [m]), ne = Be();
  return /* @__PURE__ */ C(
    B,
    {
      ...D,
      onMouseEnter: () => p(!0),
      onMouseMove: () => p(!0),
      onMouseLeave: () => p(!1),
      sx: {
        ...MA(b),
        ...k ? OA(ne) : {},
        ...F ? $A(ne) : {},
        ...S ? GA(ne) : {}
      },
      children: [
        /* @__PURE__ */ n("input", { autoFocus: d, ...I() }),
        r.map((L, U) => {
          let _;
          return L.storagePathOrDownloadUrl ? _ = /* @__PURE__ */ n(
            WA,
            {
              property: T,
              value: L.storagePathOrDownloadUrl,
              entity: i,
              size: m
            },
            `storage_preview_${U}`
          ) : L.file && (_ = /* @__PURE__ */ n(
            Fa,
            {
              entry: L,
              metadata: w,
              storagePath: g(L.file),
              onFileUploadComplete: h,
              imageSize: O,
              simple: !0
            },
            `storage_progress_${U}`
          )), _;
        }),
        !r && /* @__PURE__ */ n(
          B,
          {
            sx: {
              flexGrow: 1,
              m: 2,
              maxWidth: 200
            },
            onClick: v,
            children: /* @__PURE__ */ n(
              X,
              {
                sx: {
                  color: (L) => L.palette.mode === "light" ? "#999" : "#444"
                },
                variant: "body2",
                align: "center",
                children: P
              }
            )
          }
        ),
        f && /* @__PURE__ */ n(
          oe,
          {
            color: "inherit",
            size: "small",
            onClick: v,
            sx: {
              position: "absolute",
              bottom: 2,
              right: 2
            },
            children: /* @__PURE__ */ n(Xl, { sx: {
              width: 16,
              height: 16,
              fill: "#888"
            } })
          }
        )
      ]
    }
  );
}
function WA({
  property: e,
  value: t,
  size: r,
  entity: o
}) {
  return /* @__PURE__ */ n(
    B,
    {
      m: 1,
      position: "relative",
      children: t && /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
        Qe,
        {
          propertyKey: "ignore",
          value: t,
          property: e,
          entity: o,
          size: r
        }
      ) })
    }
  );
}
function Gt(e) {
  switch (e) {
    case "xl":
      return 400;
    case "l":
      return 280;
    case "m":
      return 140;
    case "s":
      return 80;
    case "xs":
      return 54;
    default:
      throw Error("Missing mapping for collection size -> height");
  }
}
function VA(e, t, r, o, i, a) {
  if (e && !r)
    return i.palette.mode === "dark" ? bt(i.palette.background.paper, 0.03) : Fe(i.palette.background.default, 0.02);
  if (a)
    return i.palette.mode === "dark" ? bt(i.palette.background.paper, 0.035) : Fe(i.palette.background.default, 0.025);
  if (t || o)
    return i.palette.mode === "dark" ? bt(i.palette.background.paper, 0.022) : Fe(i.palette.background.default, 8e-3);
}
const zA = Wn("div", {})(({
  theme: e,
  justifyContent: t,
  padding: r,
  border: o,
  alignItems: i,
  backgroundColor: a
}) => ({
  alignItems: i,
  backgroundColor: a,
  padding: r,
  border: o,
  justifyContent: t,
  display: "flex",
  position: "relative",
  height: "100%",
  borderRadius: "4px",
  overflow: "hidden",
  // contain: "content",
  contain: "content",
  transition: "border-color 200ms ease-in-out, background-color 500ms ease"
})), UA = Wn("div", {})(({
  theme: e,
  justifyContent: t,
  scrollable: r,
  faded: o,
  fullHeight: i
}) => ({
  display: "flex",
  maxHeight: "100%",
  width: "100%",
  flexDirection: "column",
  height: i ? "100%" : void 0,
  justifyContent: t,
  overflow: r ? "auto" : void 0,
  WebkitMaskImage: o ? "linear-gradient(to bottom, black 60%, transparent 100%)" : void 0,
  maskImage: o ? "linear-gradient(to bottom, black 60%, transparent 100%)" : void 0,
  alignItems: o || r ? "start" : void 0
})), Rr = R.memo(
  function({
    children: t,
    focused: r,
    size: o,
    selected: i,
    disabled: a,
    disabledTooltip: s,
    saved: l,
    selectedRow: c,
    error: d,
    align: A,
    allowScroll: u,
    openPopup: h,
    removePadding: g,
    fullHeight: f,
    onSelect: p,
    width: m,
    showExpandIcon: w = !0
  }) {
    const [b, E] = Hr(), v = Be(), x = R.createRef(), [I, k] = Q(!1), F = le(() => Gt(o), [o]), [S, D] = Q(!1), [P, T] = Q(l), O = !a && d, ne = R.createRef();
    Y(() => {
      ne.current && r && ne.current.focus({ preventScroll: !0 });
    }, [r]), Y(() => {
      l && T(!0);
      const j = setTimeout(() => {
        T(!1);
      }, 800);
      return () => {
        clearTimeout(j);
      };
    }, [l]);
    let L = v.spacing(0);
    if (!g)
      switch (o) {
        case "l":
        case "xl":
          L = v.spacing(2);
          break;
        case "m":
          L = v.spacing(1);
          break;
        case "s":
          L = v.spacing(0.5);
          break;
        default:
          L = v.spacing(0.25);
          break;
      }
    let U;
    switch (A) {
      case "right":
        U = "flex-end";
        break;
      case "center":
        U = "center";
        break;
      case "left":
      default:
        U = "flex-start";
    }
    const _ = y(() => {
      if (h) {
        const j = x && x?.current?.getBoundingClientRect();
        h(j);
      }
    }, [x]), ee = y((j) => {
      j.detail === 3 && _();
    }, [_]), $ = y(() => {
      if (!p)
        return;
      const j = x && x?.current?.getBoundingClientRect();
      a ? p(void 0) : !i && j && p(j);
    }, [x, p, i, a]), G = y((j) => {
      $(), j.stopPropagation();
    }, [$]);
    Y(() => {
      if (E) {
        const j = E.height > F;
        I !== j && k(j);
      }
    }, [E, I, F]);
    const H = !O && i;
    let V;
    P ? V = `2px solid ${v.palette.success.light}` : H ? V = "2px solid #5E9ED6" : O ? V = `2px solid ${v.palette.error.light} !important` : V = "2px solid transparent";
    const z = !a && u && I, Z = !a && !u && I, J = y(() => D(!0), []), M = y(() => D(!1), []);
    return /* @__PURE__ */ C(
      zA,
      {
        style: {
          width: m ?? "100%"
        },
        tabIndex: i || a ? void 0 : 0,
        ref: x,
        onFocus: G,
        onClick: ee,
        onMouseEnter: J,
        onMouseMove: J,
        onMouseLeave: M,
        padding: L,
        contain: z ? "content" : "size",
        border: V,
        justifyContent: U,
        alignItems: a || !I ? "center" : void 0,
        backgroundColor: VA(S, c, a, P ?? !1, v, H ?? !1),
        children: [
          /* @__PURE__ */ C(he, { children: [
            f && !Z && t,
            (!f || Z) && /* @__PURE__ */ n(
              UA,
              {
                fullHeight: f ?? !1,
                justifyContent: U,
                scrollable: z ?? !1,
                faded: Z,
                children: !f && /* @__PURE__ */ n(
                  "div",
                  {
                    ref: b,
                    style: {
                      display: "flex",
                      width: "100%",
                      justifyContent: U,
                      height: f ? "100%" : void 0
                    },
                    children: t
                  }
                )
              }
            )
          ] }),
          a && S && s && /* @__PURE__ */ n(B, { sx: {
            position: "absolute",
            top: 4,
            right: 4,
            fontSize: "14px"
          }, children: /* @__PURE__ */ n(me, { title: s, children: /* @__PURE__ */ n(
            ec,
            {
              color: "disabled",
              fontSize: "inherit"
            }
          ) }) }),
          (O || w) && /* @__PURE__ */ C(B, { sx: {
            position: "absolute",
            top: "2px",
            right: "2px"
          }, children: [
            i && !a && w && /* @__PURE__ */ n(
              oe,
              {
                ref: ne,
                color: "inherit",
                size: "small",
                onClick: _,
                children: /* @__PURE__ */ C(
                  "svg",
                  {
                    className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
                    fill: "#888",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ n(
                        "path",
                        {
                          className: "cls-2",
                          d: "M20,5a1,1,0,0,0-1-1L14,4h0a1,1,0,0,0,0,2h2.57L13.29,9.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.42V10a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1Z"
                        }
                      ),
                      /* @__PURE__ */ n(
                        "path",
                        {
                          className: "cls-2",
                          d: "M10.71,13.29a1,1,0,0,0-1.42,0L6,16.57V14a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1l0,5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H7.42l3.29-3.29A1,1,0,0,0,10.71,13.29Z"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            O && /* @__PURE__ */ n(
              ua,
              {
                arrow: !0,
                placement: "left",
                title: O.message,
                children: /* @__PURE__ */ n(
                  Kl,
                  {
                    fontSize: "inherit",
                    color: "error"
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  },
  (e, t) => e.error === t.error && e.value === t.value && e.disabled === t.disabled && e.saved === t.saved && e.allowScroll === t.allowScroll && e.align === t.align && e.size === t.size && e.disabledTooltip === t.disabledTooltip && e.width === t.width && e.focused === t.focused && e.showExpandIcon === t.showExpandIcon && e.removePadding === t.removePadding && e.fullHeight === t.fullHeight && e.selected === t.selected && e.selectedRow === t.selectedRow
);
function NA(e) {
  return e.dataType === "string" && e.storage ? !0 : e.dataType === "array" ? Array.isArray(e.of) ? !1 : e.of?.dataType === "string" && e.of?.storage : !1;
}
const jA = R.memo(
  function({
    propertyKey: t,
    columnIndex: r,
    customFieldValidator: o,
    value: i,
    property: a,
    align: s,
    width: l,
    height: c,
    collection: d,
    path: A,
    entity: u,
    readonly: h
  }) {
    const g = Ue(), f = ie(), {
      onValueChange: p,
      size: m,
      selectedCell: w,
      focused: b,
      setFocused: E,
      select: v,
      setPopupCell: x,
      selectedEntityIds: I
    } = wu(), k = I?.includes(u.id) ?? !1, F = w?.columnIndex === r && w?.entity.path === u.path && w?.entity.id === u.id, [S, D] = Q(i), P = ce(i), [T, O] = Q(), [ne, L] = Q(!1), U = y(() => {
      L(!0), setTimeout(() => {
        L(!1);
      }, 100);
    }, []), _ = !!a.Field, ee = !!a.Preview, $ = hn(a), G = typeof a.disabled == "object" ? a.disabled.disabledMessage : void 0, H = !!a.disabled, V = le(() => cn({
      property: a,
      entityId: u.id,
      customFieldValidator: o,
      name: t
    }), [u.id, a, t]);
    Y(
      () => {
        xe(i, P.current) || (O(void 0), D(i), P.current = i, U());
      },
      [U, i]
    );
    const z = y((ae) => {
      L(!1), V.validate(ae).then(() => {
        O(void 0), p && p({
          value: ae,
          propertyKey: t,
          setError: O,
          onValueUpdated: U,
          entity: u,
          fullPath: A,
          collection: d,
          dataSource: g,
          context: f
        });
      }).catch((re) => {
        O(re);
      });
    }, [u, p, t, V]);
    Y(() => {
      V.validate(S).then(() => O(void 0)).catch((ae) => {
        O(ae);
      });
    }, [S, V]);
    const Z = y(
      (ae) => {
        let re;
        ae === void 0 ? re = null : re = ae, P.current = re, D(re), z(re);
      },
      [z]
    );
    Ge({
      property: a,
      value: S,
      setValue: Z
    });
    const J = y((ae) => {
      v(ae ? {
        columnIndex: r,
        width: l,
        height: c,
        entity: u,
        cellRect: ae,
        propertyKey: t,
        collection: d
      } : void 0);
    }, [d, r, u, c, t, v, l]), M = y((ae) => {
      x(ae ? {
        columnIndex: r,
        width: l,
        height: c,
        entity: u,
        cellRect: ae,
        propertyKey: t,
        collection: d
      } : void 0);
    }, [d, r, u, c, t, l]);
    let j, K = !1, W = !1, ge = !1, be = !1;
    if (h || $)
      return /* @__PURE__ */ n(
        Rr,
        {
          size: m,
          width: l,
          focused: b,
          saved: ne,
          selectedRow: k,
          value: S,
          align: s ?? "left",
          fullHeight: !0,
          disabledTooltip: G ?? ($ ? "Read only" : void 0),
          disabled: !0,
          children: /* @__PURE__ */ n(
            Qe,
            {
              width: l,
              height: Gt(m),
              propertyKey: t,
              property: a,
              entity: u,
              value: i,
              size: pt(m)
            }
          )
        },
        `${t}_${u.path}_${u.id}`
      );
    if (!_ && (!ee || F)) {
      if (NA(a))
        j = /* @__PURE__ */ n(
          LA,
          {
            error: T,
            disabled: H,
            focused: b,
            property: a,
            entity: u,
            path: A,
            value: S,
            previewSize: pt(m),
            updateValue: Z,
            propertyKey: t
          }
        ), W = !0, be = !0, ge = !0;
      else if (F && a.dataType === "number") {
        const re = a;
        re.enumValues ? (j = /* @__PURE__ */ n(
          ur,
          {
            name: t,
            multiple: !1,
            disabled: H,
            focused: b,
            valueType: "number",
            small: pt(m) !== "regular",
            enumValues: re.enumValues,
            error: T,
            internalValue: S,
            updateValue: Z
          }
        ), be = !0) : (j = /* @__PURE__ */ n(
          PA,
          {
            align: s,
            error: T,
            focused: b,
            setFocused: E,
            disabled: H,
            value: S,
            updateValue: Z
          }
        ), K = !0);
      } else if (F && a.dataType === "string") {
        const re = a;
        if (re.enumValues)
          j = /* @__PURE__ */ n(
            ur,
            {
              name: t,
              multiple: !1,
              focused: b,
              disabled: H,
              valueType: "string",
              small: pt(m) !== "regular",
              enumValues: re.enumValues,
              error: T,
              internalValue: S,
              updateValue: Z
            }
          ), be = !0;
        else if (!re.storage) {
          const at = !!re.multiline || !!re.markdown;
          j = /* @__PURE__ */ n(
            DA,
            {
              error: T,
              disabled: H,
              multiline: at,
              setFocused: E,
              focused: b,
              value: S,
              updateValue: Z
            }
          ), K = !0;
        }
      } else if (a.dataType === "boolean")
        j = /* @__PURE__ */ n(
          TA,
          {
            error: T,
            disabled: H,
            focused: b && F,
            internalValue: S,
            updateValue: Z
          }
        );
      else if (a.dataType === "date")
        j = /* @__PURE__ */ n(
          QA,
          {
            name: t,
            error: T,
            disabled: H,
            mode: a.mode,
            focused: b,
            internalValue: S,
            updateValue: Z
          }
        ), K = !0;
      else if (a.dataType === "reference")
        typeof a.path == "string" && (j = /* @__PURE__ */ n(
          ci,
          {
            name: t,
            internalValue: S,
            updateValue: Z,
            disabled: H,
            size: m,
            path: a.path,
            multiselect: !1,
            previewProperties: a.previewProperties,
            title: a.name,
            forceFilter: a.forceFilter
          }
        )), K = !1;
      else if (a.dataType === "array") {
        const re = a;
        if (!re.of && !re.oneOf)
          throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${t}`);
        re.of && !Array.isArray(re.of) && (re.of.dataType === "string" || re.of.dataType === "number" ? F && re.of.enumValues && (j = /* @__PURE__ */ n(
          ur,
          {
            name: t,
            multiple: !0,
            disabled: H,
            focused: b,
            small: pt(m) !== "regular",
            valueType: re.of.dataType,
            enumValues: re.of.enumValues,
            error: T,
            internalValue: S,
            updateValue: Z
          }
        ), K = !0, be = !0) : re.of.dataType === "reference" && (typeof re.of.path == "string" && (j = /* @__PURE__ */ n(
          ci,
          {
            name: t,
            disabled: H,
            internalValue: S,
            updateValue: Z,
            size: m,
            multiselect: !0,
            path: re.of.path,
            previewProperties: re.of.previewProperties,
            title: re.of.name,
            forceFilter: re.of.forceFilter
          }
        )), K = !1));
      }
    }
    return j || (K = !1, W = F && !j && !H && !$, j = /* @__PURE__ */ n(
      Qe,
      {
        width: l,
        height: c,
        entity: u,
        propertyKey: t,
        value: S,
        property: a,
        size: pt(m)
      }
    )), /* @__PURE__ */ n(
      Rr,
      {
        size: m,
        width: l,
        focused: b,
        onSelect: J,
        selected: F,
        selectedRow: k,
        disabled: H || $,
        disabledTooltip: G ?? "Disabled",
        removePadding: ge,
        fullHeight: be,
        saved: ne,
        error: T,
        align: s,
        allowScroll: K,
        showExpandIcon: W,
        openPopup: H ? void 0 : M,
        value: S,
        children: j
      },
      `cell_${t}_${u.path}_${u.id}`
    );
  },
  HA
);
function HA(e, t) {
  return e.height === t.height && e.propertyKey === t.propertyKey && e.align === t.align && e.width === t.width && xe(e.property, t.property) && xe(e.value, t.value) && xe(e.entity.values, t.entity.values);
}
function _A({
  containerRef: e,
  innerRef: t,
  x: r,
  y: o,
  onMove: i
}) {
  let a = 0, s = 0;
  const l = R.useRef(!1), c = (f) => {
    if (f.button !== 0 || !e.current || f.defaultPrevented || f.innerClicked)
      return;
    const { x: p, y: m } = e.current.getBoundingClientRect();
    a = f.screenX - p, s = f.screenY - m, document.addEventListener("mousemove", h), document.addEventListener("mouseup", u), document.addEventListener("selectstart", A), l.current = !0;
  }, d = (f) => {
    f.innerClicked = !0;
  }, A = (f) => {
    f.preventDefault(), f.stopPropagation();
  }, u = (f) => {
    document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", u), document.removeEventListener("selectstart", A), f.stopPropagation(), l.current = !1;
  }, h = (f) => {
    f.target.localName === "input" || !l.current || (i(
      f.screenX - a,
      f.screenY - s
    ), f.stopPropagation());
  }, g = () => {
    e.current && (e.current.style.top = `${o}px`, e.current.style.left = `${r}px`);
  };
  Y(() => {
    const f = e.current, p = t.current;
    if (!(!f || !p))
      return p && p.addEventListener("mousedown", d), f && f.addEventListener("mousedown", c), g(), () => {
        f && f.removeEventListener("mousedown", c), p && p.removeEventListener("mousedown", d);
      };
  });
}
function JA() {
  const [e, t] = Q({ width: 0, height: 0 });
  return mr(() => {
    function r() {
      t({ width: window.innerWidth, height: window.innerHeight });
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), e;
}
const qA = ({ onResize: e }) => {
  const t = ce(0), r = ce(null), o = ce(e);
  o.current = e;
  const i = y((s) => {
    t.current && cancelAnimationFrame(t.current), t.current = requestAnimationFrame(() => {
      o.current(s);
    });
  }, []), a = y(() => {
    const s = r.current;
    s && s.contentDocument && s.contentDocument.defaultView && s.contentDocument.defaultView.addEventListener("resize", i);
  }, [i]);
  return Y(() => {
    const s = r.current;
    return () => {
      s && s.contentDocument && s.contentDocument.defaultView && s.contentDocument.defaultView.removeEventListener("resize", i);
    };
  }, [i]), /* @__PURE__ */ n(
    "object",
    {
      onLoad: a,
      ref: r,
      tabIndex: -1,
      type: "text/html",
      data: "about:blank",
      title: "",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0
      }
    }
  );
};
function It({
  children: e,
  position: t = "sticky",
  maxWidth: r,
  translucent: o = !0
}) {
  return /* @__PURE__ */ n(
    B,
    {
      sx: (a) => ({
        background: o ? a.palette.mode === "light" ? "rgba(255,255,255,0.6)" : an(a.palette.background.paper, 0.1) : void 0,
        backdropFilter: o ? "blur(8px)" : void 0,
        borderTop: `1px solid ${a.palette.divider}`,
        py: 1,
        px: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        position: t,
        bottom: 0,
        right: 0,
        left: 0,
        textAlign: "right",
        zIndex: 2,
        "& > *:not(:last-child)": {
          [a.breakpoints.down("md")]: {
            mr: a.spacing(1)
          },
          mr: a.spacing(2)
        }
      }),
      children: r ? /* @__PURE__ */ n(Ci, { maxWidth: r, children: e }) : e
    }
  );
}
function ZA(e) {
  return e.open ? /* @__PURE__ */ n(XA, { ...e }) : null;
}
function XA({
  tableKey: e,
  entity: t,
  customFieldValidator: r,
  propertyKey: o,
  collection: i,
  path: a,
  cellRect: s,
  open: l,
  onClose: c,
  columnIndex: d,
  onCellValueChange: A
}) {
  const u = Ue(), h = ie(), [g, f] = R.useState(), [p, m] = Q(), [w, b] = Q(t?.values), E = i ? Ie({
    collection: i,
    path: a,
    values: w,
    entityId: t?.id,
    fields: h.fields
  }) : void 0, v = JA(), x = R.useRef(null), I = R.useRef(null), k = R.useRef(!1);
  _A({
    containerRef: x,
    innerRef: I,
    x: p?.x,
    y: p?.y,
    onMove: (_, ee) => O({
      x: _,
      y: ee
    })
  }), Y(
    () => {
      k.current = !1;
    },
    [o, t]
  );
  const F = y(() => {
    if (!s)
      throw Error("getInitialLocation error");
    return {
      x: s.left < v.width - s.right ? s.x + s.width / 2 : s.x - s.width / 2,
      y: s.top < v.height - s.bottom ? s.y + s.height / 2 : s.y - s.height / 2
    };
  }, [s, v.height, v.width]), S = y(({
    x: _,
    y: ee
  }) => {
    const $ = x.current?.getBoundingClientRect();
    if (!$)
      throw Error("normalizePosition called before draggableBoundingRect is set");
    return {
      x: Math.max(0, Math.min(_, v.width - $.width)),
      y: Math.max(0, Math.min(ee, v.height - $.height))
    };
  }, [v]), D = y((_) => {
    const ee = x.current?.getBoundingClientRect();
    if (!s || !ee)
      return;
    const $ = S(_ ?? F());
    (!p || $.x !== p.x || $.y !== p.y) && m($);
  }, [s, F, S, p]);
  Y(
    () => {
      k.current = !1;
    },
    [o]
  ), mr(
    () => {
      const _ = x.current?.getBoundingClientRect();
      !s || !_ || k.current || (D(), k.current = !0);
    },
    [s, D, k.current]
  ), mr(
    () => {
      D(p);
    },
    [v, s]
  );
  const P = le(() => {
    if (!(!E || !t))
      return Pa(
        t.id,
        o && E.properties[o] ? { [o]: E.properties[o] } : {},
        r
      );
  }, [a, o, E, t]), T = y(() => D(p), [p, D]), O = y((_) => D(_), [D]), ne = async (_) => (f(null), i && t && A && o ? A({
    value: _[o],
    propertyKey: o,
    entity: t,
    setError: f,
    onValueUpdated: () => {
    },
    fullPath: a,
    collection: i,
    dataSource: u,
    context: h
  }) : Promise.resolve());
  if (!t)
    return /* @__PURE__ */ n(q, {});
  const L = t && /* @__PURE__ */ C(B, { sx: (_) => ({
    overflow: "auto",
    borderRadius: `${_.shape.borderRadius}px`,
    backgroundColor: _.palette.background.paper,
    visibility: l ? void 0 : "hidden",
    cursor: "grab"
  }), children: [
    /* @__PURE__ */ n(
      $i,
      {
        initialValues: t?.values ?? {},
        validationSchema: P,
        validateOnMount: !0,
        validate: (_) => console.debug("Validating", _),
        onSubmit: (_, ee) => {
          ne(_).then(() => c()).finally(() => ee.setSubmitting(!1));
        },
        children: ({
          handleChange: _,
          values: ee,
          errors: $,
          touched: G,
          dirty: H,
          setFieldValue: V,
          setFieldTouched: z,
          handleSubmit: Z,
          isSubmitting: J
        }) => {
          if (Y(() => {
            xe(ee, w) || b(ee);
          }, [ee]), !t)
            return /* @__PURE__ */ n(
              Ee,
              {
                error: "PopupFormField misconfiguration"
              }
            );
          if (!E)
            return /* @__PURE__ */ n(q, {});
          const M = J, j = {
            collection: E,
            entityId: t.id,
            values: ee,
            path: a,
            setFieldValue: V,
            save: ne
          }, K = o && E.properties[o], W = o && K ? {
            propertyKey: o,
            disabled: J || hn(K) || !!K.disabled,
            property: K,
            includeDescription: !1,
            underlyingValueHasChanged: !1,
            context: j,
            tableMode: !0,
            partOfArray: !1,
            autoFocus: l
          } : void 0;
          let ge = /* @__PURE__ */ n(q, { children: /* @__PURE__ */ n(
            B,
            {
              sx: {
                width: 520,
                maxWidth: "100vw",
                maxHeight: "85vh"
              },
              children: /* @__PURE__ */ C(
                Gi,
                {
                  onSubmit: Z,
                  noValidate: !0,
                  children: [
                    /* @__PURE__ */ n(
                      B,
                      {
                        sx: {
                          mb: 1,
                          padding: 2,
                          display: "flex",
                          flexDirection: "column",
                          position: "relative"
                        },
                        children: /* @__PURE__ */ n(
                          B,
                          {
                            ref: I,
                            sx: {
                              cursor: "auto !important"
                            },
                            children: W && /* @__PURE__ */ n(Ut, { ...W })
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ n(It, { children: /* @__PURE__ */ n(
                      de,
                      {
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        disabled: M,
                        children: "Save"
                      }
                    ) })
                  ]
                }
              )
            },
            `popup_form_${e}_${t.id}_${d}`
          ) });
          const be = h.plugins;
          return be && be.forEach((ae) => {
            ae.form?.provider && (ge = /* @__PURE__ */ n(
              ae.form.provider.Component,
              {
                status: "existing",
                path: a,
                collection: E,
                entity: t,
                context: h,
                currentEntityId: t.id,
                formContext: j,
                ...ae.form.provider.props,
                children: ge
              }
            ));
          }), ge;
        }
      }
    ),
    g && /* @__PURE__ */ n(X, { color: "error", children: g.message })
  ] }), U = /* @__PURE__ */ C(
    B,
    {
      sx: (_) => ({
        display: "inline-block",
        // userSelect: "none",
        position: "fixed",
        zIndex: 1300,
        boxShadow: "0 0 0 2px rgba(128,128,128,0.2)",
        backgroundColor: _.palette.background.paper,
        borderRadius: `${_.shape.borderRadius}px`,
        visibility: l ? void 0 : "hidden",
        cursor: "grab"
      }),
      ref: x,
      children: [
        /* @__PURE__ */ n(qA, { onResize: T }),
        /* @__PURE__ */ C(
          B,
          {
            sx: {
              overflow: "hidden"
            },
            children: [
              L,
              /* @__PURE__ */ n(B, { sx: {
                position: "absolute",
                top: -14,
                right: -14,
                backgroundColor: "#888",
                borderRadius: "32px"
              }, children: /* @__PURE__ */ n(
                oe,
                {
                  size: "small",
                  onClick: (_) => {
                    _.stopPropagation(), c();
                  },
                  children: /* @__PURE__ */ n(
                    et,
                    {
                      sx: { color: "white" },
                      fontSize: "small"
                    }
                  )
                }
              ) })
            ]
          }
        )
      ]
    },
    `draggable_${o}_${t.id}_${l}`
  );
  return /* @__PURE__ */ n(Is, { container: document.body, children: U });
}
function Lt(e) {
  return /* @__PURE__ */ n(
    B,
    {
      sx: {
        display: "flex",
        width: "100vw",
        maxHeight: "100%",
        maxWidth: "100%",
        height: "100vh",
        "@supports (height: 100dvh)": {
          height: "100dvh"
        }
      },
      children: /* @__PURE__ */ n(B, { m: "auto", children: /* @__PURE__ */ n(yt, { ...e }) })
    }
  );
}
const KA = R.memo(
  function({
    resizeHandleRef: t,
    columnIndex: r,
    isResizingIndex: o,
    sort: i,
    onColumnSort: a,
    onFilterUpdate: s,
    filter: l,
    column: c,
    onClickResizeColumn: d,
    createFilterField: A
  }) {
    const u = ce(null), [h, g] = Q(!1), [f, p] = R.useState(!1), m = y((x) => {
      p(!0);
    }, []);
    y(() => {
      p(!1);
    }, []);
    const w = y((x, I) => {
      s(c, x), I !== void 0 && p(I);
    }, [c, s]), b = o === r, v = !(o !== r && o > 0) && (h || b);
    return /* @__PURE__ */ C(he, { children: [
      /* @__PURE__ */ C(
        se,
        {
          sx: (x) => ({
            width: c.width,
            // position: "relative",
            padding: "0px 12px",
            color: v ? x.palette.text.primary : x.palette.text.secondary,
            backgroundColor: v ? Fe(x.palette.background.default, 0.05) : x.palette.background.default,
            transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "100%",
            fontSize: "0.750rem",
            textTransform: "uppercase",
            fontWeight: 600,
            position: c.frozen ? "sticky" : "relative",
            left: c.frozen ? 0 : void 0,
            zIndex: c.frozen ? 1 : 0,
            userSelect: "none"
          }),
          ref: u,
          wrap: "nowrap",
          alignItems: "center",
          onMouseEnter: () => g(!0),
          onMouseMove: () => g(!0),
          onMouseLeave: () => g(!1),
          container: !0,
          children: [
            /* @__PURE__ */ n(se, { item: !0, xs: !0, sx: {
              overflow: "hidden",
              flexShrink: 1
            }, children: /* @__PURE__ */ C(B, { sx: {
              display: "flex",
              justifyContent: c.headerAlign,
              alignItems: "center",
              flexDirection: "row"
            }, children: [
              /* @__PURE__ */ n(B, { sx: {
                paddingTop: "4px"
              }, children: c.icon && c.icon(h || f) }),
              /* @__PURE__ */ n(B, { sx: {
                display: "-webkit-box",
                margin: "0px 4px",
                overflow: "hidden",
                justifyContent: c.align,
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis"
              }, children: c.title })
            ] }) }),
            c.sortable && (i || v || f) && /* @__PURE__ */ n(se, { item: !0, children: /* @__PURE__ */ n(
              wo,
              {
                color: "secondary",
                variant: "dot",
                overlap: "circular",
                invisible: !i,
                children: /* @__PURE__ */ C(
                  oe,
                  {
                    size: "small",
                    sx: (x) => ({
                      backgroundColor: x.palette.mode === "light" ? "#f5f5f5" : x.palette.background.default
                    }),
                    onClick: () => {
                      a(c.key);
                    },
                    children: [
                      !i && /* @__PURE__ */ n(Do, { fontSize: "small" }),
                      i === "asc" && /* @__PURE__ */ n(Do, { fontSize: "small" }),
                      i === "desc" && /* @__PURE__ */ n(Rl, { fontSize: "small" })
                    ]
                  }
                )
              }
            ) }),
            c.filter && /* @__PURE__ */ n(se, { item: !0, children: /* @__PURE__ */ n(
              wo,
              {
                color: "secondary",
                variant: "dot",
                overlap: "circular",
                invisible: !l,
                children: /* @__PURE__ */ n(
                  oe,
                  {
                    sx: (x) => ({
                      backgroundColor: x.palette.mode === "light" ? "#f5f5f5" : x.palette.background.default
                    }),
                    size: "small",
                    onClick: m,
                    children: /* @__PURE__ */ n(
                      Dl,
                      {
                        fontSize: "small",
                        color: h || f ? void 0 : "disabled"
                      }
                    )
                  }
                )
              }
            ) }),
            c.resizable && /* @__PURE__ */ n(
              B,
              {
                ref: t,
                sx: (x) => ({
                  position: "absolute",
                  height: "100%",
                  width: "4px",
                  top: 0,
                  right: 0,
                  cursor: "col-resize",
                  backgroundColor: v ? x.palette.mode === "dark" ? bt(x.palette.background.default, 0.1) : Fe(x.palette.background.default, 0.15) : void 0
                }),
                onMouseDown: d ? () => d(r, c) : void 0
              }
            )
          ]
        }
      ),
      c.filter && A && /* @__PURE__ */ n(
        eu,
        {
          column: c,
          filter: l,
          onHover: h,
          onFilterUpdate: w,
          createFilterField: A,
          popupOpen: f,
          setPopupOpen: p,
          anchorEl: u
        }
      )
    ] });
  },
  xe
);
function eu({
  column: e,
  onFilterUpdate: t,
  filter: r,
  onHover: o,
  createFilterField: i,
  popupOpen: a,
  setPopupOpen: s,
  anchorEl: l
}) {
  const c = e.key, [d, A] = Q(r);
  if (Y(() => {
    A(r);
  }, [r]), !e.filter)
    return null;
  const u = () => {
    t(d, !1);
  }, h = (p) => {
    t(void 0, !1);
  }, g = !!r, f = i({
    id: c,
    filterValue: d,
    setFilterValue: A,
    column: e,
    popupOpen: a,
    setPopupOpen: s
  });
  return f ? /* @__PURE__ */ n(
    Bi,
    {
      id: `popover_${e.key}`,
      open: a,
      elevation: 3,
      anchorEl: l.current,
      onClose: () => s(!1),
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      children: /* @__PURE__ */ C(B, { sx: (p) => ({
        // backgroundColor: theme.palette.background.default
      }), children: [
        /* @__PURE__ */ n(B, { sx: (p) => ({
          p: 2,
          fontSize: "0.750rem",
          fontWeight: 600,
          textTransform: "uppercase"
        }), children: e.title ?? c }),
        /* @__PURE__ */ n(Gn, {}),
        f && /* @__PURE__ */ n(B, { p: 2, children: f }),
        /* @__PURE__ */ C(
          B,
          {
            display: "flex",
            justifyContent: "flex-end",
            m: 2,
            children: [
              /* @__PURE__ */ n(B, { mr: 1, children: /* @__PURE__ */ n(
                de,
                {
                  disabled: !g,
                  color: "primary",
                  type: "reset",
                  "aria-label": "filter clear",
                  onClick: h,
                  children: "Clear"
                }
              ) }),
              /* @__PURE__ */ n(
                de,
                {
                  variant: "outlined",
                  color: "primary",
                  onClick: u,
                  children: "Filter"
                }
              )
            ]
          }
        )
      ] })
    }
  ) : null;
}
const tu = ({
  columns: e,
  currentSort: t,
  onColumnSort: r,
  onFilterUpdate: o,
  sortByProperty: i,
  filter: a,
  onColumnResize: s,
  onColumnResizeEnd: l,
  createFilterField: c
}) => {
  const d = e.map(() => bs()), [A, u] = Q(-1), h = y((v, x, I) => {
    const k = e[v], F = 100, S = 800, D = x > S ? S : x < F ? F : x, P = {
      width: D,
      key: k.key,
      column: {
        ...k,
        width: D
      }
    };
    I ? l(P) : s(P);
  }, [e, s, l]), g = y((v) => {
    if (A >= 0) {
      const x = d[A].current?.parentElement?.getBoundingClientRect().left;
      return x ? v.clientX - x : void 0;
    }
  }, [d, A]), f = y((v) => {
    document.body.style.cursor = v ? "col-resize" : "auto";
  }, []), p = y((v) => {
    v.stopPropagation(), v.preventDefault();
    const x = g(v);
    x && h(A, x, !1);
  }, [h, g, A]), m = y((v) => {
    v.stopPropagation(), v.preventDefault();
    const x = g(v);
    x && h(A, x, !0), u(-1), f(!1);
  }, [h, g, A, f]), w = y(() => {
    document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", m);
  }, [p, m]), b = y(() => {
    document.addEventListener("mousemove", p), document.addEventListener("mouseup", m);
  }, [p, m]);
  Y(() => (A >= 0 ? b() : w(), () => {
    w();
  }), [b, A, w]);
  const E = y((v) => {
    u(v), f(!0);
  }, [f]);
  return /* @__PURE__ */ n(B, { sx: (v) => ({
    position: "sticky",
    minWidth: "100%",
    backgroundColor: v.palette.background.default,
    display: "flex",
    width: "fit-content",
    flexDirection: "row",
    top: 0,
    left: 0,
    zIndex: 2,
    height: 50,
    borderBottom: `1px solid ${v.palette.divider}`
  }), children: e.map((v, x) => {
    const I = e[x], k = I && a && a[I.key] ? a[I.key] : void 0;
    return /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
      KA,
      {
        resizeHandleRef: d[x],
        columnIndex: x,
        isResizingIndex: A,
        onFilterUpdate: o,
        filter: k,
        sort: i === I.key ? t : void 0,
        onColumnSort: r,
        onClickResizeColumn: E,
        column: I,
        createFilterField: c
      }
    ) }, "header_" + I.key);
  }) });
}, nu = Ss("div", {})(({
  theme: e,
  size: t,
  cursor: r,
  hovered: o
}) => ({
  display: "flex",
  minWidth: "100%",
  height: Gt(t),
  cursor: r,
  flexDirection: "row",
  fontSize: "0.875rem",
  borderBottom: `1px solid ${e.palette.divider}`,
  backgroundColor: o ? e.palette.mode === "dark" ? bt(e.palette.background.paper, 0.01) : "rgb(252, 252, 253)" : void 0
})), ru = R.memo(
  function({
    rowData: t,
    rowIndex: r,
    children: o,
    onRowClick: i,
    size: a,
    style: s,
    hoverRow: l
  }) {
    const [c, d] = Q(!1), A = y((g) => i ? i({
      rowData: t,
      rowIndex: r,
      event: g
    }) : void 0, [i, t, r]), u = y(() => d(!0), []), h = y(() => d(!1), []);
    return /* @__PURE__ */ n(
      nu,
      {
        onClick: A,
        size: a,
        cursor: i ? "pointer" : void 0,
        hovered: l && c,
        style: { ...s, width: "fit-content" },
        onMouseEnter: u,
        onMouseMove: u,
        onMouseLeave: h,
        children: o
      }
    );
  },
  xe
), ou = R.memo(
  function(t) {
    return t.rowData && t.cellRenderer(
      {
        cellData: t.cellData,
        rowData: t.rowData,
        rowIndex: t.rowIndex,
        isScrolling: !1,
        column: t.column,
        columns: t.columns,
        columnIndex: t.columnIndex,
        width: t.column.width
      }
    );
  },
  (e, t) => xe(e, t)
), Zn = yi({});
Zn.displayName = "VirtualListContext";
const iu = vs(({
  children: e,
  ...t
}, r) => /* @__PURE__ */ n(Zn.Consumer, { children: (o) => {
  const i = o.customView;
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        id: "virtual-table",
        style: {
          position: "relative",
          height: "100%"
        },
        children: /* @__PURE__ */ C(
          "div",
          {
            ref: r,
            ...t,
            style: {
              ...t?.style,
              minHeight: "100%",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ n(tu, { ...o }),
              !i && e
            ]
          }
        )
      }
    ),
    i && /* @__PURE__ */ n("div", { style: {
      position: "sticky",
      top: "56px",
      flexGrow: 1,
      height: "calc(100% - 56px)",
      marginTop: "calc(56px - 100vh)",
      left: 0
    }, children: i })
  ] });
} })), au = R.memo(
  function({
    data: t,
    onResetPagination: r,
    onEndReached: o,
    size: i = "m",
    columns: a,
    onRowClick: s,
    onColumnResize: l,
    filter: c,
    checkFilterCombination: d,
    onFilterUpdate: A,
    sortBy: u,
    error: h,
    emptyMessage: g,
    onSortByUpdate: f,
    loading: p,
    cellRenderer: m,
    hoverRow: w,
    createFilterField: b
  }) {
    const E = u ? u[0] : void 0, v = u ? u[1] : void 0, [x, I] = Q(a), k = ce(null), F = ce(0);
    Y(() => {
      I(a);
    }, [a]);
    const [S, D] = Hr(), P = y((J) => {
      I(x.map((M) => M.key === J.column.key ? J.column : M));
    }, [x]), T = y((J) => {
      I(x.map((M) => M.key === J.column.key ? J.column : M)), l && l(J);
    }, [x, l]), O = ce();
    Y(() => {
      O.current = c;
    }, [c]);
    const ne = y(() => {
      F.current = 0, k.current && k.current.scrollTo(k.current?.scrollLeft, 0);
    }, []), L = y((J) => {
      const M = E === J && v === "desc", K = E === J && v === "asc" ? "desc" : M ? void 0 : "asc", W = M ? void 0 : J, ge = O.current, be = K && W ? [W, K] : void 0;
      ge && d && !d(ge, be) && A && A(void 0), r && r(), f && f(be), ne();
    }, [d, v, A, r, f, ne, E]), U = y(() => {
      F.current = 0, f && f(void 0);
    }, [f]), _ = Math.max((t?.length ?? 0) * Gt(i) - D.height, 0), ee = y((J) => {
      o && (t?.length ?? 0) > 0 && J > F.current + 500 && (F.current = J, o());
    }, [t, o]), $ = y(({
      scrollOffset: J,
      scrollUpdateWasRequested: M
    }) => {
      !M && J >= _ - 500 && ee(J);
    }, [_, ee]), G = y((J, M) => {
      F.current = 0;
      const j = O.current;
      let K = j ? { ...j } : {};
      M ? K[J.key] = M : delete K[J.key], !d || d(K, E && v ? [E, v] : void 0) || (K = M ? { [J.key]: M } : {}), A && A(K), J.key !== E && U();
    }, [d, v, A, U, E]), H = y(() => /* @__PURE__ */ C(
      B,
      {
        sx: {
          height: "calc(100% - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "sticky",
          left: 0
        },
        children: [
          /* @__PURE__ */ n(X, { variant: "h6", children: "Error fetching data from the data source" }),
          h?.message && /* @__PURE__ */ n(X, { children: h?.message })
        ]
      }
    ), [h?.message]), V = y(() => p ? /* @__PURE__ */ n(Lt, {}) : /* @__PURE__ */ C(B, { sx: {
      display: "flex",
      overflow: "auto",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
      gap: 2,
      height: "100%"
    }, children: [
      /* @__PURE__ */ n(Sl, {}),
      /* @__PURE__ */ n(X, { children: g })
    ] }), [g, p]), z = !p && (t?.length ?? 0) === 0, Z = h ? H() : z ? V() : void 0;
    return /* @__PURE__ */ n(
      B,
      {
        ref: S,
        sx: {
          height: "100%",
          width: "100%"
        },
        children: /* @__PURE__ */ n(
          Zn.Provider,
          {
            value: {
              data: t,
              size: i,
              cellRenderer: m,
              columns: x,
              currentSort: v,
              onRowClick: s,
              customView: Z,
              onColumnResize: P,
              onColumnResizeEnd: T,
              filter: O.current,
              onColumnSort: L,
              onFilterUpdate: G,
              sortByProperty: E,
              hoverRow: w ?? !1,
              createFilterField: b
            },
            children: /* @__PURE__ */ n(
              su,
              {
                outerRef: k,
                width: D.width,
                height: D.height,
                itemCount: t?.length ?? 0,
                onScroll: $,
                itemSize: Gt(i)
              },
              i
            )
          }
        )
      }
    );
  },
  xe
);
function su({
  outerRef: e,
  width: t,
  height: r,
  itemCount: o,
  onScroll: i,
  itemSize: a
}) {
  const s = y(({
    index: l,
    style: c
  }) => /* @__PURE__ */ n(Zn.Consumer, { children: ({
    onRowClick: d,
    data: A,
    columns: u,
    size: h = "m",
    cellRenderer: g,
    hoverRow: f
  }) => {
    const p = A && A[l];
    return /* @__PURE__ */ n(
      ru,
      {
        rowData: p,
        rowIndex: l,
        onRowClick: d,
        columns: u,
        hoverRow: f,
        style: {
          ...c,
          top: `calc(${c.top}px + 50px)`
        },
        size: h,
        children: u.map((m, w) => {
          const b = p && p[m.key];
          return /* @__PURE__ */ n(
            ou,
            {
              dataKey: m.key,
              cellRenderer: g,
              column: m,
              columns: u,
              rowData: p,
              cellData: b,
              rowIndex: l,
              columnIndex: w
            },
            `cell_${m.key}`
          );
        })
      },
      `row_${l}`
    );
  } }), []);
  return /* @__PURE__ */ n(
    Fl,
    {
      outerRef: e,
      innerElementType: iu,
      width: t,
      height: r,
      overscanCount: 4,
      itemCount: o,
      onScroll: i,
      itemSize: a,
      children: s
    }
  );
}
function po({
  entity: e,
  width: t,
  frozen: r,
  isSelected: o,
  selectionEnabled: i,
  size: a,
  toggleEntitySelection: s,
  onCopyClicked: l,
  onEditClicked: c,
  onDeleteClicked: d,
  hideId: A
}) {
  const u = Be(), h = He(u.breakpoints.up("md")), g = !!c, f = !!l, p = !!d, [m, w] = R.useState(null), b = y((F) => {
    w(F.currentTarget), F.stopPropagation();
  }, [w]), E = y(() => {
    w(null);
  }, [w]), v = y((F) => {
    s && s(e), F.preventDefault(), F.stopPropagation();
  }, [e, s]), x = y((F) => {
    F.stopPropagation(), d && d(e), w(null);
  }, [e, d, w]), I = y((F) => {
    F.stopPropagation(), l && l(e), w(null);
  }, [e, l, w]), k = y((F) => {
    F.stopPropagation(), s && s(e);
  }, [e, s]);
  return /* @__PURE__ */ C(
    B,
    {
      style: {
        width: t
      },
      onClick: k,
      sx: (F) => ({
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: r ? "sticky" : "initial",
        left: r ? 0 : "initial",
        background: F.palette.mode === "dark" ? an(F.palette.background.default, 0.96) : an(F.palette.background.default, 0.96),
        // backdropFilter: frozen ? "blur(8px)" : undefined,
        contain: "strict",
        zIndex: 1
      }),
      children: [
        (g || p || i) && /* @__PURE__ */ C(B, { sx: {
          minWidth: 138,
          display: "flex",
          justifyContent: "center"
        }, children: [
          g && /* @__PURE__ */ n(me, { title: `Edit ${e.id}`, children: /* @__PURE__ */ n(
            oe,
            {
              onClick: (F) => {
                F.stopPropagation(), c && c(e);
              },
              size: h ? "medium" : "small",
              children: /* @__PURE__ */ n(qs, {})
            }
          ) }),
          i && /* @__PURE__ */ n(me, { title: `Select ${e.id}`, children: /* @__PURE__ */ n(
            Ln,
            {
              size: h ? "medium" : "small",
              checked: o,
              onChange: v
            }
          ) }),
          (f || p) && /* @__PURE__ */ n(
            oe,
            {
              onClick: b,
              size: h ? "medium" : "small",
              children: /* @__PURE__ */ n(Pi, {})
            }
          ),
          (f || p) && /* @__PURE__ */ C(
            ki,
            {
              anchorEl: m,
              open: !!m,
              onClose: E,
              elevation: 3,
              children: [
                p && /* @__PURE__ */ C(Te, { onClick: x, children: [
                  /* @__PURE__ */ n(Bn, { children: /* @__PURE__ */ n(xr, {}) }),
                  /* @__PURE__ */ n(Qt, { primary: "Delete" })
                ] }),
                f && /* @__PURE__ */ C(Te, { onClick: I, children: [
                  /* @__PURE__ */ n(Bn, { children: /* @__PURE__ */ n(Zs, {}) }),
                  /* @__PURE__ */ n(Qt, { primary: "Copy" })
                ] })
              ]
            }
          )
        ] }),
        !A && a !== "xs" && /* @__PURE__ */ n(B, { sx: {
          width: 138,
          textAlign: "center",
          textOverflow: "ellipsis",
          overflow: "hidden"
        }, children: e ? /* @__PURE__ */ C(
          X,
          {
            className: "mono",
            variant: "caption",
            color: "textSecondary",
            children: [
              " ",
              e.id,
              " "
            ]
          }
        ) : /* @__PURE__ */ n(Xe, { variant: "text" }) })
      ]
    }
  );
}
function ja({
  onTextSearch: e,
  placeholder: t = "Search",
  expandable: r = !1,
  large: o = !1
}) {
  const [i, a] = Q(""), [s, l] = Q(!1), c = $r(i);
  R.useEffect(() => {
    e(c || void 0);
  }, [c]);
  const d = y(() => {
    a(""), e(void 0);
  }, []);
  return /* @__PURE__ */ C(B, { sx: (A) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: o ? 56 : 40,
    width: r ? void 0 : "100%",
    minWidth: "200px",
    borderRadius: `${A.shape.borderRadius}px`,
    backgroundColor: A.palette.mode === "light" ? mt(A.palette.background.default, 0.05) : mt(A.palette.background.default, 0.2),
    "&:hover": {
      backgroundColor: A.palette.mode === "light" ? mt(A.palette.background.default, 0.08) : mt(A.palette.background.default, 0.3)
    },
    [A.breakpoints.up("sm")]: {
      width: "auto"
    }
  }), children: [
    /* @__PURE__ */ n(B, { sx: (A) => ({
      padding: A.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }), children: /* @__PURE__ */ n(Nl, { htmlColor: "#888" }) }),
    /* @__PURE__ */ n(
      Ji,
      {
        placeholder: t,
        value: i,
        onChange: (A) => {
          a(A.target.value);
        },
        onFocus: () => l(!0),
        onBlur: () => l(!1),
        sx: {
          width: r ? void 0 : "100%",
          color: "inherit",
          minHeight: "inherit"
        },
        inputProps: {
          sx: (A) => ({
            padding: A.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${A.spacing(4)})`,
            transition: A.transitions.create("width"),
            width: "100%",
            [A.breakpoints.up("sm")]: {
              width: r ? s ? "20ch" : "12ch" : "100%"
            }
          }),
          "aria-label": t
        },
        endAdornment: i ? /* @__PURE__ */ n(
          oe,
          {
            sx: { mr: o ? 2 : 1 },
            size: "small",
            onClick: d,
            children: /* @__PURE__ */ n(et, { fontSize: "small" })
          }
        ) : /* @__PURE__ */ n("div", { style: { width: 26 } })
      }
    )
  ] });
}
const lu = tt(Ji)(({ theme: e }) => ({
  "label + &": {
    // marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: e.palette.mode === "light" ? Hs(e.palette.common.black, 0.05) : mt(e.palette.background.default, 0.2),
    fontSize: 14,
    fontWeight: e.typography.fontWeightMedium,
    padding: "8px 26px 8px 12px",
    transition: e.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4
    }
  }
}));
function cu(e) {
  return /* @__PURE__ */ n(
    $l,
    {
      input: /* @__PURE__ */ n(lu, {}),
      renderValue: (t) => t.toUpperCase(),
      ...e,
      MenuProps: {
        MenuListProps: {
          disablePadding: !0,
          style: {
            borderRadius: 4
          }
        },
        elevation: 1
      },
      children: e.children
    }
  );
}
function du(e) {
  return /* @__PURE__ */ n(
    Le,
    {
      ...e,
      sx: (t) => ({
        backgroundColor: t.palette.background.default,
        fontSize: 14,
        fontWeight: t.typography.fontWeightMedium,
        paddingTop: t.spacing(1),
        paddingBottom: t.spacing(1),
        "&:hover": {
          backgroundColor: mt(t.palette.background.default, 0.1)
        },
        "&:focus": {
          backgroundColor: mt(t.palette.background.default, 0.2),
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: t.palette.text.primary
          }
        }
      }),
      children: e.children
    }
  );
}
function Au(e) {
  const t = Be(), r = He(t.breakpoints.up("md")), o = !e.forceFilter && e.filterIsSet && /* @__PURE__ */ n(me, { title: "Clear filter", children: /* @__PURE__ */ n(
    oe,
    {
      sx: { height: "fit-content" },
      "aria-label": "filter clear",
      onClick: e.clearFilter,
      size: "medium",
      children: /* @__PURE__ */ n(tc, {})
    }
  ) }), i = /* @__PURE__ */ n(
    cu,
    {
      variant: "standard",
      value: e.size,
      sx: {
        width: 56,
        height: 40
      },
      onChange: (a) => e.onSizeChanged(a.target.value),
      renderValue: (a) => a.toUpperCase(),
      children: ["xs", "s", "m", "l", "xl"].map((a) => /* @__PURE__ */ n(
        du,
        {
          value: a,
          children: a.toUpperCase()
        },
        `size-select-${a}`
      ))
    }
  );
  return /* @__PURE__ */ C(
    B,
    {
      sx: {
        minHeight: 56,
        overflowX: "auto",
        [t.breakpoints.down("sm")]: {
          px: t.spacing(1)
        },
        px: t.spacing(2),
        backgroundColor: t.palette.background.default,
        borderBottom: `1px solid ${t.palette.divider}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ C(
          B,
          {
            display: "flex",
            alignItems: "center",
            sx: {
              "& > *": {
                [t.breakpoints.down("md")]: {
                  marginRight: `${t.spacing(1)} !important`
                },
                marginRight: `${t.spacing(2)} !important`
              }
            },
            children: [
              e.title && /* @__PURE__ */ n(Ii, { lgDown: !0, children: e.title }),
              i,
              e.actionsStart,
              o
            ]
          }
        ),
        /* @__PURE__ */ C(B, { sx: {
          display: "flex",
          alignItems: "center",
          "& > *": {
            [t.breakpoints.down("md")]: {
              marginRight: `${t.spacing(0.5)} !important`
            },
            marginRight: `${t.spacing(1)} !important`
          }
        }, children: [
          r && /* @__PURE__ */ n(B, { width: 22, children: e.loading && /* @__PURE__ */ n(yt, { size: 16, thickness: 8 }) }),
          e.onTextSearch && /* @__PURE__ */ n(
            ja,
            {
              onTextSearch: e.onTextSearch,
              expandable: !0
            },
            "search-bar"
          ),
          e.actions
        ] })
      ]
    }
  );
}
const uu = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "In",
  "not-in": "Not in",
  "array-contains": "Contains",
  "array-contains-any": "Contains Any"
}, fr = ["array-contains-any", "in", "not-in"];
function fu({
  name: e,
  value: t,
  setValue: r,
  isArray: o,
  path: i,
  title: a,
  previewProperties: s,
  setPopupOpen: l
}) {
  const c = o ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="], [d, A] = R.useState(!1);
  o ? c.push("array-contains-any") : c.push("in", "not-in");
  const [u, h] = t || [c[0], void 0], [g, f] = Q(u), [p, m] = Q(h), w = p ? Array.isArray(p) ? p.map((P) => P.id) : [p.id] : [];
  function b(P, T) {
    const O = fr.includes(g), ne = fr.includes(P);
    let L = T;
    O !== ne && (L = ne ? L instanceof _e ? [L] : [] : void 0), f(P), m(L);
    const U = L !== null && Array.isArray(L) ? L.length > 0 : L !== void 0;
    r(
      P && U ? [P, L] : void 0
    );
  }
  const E = ke(), v = le(() => i ? E.getCollection(i) : void 0, [i]), x = (P) => {
    b(g, $t(P));
  }, I = (P) => {
    b(g, P.map((T) => $t(T)));
  }, k = fr.includes(g), F = Un(
    {
      multiselect: k,
      path: i,
      collection: v,
      onSingleEntitySelected: x,
      onMultipleEntitiesSelected: I,
      selectedEntityIds: w,
      onClose: () => {
        l(!0);
      }
    }
  ), S = () => {
    l(!1), F.open();
  }, D = (P) => /* @__PURE__ */ n(
    B,
    {
      sx: { mb: 0.5 },
      onMouseEnter: () => A(!0),
      onMouseMove: () => A(!0),
      onMouseLeave: () => A(!1),
      children: /* @__PURE__ */ n(
        xt,
        {
          disabled: !i,
          previewProperties: s,
          size: "regular",
          onClick: S,
          reference: P,
          onHover: d,
          allowEntityNavigation: !1
        }
      )
    }
  );
  return /* @__PURE__ */ C(
    B,
    {
      display: "flex",
      width: 440,
      flexDirection: "row",
      children: [
        /* @__PURE__ */ n(B, { width: 120, children: /* @__PURE__ */ n(we, { fullWidth: !0, children: /* @__PURE__ */ n(
          Ke,
          {
            value: g,
            fullWidth: !0,
            onChange: (P) => {
              b(P.target.value, p);
            },
            children: c.map(
              (P) => /* @__PURE__ */ n(
                Te,
                {
                  value: P,
                  children: uu[P]
                },
                `filter_op_${e}_${P}`
              )
            )
          }
        ) }) }),
        /* @__PURE__ */ n(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ C(
          we,
          {
            fullWidth: !0,
            sx: { height: "100%" },
            children: [
              p && Array.isArray(p) && /* @__PURE__ */ n(B, { children: p.map((P, T) => D(P)) }),
              p && !Array.isArray(p) && /* @__PURE__ */ n(B, { children: D(p) }),
              (!p || Array.isArray(p) && p.length === 0) && /* @__PURE__ */ n(
                de,
                {
                  onClick: S,
                  sx: { height: "100%" },
                  children: k ? "Select references" : "Select reference"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
const hu = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "In",
  "not-in": "Not in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
}, hr = ["array-contains-any", "in", "not-in"];
function gu({
  name: e,
  value: t,
  setValue: r,
  dataType: o,
  isArray: i,
  enumValues: a,
  title: s
}) {
  const l = i ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="];
  a && (i ? l.push("array-contains-any") : l.push("in", "not-in"));
  const [c, d] = t || [l[0], void 0], [A, u] = Q(c), [h, g] = Q(d);
  function f(m, w) {
    let b = w;
    const E = hr.includes(A), v = hr.includes(m);
    E !== v && (b = v ? typeof w == "string" || typeof w == "number" ? [w] : [] : ""), typeof b == "number" && isNaN(b) && (b = void 0), u(m), g(b);
    const x = b !== null && Array.isArray(b) ? b.length > 0 : b !== void 0;
    r(
      m && x ? [m, b] : void 0
    );
  }
  const p = hr.includes(A);
  return /* @__PURE__ */ C(B, { display: "flex", width: 440, alignItems: "center", children: [
    /* @__PURE__ */ n(B, { width: 80, children: /* @__PURE__ */ n(we, { fullWidth: !0, children: /* @__PURE__ */ n(
      Ke,
      {
        value: A,
        fullWidth: !0,
        onChange: (m) => {
          f(m.target.value, h);
        },
        children: l.map(
          (m) => /* @__PURE__ */ n(
            Te,
            {
              value: m,
              children: hu[m]
            },
            `filter_op_${e}_${m}`
          )
        )
      }
    ) }) }),
    /* @__PURE__ */ n(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ C(we, { fullWidth: !0, children: [
      !a && /* @__PURE__ */ n(
        Fs,
        {
          fullWidth: !0,
          type: o === "number" ? "number" : void 0,
          value: h !== void 0 ? h : "",
          onChange: (m) => {
            const w = o === "number" ? parseFloat(m.target.value) : m.target.value;
            f(A, w);
          },
          endAdornment: h && /* @__PURE__ */ n(
            oe,
            {
              sx: {
                position: "absolute",
                right: "12px",
                top: "8px"
              },
              onClick: (m) => f(A, void 0),
              children: /* @__PURE__ */ n(et, {})
            }
          )
        },
        `filter_${e}`
      ),
      a && /* @__PURE__ */ n(
        Ke,
        {
          fullWidth: !0,
          multiple: p,
          value: h !== void 0 ? h : i ? [] : "",
          onChange: (m) => f(A, o === "number" ? parseInt(m.target.value) : m.target.value),
          endAdornment: h && /* @__PURE__ */ n(
            oe,
            {
              sx: {
                position: "absolute",
                right: "12px",
                top: "8px"
              },
              onClick: (m) => f(A, void 0),
              children: /* @__PURE__ */ n(et, {})
            }
          ),
          renderValue: p ? (m) => /* @__PURE__ */ n("div", { children: m.map((w) => /* @__PURE__ */ n(
            Ve,
            {
              enumKey: w,
              enumValues: a,
              small: !0
            },
            `select_value_${e}_${w}`
          )) }) : void 0,
          children: a.map((m) => /* @__PURE__ */ n(
            Te,
            {
              value: m.id,
              children: /* @__PURE__ */ n(
                Ve,
                {
                  enumKey: m.id,
                  enumValues: a,
                  small: !0
                }
              )
            },
            `select_${e}_${m.id}`
          ))
        },
        `filter-select-${p}-${e}`
      )
    ] }) })
  ] });
}
const di = "BooleanFilterField", Dr = {
  formControl: `${di}-formControl`,
  label: `${di}-label`
}, pu = tt(
  "div"
)(({ theme: e }) => ({
  [`& .${Dr.formControl}`]: {
    width: "200px"
  },
  [`& .${Dr.label}`]: {
    width: "100%",
    height: "100%"
  }
}));
function mu({
  name: e,
  title: t,
  value: r,
  setValue: o
}) {
  function i(l) {
    o(
      l !== void 0 ? ["==", l] : void 0
    );
  }
  const a = r && r[1], s = !!r;
  return /* @__PURE__ */ n(pu, { children: /* @__PURE__ */ n(
    Lr,
    {
      className: Dr.formControl,
      labelPlacement: "end",
      checked: s && a,
      control: /* @__PURE__ */ n(
        Ln,
        {
          indeterminate: !s,
          onChange: (l) => {
            i(a ? !1 : s ? void 0 : !0);
          }
        },
        `filter-${e}`
      ),
      label: s ? a ? `${t} is true` : `${t} is false` : "No filter"
    }
  ) });
}
function mo({
  mode: e,
  value: t,
  onChange: r,
  disabled: o,
  clearable: i,
  small: a
}) {
  return /* @__PURE__ */ n(
    e === void 0 || e === "date_time" ? Jr : _r,
    {
      value: t ?? null,
      disabled: o,
      renderInput: (l) => /* @__PURE__ */ n(
        ot,
        {
          ...l,
          fullWidth: !0,
          disabled: o,
          sx: (c) => ({
            height: a ? "48px" : "56px",
            borderRadius: `${c.shape.borderRadius}px`
          }),
          InputProps: {
            ...l.InputProps,
            sx: (c) => ({
              height: a ? "48px" : "56px",
              borderRadius: `${c.shape.borderRadius}px`,
              padding: a ? "0 0px" : void 0
            }),
            disableUnderline: !0,
            endAdornment: i ? /* @__PURE__ */ C(
              B,
              {
                sx: {
                  pr: 2,
                  gap: 2
                },
                children: [
                  /* @__PURE__ */ n(
                    oe,
                    {
                      sx: {
                        position: "absolute",
                        right: "56px",
                        top: "8px"
                      },
                      onClick: (c) => r?.(null),
                      children: /* @__PURE__ */ n(et, {})
                    }
                  ),
                  l.InputProps?.endAdornment
                ]
              }
            ) : null
          },
          variant: "filled"
        }
      ),
      onChange: r
    }
  );
}
const bu = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
}, Ai = ["array-contains-any", "in"];
function vu({
  name: e,
  isArray: t,
  mode: r,
  value: o,
  setValue: i,
  title: a
}) {
  const s = t ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="], [l, c] = o || [s[0], void 0], [d, A] = Q(l), [u, h] = Q(c);
  function g(f, p) {
    let m = p;
    const w = Ai.includes(d), b = Ai.includes(f);
    w !== b && (m = b ? p ? [p] : [] : ""), A(f), h(m === null ? void 0 : m);
    const E = m !== null && Array.isArray(m) ? m.length > 0 : m !== void 0;
    i(
      f && E ? [f, m] : void 0
    );
  }
  return /* @__PURE__ */ C(B, { display: "flex", width: 440, alignItems: "center", children: [
    /* @__PURE__ */ n(B, { width: 80, children: /* @__PURE__ */ n(we, { fullWidth: !0, children: /* @__PURE__ */ n(
      Ke,
      {
        value: d,
        fullWidth: !0,
        onChange: (f) => {
          g(f.target.value, u);
        },
        children: s.map(
          (f) => /* @__PURE__ */ n(
            Te,
            {
              value: f,
              children: bu[f]
            },
            `filter_op_${e}_${f}`
          )
        )
      }
    ) }) }),
    /* @__PURE__ */ n(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ n(
      mo,
      {
        mode: r,
        value: u,
        onChange: (f) => {
          g(d, f === null ? void 0 : f);
        },
        clearable: !0
      }
    ) })
  ] });
}
const xu = {}, Ha = R.createContext(xu), wu = () => ze(Ha), bo = "collectionGroupParent", _a = R.memo(
  function({
    fullPath: t,
    initialFilter: r,
    initialSort: o,
    filterCombinations: i,
    forceFilter: a,
    actionsStart: s,
    actions: l,
    title: c,
    tableRowActionsBuilder: d,
    selectionController: A,
    highlightedEntities: u,
    onEntityClick: h,
    onColumnResize: g,
    onSizeChanged: f,
    textSearchEnabled: p = !1,
    hoverRow: m = !0,
    inlineEditing: w = !1,
    tableController: {
      data: b,
      dataLoading: E,
      noMoreToLoad: v,
      dataLoadingError: x,
      filterValues: I,
      setFilterValues: k,
      sortBy: F,
      setSortBy: S,
      searchString: D,
      setSearchString: P,
      clearFilter: T,
      itemCount: O,
      setItemCount: ne,
      pageSize: L,
      paginationEnabled: U,
      checkFilterCombination: _
    },
    ...ee
  }) {
    const $ = ke(), G = Be(), H = He(G.breakpoints.up("md")), V = !!a, z = A?.selectedEntities?.length > 0 ? A?.selectedEntities : u, Z = R.useRef(Math.random().toString(36)), J = ie(), M = Ue(), j = Et(), K = le(() => Ie({
      collection: ee,
      path: t,
      fields: J.fields
    }), [ee, t]), [W, ge] = R.useState(K.defaultSize ?? "m"), [be, ae] = R.useState(void 0), [re, at] = R.useState(void 0), [Nt, At] = R.useState(!1), St = z?.map((te) => te.id), Ft = !!I && Object.keys(I).length > 0, st = le(() => {
      const te = ee.subcollections?.map((Ae) => ({
        id: Na(Ae),
        name: Ae.name,
        width: 200,
        dependencies: [],
        Builder: ({ entity: fe }) => /* @__PURE__ */ n(
          de,
          {
            color: "primary",
            variant: "outlined",
            startIcon: /* @__PURE__ */ n(
              jr,
              {
                fontSize: "small"
              }
            ),
            onClick: (pe) => {
              pe.stopPropagation(), j.open({
                path: t,
                entityId: fe.id,
                selectedSubPath: Ae.alias ?? Ae.path,
                collection: ee,
                updateUrl: !0
              });
            },
            children: Ae.name
          }
        )
      })) ?? [], ye = ee.collectionGroup ? [{
        id: bo,
        name: "Parent entities",
        width: 260,
        dependencies: [],
        Builder: ({ entity: Ae }) => {
          const fe = $.getParentReferencesFromPath(Ae.path);
          return /* @__PURE__ */ n(q, { children: fe.map((pe) => /* @__PURE__ */ n(
            xt,
            {
              reference: pe,
              size: "tiny"
            },
            pe.path + "/" + pe.id
          )) });
        }
      }] : [];
      return [
        ...ee.additionalFields ?? ee.additionalColumns ?? [],
        ...te,
        ...ye
      ];
    }, [ee, t]), Xn = y(
      ({
        name: te,
        value: ye,
        property: Ae,
        entityId: fe
      }) => M.checkUniqueField(t, te, ye, Ae, fe),
      [t]
    ), gn = () => {
      !U || E || v || O !== void 0 && ne(O + L);
    }, pn = y(() => {
      ne(L);
    }, [L]), mn = y(({ rowData: te }) => {
      if (!w)
        return h && h(te);
    }, [h, w]), Kn = y((te) => {
      f && f(te), ge(te);
    }, []), er = y((te) => P(te), []), ut = le(() => st ? st.map((te) => ({ [te.id]: te })).reduce((te, ye) => ({ ...te, ...ye }), {}) : {}, [st]);
    Y(() => {
      const te = (ye) => {
        ye.keyCode === 27 && nr();
      };
      return document.addEventListener("keydown", te, !1), () => {
        document.removeEventListener("keydown", te, !1);
      };
    });
    const tr = y((te) => {
      ae(te), At(!0);
    }, []), nr = y(() => {
      ae(void 0), At(!1);
    }, []), rr = y(() => {
      at(void 0), At(!0);
    }, []), bn = Eu(K, !0), jt = Xn, N = y(({
      column: te,
      columnIndex: ye,
      rowData: Ae,
      rowIndex: fe
    }) => {
      const pe = Ae, Je = te.key, qt = Ga(ee.properties, Je);
      if (!qt)
        return null;
      const Rt = We({
        propertyKey: Je,
        propertyOrBuilder: qt,
        path: t,
        propertyValue: pe.values ? dt(pe.values, Je) : void 0,
        values: pe.values,
        entityId: pe.id,
        fields: J.fields
      });
      return Rt ? /* @__PURE__ */ n(he, { children: pe ? /* @__PURE__ */ n(
        jA,
        {
          readonly: !w,
          align: te.align ?? "left",
          propertyKey: Je,
          property: Rt,
          setFocused: At,
          value: pe?.values ? dt(pe.values, Je) : void 0,
          collection: ee,
          customFieldValidator: jt,
          columnIndex: ye,
          width: te.width,
          height: Gt(W),
          entity: pe,
          path: pe.path
        },
        `property_table_cell_${pe.id}_${Je}`
      ) : rt() }) : null;
    }, [ee, jt, t, w, W, St]), ue = y(({
      column: te,
      rowData: ye,
      width: Ae
    }) => {
      const fe = ye, pe = ut[te.key], Je = pe.dependencies ? Object.entries(fe.values).filter(([Rt, xo]) => pe.dependencies.includes(Rt)).reduce((Rt, xo) => ({ ...Rt, ...xo }), {}) : fe;
      pe.builder && console.warn("`additionalField.builder` is deprecated. Use `additionalField.Builder` instead.");
      const qt = pe.builder ?? pe.Builder;
      if (!qt)
        throw new Error("No builder provided for additional field");
      return /* @__PURE__ */ n(
        Rr,
        {
          width: Ae,
          size: W,
          focused: Nt,
          value: Je,
          selected: !1,
          selectedRow: St?.includes(fe.id) ?? !1,
          disabled: !0,
          align: "left",
          allowScroll: !1,
          showExpandIcon: !1,
          disabledTooltip: "This column can't be edited directly",
          children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
            qt,
            {
              entity: fe,
              context: J
            }
          ) })
        },
        `additional_table_cell_${fe.id}_${te.key}`
      );
    }, [ut, W, St]), ve = le(
      () => {
        const te = Object.entries(K.properties).flatMap(([Ae, fe]) => fe.dataType === "map" && fe.spreadChildren && fe.properties ? Object.keys(fe.properties).map((pe) => `${Ae}.${pe}`) : [Ae]).map((Ae) => {
          const fe = La(K.properties, Ae);
          if (!fe)
            throw Error("Internal error: no property found in path " + Ae);
          const pe = qa(fe);
          return {
            key: Ae,
            align: RA(fe),
            icon: (Je) => Re(fe, Je ? void 0 : "disabled", "small"),
            title: fe.name ?? Ae,
            sortable: a ? Object.keys(a).includes(Ae) : !0,
            filter: !V && pe,
            width: Ua(fe),
            resizable: !0,
            custom: fe
          };
        }), ye = st ? st.map((Ae) => ({
          key: Ae.id,
          type: "additional",
          align: "left",
          sortable: !1,
          title: Ae.name,
          width: Ae.width ?? 200
        })) : [];
        return [...te, ...ye];
      },
      [st, V, a, K.properties]
    ), ft = le(() => ({
      key: "id_ewcfedcswdf3",
      width: H ? 160 : 130,
      title: "ID",
      resizable: !1,
      frozen: H,
      headerAlign: "center"
    }), [H]), Ht = le(() => [
      ft,
      ...bn.map((te) => ve.find((ye) => ye.key === te)).filter((te) => !!te)
    ], [ve, bn, ft]), _t = y((te) => {
      const ye = te.column, Ae = te.columns, fe = ye.key;
      if (te.columnIndex === 0)
        return d ? d({
          entity: te.rowData,
          size: W,
          width: ye.width,
          frozen: ye.frozen
        }) : /* @__PURE__ */ n(
          po,
          {
            entity: te.rowData,
            width: ye.width,
            frozen: ye.frozen,
            size: W
          }
        );
      if (ut[fe])
        return ue(te);
      if (te.columnIndex < Ae.length + 1)
        return N(te);
      throw Error("Internal: columns not mapped properly");
    }, [ut, d, W, ue, N]), Jt = y((te) => {
      k({ ...te, ...a });
    }, [a]);
    return /* @__PURE__ */ n(
      Ha.Provider,
      {
        value: {
          setPopupCell: at,
          select: tr,
          onValueChange: ui,
          size: W,
          selectedCell: be,
          selectedEntityIds: St,
          focused: Nt,
          setFocused: At
        },
        children: /* @__PURE__ */ C(B, { sx: (te) => ({
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: te.palette.background.paper
        }), children: [
          /* @__PURE__ */ n(
            Au,
            {
              forceFilter: V,
              filterIsSet: Ft,
              onTextSearch: p ? er : void 0,
              clearFilter: T,
              size: W,
              onSizeChanged: Kn,
              title: c,
              actionsStart: s,
              actions: l,
              loading: E
            }
          ),
          /* @__PURE__ */ n(B, { sx: { flexGrow: 1 }, children: /* @__PURE__ */ n(
            au,
            {
              data: b,
              columns: Ht,
              cellRenderer: _t,
              onRowClick: w ? void 0 : mn,
              onEndReached: gn,
              onResetPagination: pn,
              error: x,
              paginationEnabled: U,
              onColumnResize: g,
              size: W,
              loading: E,
              filter: I,
              onFilterUpdate: Jt,
              sortBy: F,
              onSortByUpdate: S,
              hoverRow: m,
              checkFilterCombination: _,
              createFilterField: Cu
            }
          ) }),
          /* @__PURE__ */ n(
            ZA,
            {
              open: !!re,
              onClose: rr,
              cellRect: re?.cellRect,
              columnIndex: re?.columnIndex,
              propertyKey: re?.propertyKey,
              collection: re?.collection,
              entity: re?.entity,
              tableKey: Z.current,
              customFieldValidator: jt,
              path: t,
              onCellValueChange: ui
            },
            `popup_form_${re?.columnIndex}_${re?.entity?.id}`
          )
        ] })
      }
    );
  },
  xe
), ui = ({
  fullPath: e,
  collection: t,
  dataSource: r,
  context: o,
  value: i,
  propertyKey: a,
  onValueUpdated: s,
  setError: l,
  entity: c
}) => {
  const d = vl({ ...c.values }, a, i), A = {
    path: e,
    entityId: c.id,
    values: d,
    previousValues: c.values,
    collection: t,
    status: "existing"
  };
  return Aa({
    ...A,
    callbacks: t.callbacks,
    dataSource: r,
    context: o,
    onSaveSuccess: () => s(),
    onSaveFailure: (u) => {
      console.error("Save failure"), console.error(u), l(u);
    }
  });
};
function yu(e, t) {
  const r = Object.keys(e.properties);
  e.additionalColumns && console.warn("`additionalColumns` is deprecated and will be removed in previous versions. Use `additionalFields` instead, with the same structure.");
  const o = e.additionalFields ?? e.additionalColumns ?? [], i = e.subcollections ?? [], a = [
    ...r,
    ...o.map((s) => s.id)
  ];
  if (t) {
    const s = i.map((l) => Na(l));
    a.push(...s.filter((l) => !a.includes(l)));
  }
  return e.collectionGroup && a.push(bo), Ja(e, a);
}
function Eu(e, t) {
  return le(() => e.propertiesOrder ? Ja(e, e.propertiesOrder) : yu(e, t), [e, t]);
}
function Ja(e, t) {
  return t.flatMap((r) => {
    const o = e.properties[r];
    return o ? o.hideFromCollection ? [null] : o.disabled && typeof o.disabled == "object" && o.disabled.hidden ? [null] : o.dataType === "map" && o.spreadChildren && o.properties ? Object.keys(o.properties).map((a) => `${r}.${a}`) : [r] : e.additionalFields?.find((a) => a.id === r) ? [r] : e.collectionGroup && r === bo ? [r] : [null];
  }).filter((r) => r !== null);
}
function Cu({
  id: e,
  filterValue: t,
  setFilterValue: r,
  column: o,
  popupOpen: i,
  setPopupOpen: a
}) {
  const s = o.custom;
  if (!s)
    return null;
  const l = s?.dataType === "array", c = l ? s.of : s;
  if (!c)
    return null;
  if (c.dataType === "reference")
    return /* @__PURE__ */ n(
      fu,
      {
        value: t,
        setValue: r,
        name: e,
        isArray: l,
        path: c.path,
        title: s?.name,
        previewProperties: c?.previewProperties,
        popupOpen: i,
        setPopupOpen: a
      }
    );
  if (c.dataType === "number" || c.dataType === "string") {
    const d = c.name, A = c.enumValues ? _n(c.enumValues) : void 0;
    return /* @__PURE__ */ n(
      gu,
      {
        value: t,
        setValue: r,
        name: e,
        dataType: c.dataType,
        isArray: l,
        enumValues: A,
        title: d
      }
    );
  } else if (c.dataType === "boolean") {
    const d = c.name;
    return /* @__PURE__ */ n(
      mu,
      {
        value: t,
        setValue: r,
        name: e,
        title: d
      }
    );
  } else if (c.dataType === "date") {
    const d = c.name;
    return /* @__PURE__ */ n(
      vu,
      {
        value: t,
        setValue: r,
        name: e,
        mode: c.mode,
        isArray: l,
        title: d
      }
    );
  }
  return /* @__PURE__ */ n("div", { children: `Currently the field ${s.dataType} is not supported` });
}
function qa(e, t = !1) {
  return t ? ["string", "number", "date", "reference"].includes(e.dataType) : e.dataType === "array" ? e.of ? qa(e.of, !0) : !1 : ["string", "number", "boolean", "date", "reference", "array"].includes(e.dataType);
}
const fi = {
  enter: 225,
  exit: 175
}, Bu = R.forwardRef(function(t, r) {
  const {
    children: o,
    onClose: i,
    open: a,
    offsetPosition: s
  } = t, l = Be();
  return /* @__PURE__ */ n(
    Rs,
    {
      BackdropProps: {
        transitionDuration: fi,
        sx: {
          backgroundColor: l.palette.mode === "dark" ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.6)"
        }
      },
      BackdropComponent: Ds,
      open: a,
      onClose: i ? () => i(!1) : void 0,
      ref: r,
      keepMounted: !0,
      disableEnforceFocus: !0,
      disableEscapeKeyDown: !0,
      sx: {
        transition: `transform 300ms ${l.transitions.easing.easeOut}`,
        transform: `translateX(-${s * 200}px)`
      },
      children: /* @__PURE__ */ n(
        Wr,
        {
          in: a,
          timeout: fi,
          direction: "left",
          children: /* @__PURE__ */ n(
            Wt,
            {
              variant: "outlined",
              square: !0,
              sx: {
                height: "100%",
                WebkitOverflowScrolling: "touch",
                // Add iOS momentum scrolling.
                position: "fixed",
                outline: 0,
                left: "auto",
                right: 0,
                overflow: "hidden",
                borderRadius: "16px 0 0 16px"
              },
              children: o
            }
          )
        }
      )
    }
  );
});
function ku(e, t) {
  const [r, o] = R.useState(), { navigator: i } = R.useContext(Vs), a = Yn(), s = () => {
    o(void 0);
  }, l = () => {
    t(), o(void 0), a(-1);
  }, c = y(({ action: d, location: A, retry: u }) => {
    switch (d) {
      case "REPLACE": {
        u();
        return;
      }
      case "POP":
        o(A);
    }
  }, []);
  return R.useEffect(() => {
    if (!e || r || !("block" in i))
      return;
    const d = i.block((A) => {
      const u = {
        ...A,
        retry() {
          d(), A.retry();
        }
      };
      c(u);
    });
    return d;
  }, [i, c, e, r]), { navigationWasBlocked: !!r, handleCancel: s, handleOk: l };
}
function Iu({
  open: e,
  handleOk: t,
  handleCancel: r,
  body: o,
  title: i
}) {
  return /* @__PURE__ */ C(
    Jl,
    {
      keepMounted: !1,
      open: e,
      onClose: r,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [
        /* @__PURE__ */ n(Zl, { children: i ?? "Unsaved changes" }),
        /* @__PURE__ */ C(ql, { children: [
          o && /* @__PURE__ */ n(Qo, { children: o }),
          /* @__PURE__ */ n(Qo, { children: "Are you sure you want to leave this page?" })
        ] }),
        /* @__PURE__ */ C(It, { children: [
          /* @__PURE__ */ n(en, { onClick: r, autoFocus: !0, children: " Cancel " }),
          /* @__PURE__ */ n(en, { onClick: t, children: " Ok " })
        ] })
      ]
    }
  );
}
const Za = R.createContext({
  width: "",
  blocked: !1,
  setBlocked: (e) => {
  },
  setBlockedNavigationMessage: (e) => {
  },
  close: () => {
  }
}), vo = () => ze(Za);
function Su() {
  const t = zn().sidePanels, r = [...t];
  return r.push(void 0), /* @__PURE__ */ n(q, { children: r.map((o, i) => /* @__PURE__ */ n(
    Fu,
    {
      panel: o,
      offsetPosition: t.length - i - 1
    },
    `side_dialog_${i}`
  )) });
}
function Fu({
  offsetPosition: e,
  panel: t
}) {
  const [r, o] = Q(!1), [i, a] = Q(!1), [s, l] = Q(), c = R.useRef(t?.width), d = c.current, A = zn(), {
    navigationWasBlocked: u,
    handleOk: h,
    handleCancel: g
  } = ku(
    i && !r,
    () => a(!1)
  );
  Y(() => {
    t && (c.current = t.width);
  }, [t]);
  const f = () => {
    a(!1), o(!1), A.close(), t?.onClose?.();
  }, p = () => {
    o(!1);
  }, m = (w) => {
    i && !w ? o(!0) : (A.close(), t?.onClose?.());
  };
  return /* @__PURE__ */ C(
    Za.Provider,
    {
      value: {
        blocked: i,
        setBlocked: a,
        setBlockedNavigationMessage: l,
        width: d,
        close: m
      },
      children: [
        /* @__PURE__ */ C(
          Bu,
          {
            open: !!t,
            onClose: m,
            offsetPosition: e,
            children: [
              t && /* @__PURE__ */ n(
                B,
                {
                  sx: (w) => ({
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "width 250ms ease-in-out",
                    width: t.width,
                    maxWidth: Pt,
                    [w.breakpoints.up("lg")]: {
                      maxWidth: "95vw"
                    }
                  }),
                  children: /* @__PURE__ */ n(he, { children: t.component })
                }
              ),
              !t && /* @__PURE__ */ n("div", { style: { width: d } })
            ]
          }
        ),
        /* @__PURE__ */ n(
          Iu,
          {
            open: u || r,
            handleOk: r ? f : h,
            handleCancel: r ? p : g,
            body: s
          }
        )
      ]
    }
  );
}
function Ru({
  entityOrEntitiesToDelete: e,
  collection: t,
  onClose: r,
  open: o,
  callbacks: i,
  onEntityDelete: a,
  onMultipleEntitiesDelete: s,
  path: l,
  ...c
}) {
  const d = Ue(), A = Ct(), [u, h] = Q(!1), [g, f] = R.useState(), [p, m] = R.useState(), w = ie();
  R.useEffect(() => {
    if (e) {
      const T = Array.isArray(e) && e.length === 1 ? e[0] : e;
      f(T), m(Array.isArray(T));
    }
  }, [e]);
  const b = le(() => Ie({
    collection: t,
    path: l,
    fields: w.fields
  }), [t, l]), E = y(() => {
    r();
  }, [r]), v = y((T) => {
    console.debug("Deleted", T);
  }, []), x = y((T, O) => {
    A.open({
      type: "error",
      message: "Error deleting: " + O?.message
    }), console.error("Error deleting entity"), console.error(O);
  }, [b.name]), I = y((T, O) => {
    A.open({
      type: "error",
      message: "Error before deleting: " + O?.message
    }), console.error(O);
  }, [b.name]), k = y((T, O) => {
    A.open({
      type: "error",
      message: "Error after deleting: " + O?.message
    }), console.error(O);
  }, [b.name]), F = y((T) => $c({
    dataSource: d,
    entity: T,
    collection: b,
    callbacks: i,
    onDeleteSuccess: v,
    onDeleteFailure: x,
    onPreDeleteHookError: I,
    onDeleteSuccessHookError: k,
    context: w
  }), [d, b, i, v, x, I, k, w]), S = y(async () => {
    g && (h(!0), p ? Promise.all(g.map(F)).then((T) => {
      h(!1), s && g && s(l, g), T.every(Boolean) ? A.open({
        type: "success",
        message: `${b.name}: multiple deleted`
      }) : T.some(Boolean) ? A.open({
        type: "warning",
        message: `${b.name}: Some of the entities have been deleted, but not all`
      }) : A.open({
        type: "error",
        message: `${b.name}: Error deleting entities`
      }), r();
    }) : F(g).then((T) => {
      h(!1), T && (a && g && a(l, g), A.open({
        type: "success",
        message: `${b.singularName ?? b.name} deleted`
      }), r());
    }));
  }, [g, p, F, s, l, r, A, b.name, a]);
  let D;
  if (g && p)
    D = /* @__PURE__ */ n("div", { children: "Multiple entities" });
  else {
    const T = g;
    D = T ? /* @__PURE__ */ n(
      za,
      {
        entity: T,
        collection: t,
        path: l
      }
    ) : /* @__PURE__ */ n(q, {});
  }
  const P = p ? `${b.name}: Confirm multiple delete?` : `Would you like to delete this ${b.singularName ?? b.name}?`;
  return /* @__PURE__ */ C(
    Vr,
    {
      maxWidth: "md",
      "aria-labelledby": "delete-dialog",
      open: o,
      onBackdropClick: r,
      ...c,
      children: [
        /* @__PURE__ */ n(zr, { id: "delete-dialog-title", children: P }),
        !p && /* @__PURE__ */ n(Ur, { dividers: !0, children: D }),
        /* @__PURE__ */ C(It, { children: [
          u && /* @__PURE__ */ n(yt, { size: 16, thickness: 8 }),
          /* @__PURE__ */ n(
            de,
            {
              onClick: E,
              disabled: u,
              color: "primary",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ n(
            de,
            {
              autoFocus: !0,
              disabled: u,
              onClick: S,
              variant: "contained",
              color: "primary",
              children: "Ok"
            }
          )
        ] })
      ]
    }
  );
}
function Du(e, t, r, o, i) {
  const a = r.properties, s = Tu(a, o, i), l = Pu(e, t, a, s), c = hi(s.map((A) => A.label)), d = l.map((A) => hi(A));
  Qu([c, ...d], `${r.name}.csv`, "text/csv");
}
function Pu(e, t, r, o) {
  const i = e.map((a) => ({ id: a.id, ...Ka(a.values, r) }));
  return t && t.forEach((a, s) => {
    i[s] = { ...i[s], ...a };
  }), i && i.map((a) => o.map((s) => dt(a, s.key)));
}
function Tu(e, t, r) {
  const o = [
    { label: "id", key: "id" },
    ...Object.entries(e).map(([i, a]) => Xa(a, i, "")).flat()
  ];
  return r?.additionalFields && o.push(...r.additionalFields.map((i) => ({
    label: i.key,
    key: i.key
  }))), o;
}
function Xa(e, t, r = "") {
  const o = r ? `${r}.${t}` : t;
  return e.dataType === "map" && e.properties ? Object.entries(e.properties).map(([i, a]) => Xa(a, i, o)).flat() : [{ label: o, key: o }];
}
function Pr(e, t) {
  let r;
  if (t.dataType === "map" && t.properties)
    r = Ka(e, t.properties);
  else if (t.dataType === "array")
    t.of && Array.isArray(e) ? Array.isArray(t.of) ? r = t.of.map((o, i) => Pr(e[i], o)) : t.of.dataType === "map" ? r = e.map((o) => JSON.stringify(o)) : r = e.map((o) => Pr(o, t.of)) : r = e;
  else if (t.dataType === "reference") {
    const o = e || void 0;
    r = o ? o.pathWithId : null;
  } else
    t.dataType === "date" ? r = e ? e.getTime() : null : r = e;
  return r;
}
function Ka(e, t) {
  const r = Object.entries(t).map(([o, i]) => {
    const a = e && e[o], s = Pr(a, i);
    return s === void 0 ? {} : { [o]: s };
  }).reduce((o, i) => ({ ...o, ...i }), {});
  return { ...e, ...r };
}
function hi(e) {
  return e.map((t) => t == null ? "" : '"' + String(t).replaceAll('"', '""') + '"').join(",") + `\r
`;
}
function Qu(e, t, r) {
  const o = new Blob(e, { type: r }), i = URL.createObjectURL(o), a = document.createElement("a");
  a.href = i, a.setAttribute("download", t), a.click();
}
const gr = 200;
function Mu({
  collection: e,
  path: t,
  exportConfig: r
}) {
  const o = ie(), i = Ue(), s = ke().resolveAliasesFrom(t), l = R.useMemo(() => Ie({
    collection: e,
    path: s,
    fields: o.fields
  }), [e, s]), c = ce(), d = ce(), [A, u] = R.useState(!1), [h, g] = R.useState(), [f, p] = R.useState(!1), [m, w] = R.useState(!1), [b, E] = R.useState(!1), v = y(() => {
    E(!0);
  }, [E]), x = y(() => {
    E(!1);
  }, [E]), I = y((P, T, O, ne, L) => {
    if (!P)
      throw Error("Trying to perform export without loading data first");
    Du(P, T, O, ne, L);
  }, []), k = y(async (P) => {
    if (!r?.additionalFields)
      return;
    const T = r.additionalFields;
    return await Promise.all(P.map(async (ne) => (await Promise.all(T.map(async (L) => ({
      [L.key]: await L.builder({
        entity: ne,
        context: o
      })
    })))).reduce((L, U) => ({ ...L, ...U }), {})));
  }, [r?.additionalFields]), F = y(async (P) => {
    P.length >= gr && p(!0);
    const T = c.current && P.length > c.current.length && m;
    c.current = P;
    const O = await k(P);
    d.current = O, g(void 0), T && (I(P, O, l, s, r), x());
  }, [l, I, r, k, m, x, s]);
  Y(() => {
    b && (u(!0), i.fetchCollection({
      path: s,
      collection: l,
      limit: m ? void 0 : gr
    }).then(F).catch(g).finally(() => u(!1)));
  }, [l, i, m, b, s, F]);
  const S = f && !m, D = y(() => {
    S ? w(!0) : (I(c.current, d.current, l, s, r), x());
  }, [S, I, l, s, r, x]);
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(me, { title: "Export", children: /* @__PURE__ */ n(oe, { color: "primary", onClick: v, children: /* @__PURE__ */ n(_l, {}) }) }),
    /* @__PURE__ */ C(
      Vr,
      {
        keepMounted: !1,
        open: b,
        onClose: x,
        children: [
          /* @__PURE__ */ n(zr, { children: "Export data" }),
          /* @__PURE__ */ n(Ur, { children: /* @__PURE__ */ C(Si, { children: [
            /* @__PURE__ */ n("div", { children: "Download the the content of this table as a CSV" }),
            /* @__PURE__ */ n("br", {}),
            S && /* @__PURE__ */ C(
              Ps,
              {
                elevation: 3,
                variant: "filled",
                severity: "warning",
                children: [
                  /* @__PURE__ */ C("div", { children: [
                    "This collections has a large number of documents (more than ",
                    gr,
                    ")."
                  ] }),
                  /* @__PURE__ */ n("div", { children: "Would you like to proceed?" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ C(It, { children: [
            A && /* @__PURE__ */ n(yt, { size: 16, thickness: 8 }),
            /* @__PURE__ */ n(de, { color: "primary", onClick: x, children: "Cancel" }),
            /* @__PURE__ */ n(
              de,
              {
                color: "primary",
                variant: "contained",
                disabled: A,
                onClick: D,
                children: "Download"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function Ou({
  collection: e,
  onNewClick: t,
  exportable: r,
  onMultipleDeleteClick: o,
  selectionEnabled: i,
  path: a,
  selectionController: s,
  loadedEntities: l
}) {
  const c = ie(), d = Vt(), A = Be(), u = He(A.breakpoints.up("md")), h = s.selectedEntities, g = go(e, d, ct(a), null) && t && (u ? /* @__PURE__ */ C(
    de,
    {
      id: `add_entity_${a}`,
      onClick: t,
      startIcon: /* @__PURE__ */ n(kn, {}),
      size: "large",
      variant: "contained",
      color: "primary",
      children: [
        "Add ",
        e.singularName ?? e.name
      ]
    }
  ) : /* @__PURE__ */ n(
    de,
    {
      id: `add_entity_${a}`,
      onClick: t,
      size: "medium",
      variant: "contained",
      color: "primary",
      children: /* @__PURE__ */ n(kn, {})
    }
  )), f = Wa(e, d, ct(a), null);
  let p;
  if (i) {
    const E = u ? /* @__PURE__ */ C(
      de,
      {
        disabled: !h?.length || !f,
        startIcon: /* @__PURE__ */ n(xr, {}),
        onClick: o,
        color: "primary",
        sx: { minWidth: 68 },
        children: [
          "(",
          h?.length,
          ")"
        ]
      }
    ) : /* @__PURE__ */ n(
      oe,
      {
        color: "primary",
        disabled: !h?.length || !f,
        onClick: o,
        children: /* @__PURE__ */ n(xr, {})
      }
    );
    p = /* @__PURE__ */ n(
      me,
      {
        title: f ? "Delete" : "You have selected at least one entity you cannot delete",
        children: /* @__PURE__ */ n("span", { children: E })
      }
    );
  }
  const m = {
    path: a,
    collection: e,
    selectionController: s,
    context: c,
    loadedEntities: l
  }, w = e.Actions ? Array.isArray(e.Actions) ? /* @__PURE__ */ n(q, { children: e.Actions.map((E, v) => /* @__PURE__ */ n(E, { ...m }, `actions_${v}`)) }) : /* @__PURE__ */ n(e.Actions, { ...m }) : void 0, b = r && /* @__PURE__ */ n(
    Mu,
    {
      collection: e,
      exportConfig: typeof e.exportable == "object" ? e.exportable : void 0,
      path: a
    }
  );
  return /* @__PURE__ */ C(q, { children: [
    w,
    p,
    b,
    g
  ] });
}
function $u({
  data: e,
  entitiesDisplayedFirst: t
}) {
  if (!t)
    return e;
  const r = new Set(t.map((o) => o.id));
  return [...t, ...e.filter((o) => !r.has(o.id))];
}
function Gu(e, t, r = 5e3) {
  const [o, i] = R.useState(e), a = R.useRef(o.length ?? 0), s = R.useRef(!1), l = R.useRef(t), c = !xe(l.current, t), d = e.length >= a.current || c;
  return R.useEffect(() => {
    const A = () => {
      xe(o, e) || (l.current = t, a.current = e.length, i(e)), s.current = !1;
    };
    s.current = !0;
    let u;
    return d ? A() : u = setTimeout(A, r), () => {
      clearTimeout(u), s.current && d && A();
    };
  }, [e, r, t, d]), d ? e : o;
}
const Lu = 50;
function es({
  fullPath: e,
  collection: t,
  entitiesDisplayedFirst: r,
  isFilterCombinationValid: o,
  lastDeleteTimestamp: i,
  forceFilter: a
}) {
  const {
    filterCombinations: s,
    initialFilter: l,
    initialSort: c,
    forceFilter: d
  } = t, A = a ?? d, u = t.pagination === void 0 || !!t.pagination, h = typeof t.pagination == "number" ? t.pagination : Lu, [g, f] = R.useState(), [p, m] = R.useState(u ? h : void 0), w = y((ne, L) => o(ne, L, s), [s]), b = le(() => {
    if (c && A && !w(A, c)) {
      console.warn("Initial sort is not compatible with the force filter. Ignoring initial sort");
      return;
    }
    return c;
  }, [c, A]), [E, v] = R.useState(A ?? l ?? void 0), [x, I] = R.useState(b), k = y(() => v(A ?? void 0), [A]), {
    data: F,
    dataLoading: S,
    noMoreToLoad: D,
    dataLoadingError: P
  } = Oc({
    path: e,
    collection: t,
    filterValues: E,
    sortBy: x,
    searchString: g,
    itemCount: p
  }), T = $u({
    data: F,
    entitiesDisplayedFirst: r
  });
  return {
    data: Gu(T, {
      filterValues: E,
      sortBy: x,
      searchString: g,
      lastDeleteTimestamp: i
    }),
    dataLoading: S,
    noMoreToLoad: D,
    dataLoadingError: P,
    filterValues: E,
    setFilterValues: v,
    sortBy: x,
    setSortBy: I,
    searchString: g,
    setSearchString: f,
    clearFilter: k,
    itemCount: p,
    setItemCount: m,
    paginationEnabled: u,
    pageSize: h,
    checkFilterCombination: w
  };
}
function ts(e, t, r) {
  const o = t ? t[0] : void 0, i = t ? t[1] : void 0, a = Object.values(e);
  if (o && a.map((c) => c[0]).includes("=="))
    return !1;
  const s = Object.keys(e), l = s.length;
  return l === 1 && (!o || o === s[0]) ? !0 : !r && l > 1 ? !1 : !!r && r.filter((c) => !o || o in c).find(
    (c) => Object.entries(e).every(([d, A]) => c[d] !== void 0 && (!i || c[d] === i))
  ) !== void 0;
}
const ns = R.memo(
  function({
    fullPath: t,
    isSubCollection: r,
    ...o
  }) {
    const i = Et(), a = Vt(), s = zt(), l = ie(), c = le(() => {
      const W = s?.getCollectionConfig(t);
      return W ? it(o, W) : o;
    }, [o, t, s?.getCollectionConfig]), d = Be(), [A, u] = Q(void 0), [h, g] = R.useState(void 0), [f, p] = R.useState(0), m = y(() => {
      const W = A;
      setTimeout(() => {
        W === A && u(void 0);
      }, 2400);
    }, [A]), w = y((W) => Ya(c, a, ct(t), W ?? null) ? c.inlineEditing === void 0 || c.inlineEditing : !1, [c, a, t]), b = c.exportable === void 0 || c.exportable, E = c.selectionEnabled === void 0 || c.selectionEnabled, v = !w(), [x, I] = R.useState(null), k = rs(), F = c.selectionController ?? k, {
      selectedEntities: S,
      toggleEntitySelection: D,
      isEntitySelected: P,
      setSelectedEntities: T
    } = F;
    Y(() => {
      g(void 0);
    }, [S]);
    const O = es({
      fullPath: t,
      collection: c,
      entitiesDisplayedFirst: [],
      isFilterCombinationValid: ts,
      lastDeleteTimestamp: f
    }), ne = y((W) => (u(W), l.onAnalyticsEvent?.("edit_entity_clicked", {
      path: W.path,
      entityId: W.id
    }), i.open({
      entityId: W.id,
      path: t,
      collection: c,
      updateUrl: !0,
      onClose: m
    })), [t, c, i]), L = y(() => {
      l.onAnalyticsEvent?.("new_entity_click", {
        path: t
      }), i.open({
        path: t,
        collection: c,
        updateUrl: !0,
        onClose: m
      });
    }, [t, c, i]), U = y((W) => {
      l.onAnalyticsEvent?.("single_delete_dialog_open", {
        path: t
      }), g(W);
    }, [l, t]), _ = y(() => {
      l.onAnalyticsEvent?.("multiple_delete_dialog_open", {
        path: t
      }), g(S);
    }, [l, t, S]), ee = y((W, ge) => {
      l.onAnalyticsEvent?.("single_entity_deleted", {
        path: t
      }), T((be) => be.filter((ae) => ae.id !== ge.id)), p(Date.now());
    }, [l, t, T]), $ = y((W, ge) => {
      l.onAnalyticsEvent?.("multiple_entities_deleted", {
        path: t
      }), T([]), g(void 0), p(Date.now());
    }, [T]), G = y((W, ge) => {
      if (s) {
        const be = s.getCollectionConfig(W), ae = it(be, ge);
        s.onCollectionModified(W, ae);
      }
    }, [s]), H = y(({
      width: W,
      key: ge
    }) => {
      if (!c.properties[ge])
        return;
      const be = { columnWidth: W }, ae = { properties: { [ge]: be } };
      G(t, ae);
    }, [c, G, t]), V = y((W) => {
      s && G(t, { defaultSize: W });
    }, [G, t, s]), z = x != null, Z = le(() => /* @__PURE__ */ n(B, { sx: {
      display: "flex",
      flexDirection: "row",
      contain: "content",
      "& > *:not(:last-child)": {
        [d.breakpoints.down("md")]: {
          mr: d.spacing(1)
        },
        mr: d.spacing(2)
      }
    }, children: /* @__PURE__ */ C(B, { children: [
      /* @__PURE__ */ n(
        X,
        {
          variant: "h6",
          sx: {
            lineHeight: "1.15",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "164px",
            cursor: c.description ? "pointer" : "inherit"
          },
          onClick: c.description ? (W) => {
            I(W.currentTarget), W.stopPropagation();
          } : void 0,
          children: `${c.name}`
        }
      ),
      /* @__PURE__ */ n(Yu, { fullPath: t, collection: c }),
      c.description && /* @__PURE__ */ n(
        Bi,
        {
          id: "info-dialog",
          open: z,
          anchorEl: x,
          elevation: 3,
          onClose: () => {
            I(null);
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          children: /* @__PURE__ */ n(B, { m: 2, children: /* @__PURE__ */ n(io, { source: c.description }) })
        }
      )
    ] }) }), [d, c.description, c.name, t, z, x]), J = go(c, a, ct(t), null), M = y((W) => {
      u(W), l.onAnalyticsEvent?.("copy_entity_click", {
        path: W.path,
        entityId: W.id
      }), i.open({
        entityId: W.id,
        path: t,
        copy: !0,
        collection: c,
        updateUrl: !0,
        onClose: m
      });
    }, [i, c, t, m]), j = y((W) => {
      u(W), l.onAnalyticsEvent?.("entity_click", {
        path: W.path,
        entityId: W.id
      }), i.open({
        entityId: W.id,
        path: W.path,
        collection: c,
        updateUrl: !0,
        onClose: m
      });
    }, [i, c, t, m]), K = y(({
      entity: W,
      size: ge,
      width: be,
      frozen: ae
    }) => {
      const re = P(W), at = Wa(c, a, ct(t), W);
      return /* @__PURE__ */ n(
        po,
        {
          entity: W,
          width: be,
          frozen: ae,
          isSelected: re,
          selectionEnabled: E,
          size: ge,
          toggleEntitySelection: D,
          onEditClicked: j,
          onCopyClicked: J ? M : void 0,
          onDeleteClicked: at ? U : void 0,
          hideId: c?.hideIdFromCollection
        }
      );
    }, [P, c, a, t, E, D, j, J, M]);
    return /* @__PURE__ */ C(B, { sx: {
      overflow: "hidden",
      height: "100%",
      width: "100%"
    }, children: [
      /* @__PURE__ */ n(
        _a,
        {
          fullPath: t,
          tableController: O,
          onSizeChanged: V,
          onEntityClick: ne,
          onColumnResize: H,
          tableRowActionsBuilder: K,
          title: Z,
          selectionController: F,
          highlightedEntities: A ? [A] : [],
          ...c,
          actions: /* @__PURE__ */ n(
            Ou,
            {
              collection: c,
              exportable: b,
              onMultipleDeleteClick: _,
              onNewClick: L,
              path: t,
              loadedEntities: O.data,
              selectionController: F,
              selectionEnabled: E
            }
          ),
          hoverRow: v,
          inlineEditing: w()
        },
        `collection_table_${t}`
      ),
      h && /* @__PURE__ */ n(
        Ru,
        {
          entityOrEntitiesToDelete: h,
          path: t,
          collection: c,
          callbacks: c.callbacks,
          open: !!h,
          onEntityDelete: ee,
          onMultipleEntitiesDelete: $,
          onClose: () => g(void 0)
        }
      )
    ] });
  },
  xe
);
function rs() {
  const [e, t] = Q([]), r = y((i) => {
    let a;
    e.map((s) => s.id).includes(i.id) ? a = e.filter((s) => s.id !== i.id) : a = [...e, i], t(a);
  }, [e]), o = y((i) => e.map((a) => a.id).includes(i.id), [e]);
  return {
    selectedEntities: e,
    setSelectedEntities: t,
    isEntitySelected: o,
    toggleEntitySelection: r
  };
}
function Yu({ fullPath: e, collection: t }) {
  const r = Ue(), o = ke(), [i, a] = Q(void 0), [s, l] = Q(void 0);
  return Y(() => {
    r.countEntities({ path: o.resolveAliasesFrom(e), collection: t }).then(a).catch(l);
  }, [e, r, o]), s ? null : /* @__PURE__ */ n(
    X,
    {
      sx: {
        display: "block",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "160px",
        textAlign: "left"
      },
      variant: "caption",
      color: "textSecondary",
      children: i !== void 0 ? `${i} entities` : rt()
    }
  );
}
function Wu({
  onSingleEntitySelected: e,
  onMultipleEntitiesSelected: t,
  multiselect: r,
  collection: o,
  path: i,
  selectedEntityIds: a,
  description: s,
  forceFilter: l,
  maxSelection: c
}) {
  const d = vo(), A = Et(), u = ke(), h = ie(), g = u.resolveAliasesFrom(i), f = Ue(), [p, m] = Q([]), w = rs();
  Y(() => {
    let S = !1;
    return a && o ? Promise.all(
      a.map((D) => f.fetchEntity({
        path: g,
        entityId: D,
        collection: o
      }))
    ).then((D) => {
      if (!S) {
        const P = D.filter((T) => T !== void 0);
        w.setSelectedEntities(P), m(P);
      }
    }) : (w.setSelectedEntities([]), m([])), () => {
      S = !0;
    };
  }, [f, g, a, o, w.setSelectedEntities]);
  const b = y(() => {
    h.onAnalyticsEvent?.("reference_selection_clear", {
      path: g
    }), w.setSelectedEntities([]), !r && e ? e(null) : t && t([]);
  }, [r, t, e]), E = y((S) => {
    let D;
    const P = w.selectedEntities;
    if (h.onAnalyticsEvent?.("reference_selection_toggle", {
      path: g,
      entityId: S.id
    }), P) {
      if (P.map((T) => T.id).indexOf(S.id) > -1)
        D = P.filter((T) => T.id !== S.id);
      else {
        if (c && P.length >= c)
          return;
        D = [...P, S];
      }
      w.setSelectedEntities(D), t && t(D);
    }
  }, [t, w.selectedEntities]), v = y((S) => {
    !r && e ? (h.onAnalyticsEvent?.("reference_selected_single", {
      path: g,
      entityId: S.id
    }), e(S), d.close(!1)) : E(S);
  }, [d, r, e, E]), x = y(
    () => {
      h.onAnalyticsEvent?.("reference_selection_new_entity", {
        path: g
      }), A.open({
        path: g,
        collection: o,
        updateUrl: !0,
        onUpdate: ({ entity: S }) => {
          m([S, ...p]), v(S);
        },
        closeOnSave: !0
      });
    },
    [A, g, o, p, v]
  ), I = y(({
    entity: S,
    size: D,
    width: P,
    frozen: T
  }) => {
    const O = w.selectedEntities, ne = O && O.map((L) => L.id).indexOf(S.id) > -1;
    return /* @__PURE__ */ n(
      po,
      {
        width: P,
        frozen: T,
        entity: S,
        size: D,
        isSelected: ne,
        selectionEnabled: r,
        toggleEntitySelection: E,
        hideId: o?.hideIdFromCollection
      }
    );
  }, [r, w.selectedEntities, E, o?.hideIdFromCollection]), k = y((S) => {
    S.stopPropagation(), d.close(!1);
  }, [d]);
  if (!o)
    return /* @__PURE__ */ n(
      Ee,
      {
        error: "Could not find collection with id " + o
      }
    );
  const F = es({
    fullPath: g,
    collection: o,
    entitiesDisplayedFirst: p,
    isFilterCombinationValid: ts,
    forceFilter: l
  });
  return /* @__PURE__ */ C(B, { sx: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }, children: [
    /* @__PURE__ */ n(B, { sx: { flexGrow: 1 }, children: p && /* @__PURE__ */ n(
      _a,
      {
        fullPath: g,
        onEntityClick: v,
        tableController: F,
        tableRowActionsBuilder: I,
        title: /* @__PURE__ */ n(X, { variant: "h6", children: o.singularName ? `Select ${o.singularName}` : `Select from ${o.name}` }),
        ...o,
        forceFilter: l,
        inlineEditing: !1,
        selectionController: w,
        actions: /* @__PURE__ */ n(
          Vu,
          {
            collection: o,
            path: g,
            onNewClick: x,
            onClear: b
          }
        )
      }
    ) }),
    /* @__PURE__ */ C(It, { translucent: !1, children: [
      s && /* @__PURE__ */ n(X, { variant: "body2", sx: {
        flexGrow: 1,
        textAlign: "left"
      }, children: s }),
      /* @__PURE__ */ n(
        de,
        {
          onClick: k,
          color: "primary",
          variant: "contained",
          children: "Done"
        }
      )
    ] })
  ] });
}
function Vu({
  collection: e,
  path: t,
  onClear: r,
  onNewClick: o
}) {
  const i = Vt(), a = Be(), s = He(a.breakpoints.up("md")), l = go(e, i, ct(t), null) && o && (s ? /* @__PURE__ */ C(
    de,
    {
      onClick: o,
      startIcon: /* @__PURE__ */ n(kn, {}),
      size: "large",
      variant: "outlined",
      color: "primary",
      children: [
        "Add ",
        e.singularName ?? e.name
      ]
    }
  ) : /* @__PURE__ */ n(
    de,
    {
      onClick: o,
      size: "medium",
      variant: "outlined",
      color: "primary",
      children: /* @__PURE__ */ n(kn, {})
    }
  ));
  return /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(
      de,
      {
        onClick: r,
        color: "primary",
        children: "Clear"
      }
    ),
    l
  ] });
}
function Tr(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function Qr({
  children: e,
  group: t
}) {
  const r = zt();
  return /* @__PURE__ */ n(
    Bt,
    {
      invisible: !0,
      initiallyExpanded: !(r?.collapsedGroups ?? []).includes(t ?? "ungrouped"),
      onExpandedChange: (o) => {
        if (r)
          if (o)
            r.setCollapsedGroups((r.collapsedGroups ?? []).filter((i) => i !== (t ?? "ungrouped")));
          else {
            const i = (r.collapsedGroups ?? []).concat(t ?? "ungrouped");
            r.setCollapsedGroups(i);
          }
      },
      title: /* @__PURE__ */ n(
        X,
        {
          color: "textSecondary",
          className: "weight-500",
          sx: { ml: 1 },
          children: t?.toUpperCase() ?? "Ungrouped views".toUpperCase()
        }
      ),
      children: /* @__PURE__ */ n(B, { mb: 2, children: e })
    }
  );
}
function os({
  view: e,
  path: t,
  collection: r,
  url: o,
  name: i,
  description: a,
  onClick: s
}) {
  const l = zt(), c = Fr(r ?? e), d = Yn(), A = ie(), u = (l?.favouritePaths ?? []).includes(t);
  let h;
  if (A.plugins && r) {
    const g = {
      path: t,
      collection: r,
      context: A
    };
    h = /* @__PURE__ */ n(q, { children: A.plugins.map((f, p) => f.homePage?.CollectionActions ? /* @__PURE__ */ n(
      f.homePage.CollectionActions,
      {
        ...g,
        extraProps: f.homePage.extraProps
      },
      `actions_${p}`
    ) : null) });
  }
  return /* @__PURE__ */ n(Wt, { elevation: 0, sx: {
    height: "100%"
  }, children: /* @__PURE__ */ C(
    Ts,
    {
      component: "div",
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: 248,
        height: "100%"
      },
      onClick: () => {
        s?.(), d(o), l && l.setRecentlyVisitedPaths(
          [t, ...(l.recentlyVisitedPaths ?? []).filter((g) => g !== t)]
        );
      },
      children: [
        /* @__PURE__ */ C(
          Qs,
          {
            sx: {
              flexGrow: 1,
              width: "100%"
            },
            children: [
              /* @__PURE__ */ C(B, { sx: {
                height: 40,
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between"
              }, children: [
                /* @__PURE__ */ n(c, { color: "disabled" }),
                /* @__PURE__ */ C(
                  B,
                  {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    },
                    onClick: (g) => {
                      g.preventDefault(), g.stopPropagation();
                    },
                    children: [
                      h,
                      l && /* @__PURE__ */ n(
                        oe,
                        {
                          size: "small",
                          onClick: (g) => {
                            g.preventDefault(), g.stopPropagation(), u ? l.setFavouritePaths(
                              l.favouritePaths.filter((f) => f !== t)
                            ) : l.setFavouritePaths(
                              [...l.favouritePaths, t]
                            );
                          },
                          children: u ? /* @__PURE__ */ n(Vi, { color: "secondary" }) : /* @__PURE__ */ n(Wi, { color: "disabled" })
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ n(
                X,
                {
                  gutterBottom: !0,
                  variant: "h5",
                  component: "h2",
                  children: i
                }
              ),
              a && /* @__PURE__ */ n(
                X,
                {
                  variant: "body2",
                  color: "textSecondary",
                  component: "div",
                  children: /* @__PURE__ */ n(io, { source: a })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(Ms, { style: { alignSelf: "flex-end" }, children: /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(kl, { color: "primary" }) }) })
      ]
    }
  ) });
}
function zu({ entry: e }) {
  const t = Yn(), r = zt();
  if (!r)
    return null;
  const o = r.favouritePaths.includes(e.path);
  return /* @__PURE__ */ n(
    Gr,
    {
      label: e.name,
      onClick: () => t(e.url),
      onDelete: (i) => {
        i.preventDefault(), i.stopPropagation(), o ? r.setFavouritePaths(
          r.favouritePaths.filter((a) => a !== e.path)
        ) : r.setFavouritePaths(
          [...r.favouritePaths, e.path]
        );
      },
      deleteIcon: o ? /* @__PURE__ */ n(Vi, { color: "secondary" }) : /* @__PURE__ */ n(Wi, { color: "disabled" })
    },
    e.path
  );
}
function Uu({ hidden: e }) {
  const t = ie(), r = ke(), o = zt();
  if (!o)
    return null;
  const i = (o?.favouritePaths ?? []).map((l) => r.topLevelNavigation?.navigationEntries.find((c) => c.path === l)).filter(Boolean), a = (o?.recentlyVisitedPaths ?? []).map((l) => r.topLevelNavigation?.navigationEntries.find((c) => c.path === l)).filter(Boolean).slice(0, 5), s = /* @__PURE__ */ n(
    Ei,
    {
      in: !e && i.length > 0,
      children: /* @__PURE__ */ n(Qr, { group: "Favourites", children: /* @__PURE__ */ n(se, { container: !0, spacing: 2, children: i.map((l) => /* @__PURE__ */ n(
        se,
        {
          item: !0,
          xs: 12,
          sm: 6,
          lg: 4,
          children: /* @__PURE__ */ n(
            os,
            {
              ...l,
              onClick: () => {
                const c = l.type === "collection" ? "home_favorite_navigate_to_collection" : l.type === "view" ? "home_favorite_navigate_to_view" : "unmapped_event";
                t.onAnalyticsEvent?.(c, { path: l.path });
              }
            }
          )
        },
        `nav_${l.group}_${l.name}`
      )) }) })
    }
  );
  return /* @__PURE__ */ C(B, { children: [
    /* @__PURE__ */ n(B, { sx: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 1,
      pb: 2
    }, children: a.map((l) => /* @__PURE__ */ n(
      zu,
      {
        entry: l
      },
      l.path
    )) }),
    s
  ] });
}
function is() {
  const e = R.useRef({}), t = An(), r = R.createRef(), [o, i] = R.useState(0), [a, s] = R.useState("down"), l = y(() => {
    !r.current || !t.key || (e.current[t.key] = r.current.scrollTop, i(r.current.scrollTop), s(r.current.scrollTop > o ? "down" : "up"));
  }, [r, t.key, o]);
  return Y(() => {
    const c = r.current;
    if (c)
      return c.addEventListener("scroll", l, { passive: !0 }), () => {
        c && c.removeEventListener("scroll", l);
      };
  }, [r, l, t]), Y(() => {
    !r.current || !e.current || !e.current[t.key] || r.current.scrollTo(
      {
        top: e.current[t.key],
        behavior: "auto"
      }
    );
  }, [t]), {
    containerRef: r,
    scroll: o,
    direction: a
  };
}
const Yt = new Ul.Search("home");
Yt.addIndex("name");
Yt.addIndex("description");
Yt.addIndex("group");
Yt.addIndex("path");
function Nu({ additionalChildrenStart: e, additionalChildrenEnd: t }) {
  const r = ie(), o = ke();
  if (!o.topLevelNavigation)
    throw Error("Navigation not ready in FireCMSHomePage");
  const {
    containerRef: i,
    scroll: a,
    direction: s
  } = is(), {
    navigationEntries: l,
    groups: c
  } = o.topLevelNavigation, [d, A] = Q(null), u = d ? l.filter((p) => d.includes(p.url)) : l;
  Y(() => {
    Yt.addDocuments(u);
  }, [l]);
  const h = y(
    (p) => {
      A(!p || p === "" ? null : Yt.search(p).map((m) => m.url));
    },
    []
  ), g = [...c];
  (u.filter((p) => !p.group).length > 0 || u.length === 0) && g.push(void 0);
  let f;
  if (r.plugins) {
    const p = {
      context: r
    };
    f = /* @__PURE__ */ n(q, { children: r.plugins.filter((m) => m.homePage?.includeSection).map((m, w) => {
      const b = m.homePage.includeSection(p);
      return /* @__PURE__ */ n(
        Qr,
        {
          group: b.title,
          children: b.children
        },
        `plugin_section_${m.name}`
      );
    }) });
  }
  return /* @__PURE__ */ n(
    B,
    {
      ref: i,
      sx: {
        py: 2,
        overflow: "auto",
        height: "100%",
        width: "100%"
      },
      children: /* @__PURE__ */ C(Ci, { children: [
        /* @__PURE__ */ n(B, { sx: {
          position: "sticky",
          py: 2,
          transition: "top 0.4s ease-in-out",
          top: 0,
          // top: direction === "down" ? -84 : 0,
          zIndex: 10
        }, children: /* @__PURE__ */ n(
          ja,
          {
            onTextSearch: h,
            placeholder: "Search collections",
            large: !1
          }
        ) }),
        /* @__PURE__ */ n(Uu, { hidden: !!d }),
        e,
        g.map((p, m) => {
          const w = [], b = {
            group: p,
            context: r
          };
          r.plugins && r.plugins.forEach((v) => {
            v.homePage?.AdditionalCards && w.push(...Tr(v.homePage?.AdditionalCards));
          });
          const E = u.filter((v) => v.group === p || !v.group && p === void 0);
          return E.length === 0 && w.length === 0 ? null : /* @__PURE__ */ n(
            Qr,
            {
              group: p,
              children: /* @__PURE__ */ C(se, { container: !0, spacing: 2, children: [
                E.map((v) => /* @__PURE__ */ n(
                  se,
                  {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    children: /* @__PURE__ */ n(
                      os,
                      {
                        ...v,
                        onClick: () => {
                          const x = v.type === "collection" ? "home_navigate_to_collection" : v.type === "view" ? "home_navigate_to_view" : "unmapped_event";
                          r.onAnalyticsEvent?.(x, { path: v.path });
                        }
                      }
                    )
                  },
                  `nav_${v.group}_${v.name}`
                )),
                w && w.map((v, x) => /* @__PURE__ */ n(
                  se,
                  {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    lg: 4,
                    children: /* @__PURE__ */ n(v, { ...b })
                  },
                  `nav_${p}_"add_${x}`
                ))
              ] })
            },
            `plugin_section_${p}`
          );
        }),
        f,
        t
      ] })
    }
  );
}
function qg({
  children: e,
  title: t,
  path: r
}) {
  const o = oo();
  return R.useEffect(() => {
    o.set({
      breadcrumbs: [{
        title: t,
        url: r
      }]
    });
  }, [r, t]), /* @__PURE__ */ n(q, { children: e });
}
function ju() {
  return /* @__PURE__ */ n(
    B,
    {
      display: "flex",
      width: "100%",
      height: "100%",
      children: /* @__PURE__ */ C(
        B,
        {
          m: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          children: [
            /* @__PURE__ */ n(X, { variant: "h4", align: "center", gutterBottom: !0, children: "Page not found" }),
            /* @__PURE__ */ n(X, { align: "center", gutterBottom: !0, children: "This page does not exist or you may not have access to it" }),
            /* @__PURE__ */ n(
              de,
              {
                component: br,
                to: "/",
                children: "Back to home"
              }
            )
          ]
        }
      )
    }
  );
}
function Zg({
  open: e,
  onAccept: t,
  onCancel: r,
  title: o,
  loading: i,
  body: a
}) {
  return /* @__PURE__ */ C(
    Vr,
    {
      open: e,
      onClose: r,
      children: [
        /* @__PURE__ */ n(zr, { children: o }),
        a && /* @__PURE__ */ n(Ur, { children: /* @__PURE__ */ n(Si, { children: a }) }),
        /* @__PURE__ */ C(It, { children: [
          /* @__PURE__ */ n(
            de,
            {
              onClick: r,
              autoFocus: !0,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ n(
            Pl,
            {
              variant: "contained",
              color: "primary",
              type: "submit",
              loading: i,
              onClick: t,
              children: "Ok"
            }
          )
        ] })
      ]
    }
  );
}
function as({
  width: e,
  height: t,
  style: r
}) {
  return /* @__PURE__ */ C(
    "svg",
    {
      width: e ?? "100%",
      height: t ?? "100%",
      viewBox: "0 0 599 599",
      version: "1.1",
      style: r,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ C("defs", { children: [
          /* @__PURE__ */ C(
            "radialGradient",
            {
              cx: "28.6213569%",
              cy: "43.1133328%",
              fx: "28.6213569%",
              fy: "43.1133328%",
              r: "71.5003456%",
              gradientTransform: "translate(0.286214,0.431133),rotate(3.343450),scale(1.000000,0.996175),translate(-0.286214,-0.431133)",
              id: "radialGradient-1",
              children: [
                /* @__PURE__ */ n("stop", { stopColor: "#FF5B79", offset: "0%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#FA5574", offset: "28.0930803%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#EC4C51", offset: "44.7242531%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#9543C1", offset: "71.4578165%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#3857B3", offset: "100%" })
              ]
            }
          ),
          /* @__PURE__ */ C(
            "radialGradient",
            {
              cx: "53.6205516%",
              cy: "47.2473036%",
              fx: "53.6205516%",
              fy: "47.2473036%",
              r: "50.8229649%",
              gradientTransform: "translate(0.536206,0.472473),rotate(90.000000),scale(1.000000,1.206631),translate(-0.536206,-0.472473)",
              id: "radialGradient-2",
              children: [
                /* @__PURE__ */ n("stop", { stopColor: "#68294F", stopOpacity: "0", offset: "0%" }),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#5E2548",
                    stopOpacity: "0.04641108",
                    offset: "75.3503173%"
                  }
                ),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#0D060B",
                    stopOpacity: "0.437431709",
                    offset: "100%"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ C(
            "radialGradient",
            {
              cx: "53.8605015%",
              cy: "48.1990423%",
              fx: "53.8605015%",
              fy: "48.1990423%",
              r: "59.9151549%",
              gradientTransform: "translate(0.538605,0.481990),rotate(180.000000),scale(1.000000,0.925027),translate(-0.538605,-0.481990)",
              id: "radialGradient-3",
              children: [
                /* @__PURE__ */ n("stop", { stopColor: "#68294F", stopOpacity: "0", offset: "0%" }),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#5E2548",
                    stopOpacity: "0.04641108",
                    offset: "84.0867343%"
                  }
                ),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#FF0000",
                    stopOpacity: "0.567324765",
                    offset: "100%"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ n(
          "g",
          {
            id: "Page-1",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /* @__PURE__ */ C("g", { id: "firecms_logo", children: [
              /* @__PURE__ */ n(
                "circle",
                {
                  fill: "url(#radialGradient-1)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              ),
              /* @__PURE__ */ n(
                "circle",
                {
                  fill: "url(#radialGradient-2)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              ),
              /* @__PURE__ */ n(
                "circle",
                {
                  fill: "url(#radialGradient-3)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function Mr({
  children: e,
  maxWidth: t,
  fullScreen: r = !1,
  fadeTimeout: o = 800
}) {
  return /* @__PURE__ */ n(
    Fi,
    {
      in: !0,
      appear: !0,
      timeout: o,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ C(
        B,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: r ? "100vh" : "100%",
            "@supports (height: 100dvh)": {
              height: r ? "100dvh" : "100%"
            },
            justifyContent: t ? void 0 : "center",
            maxHeight: "100%",
            gap: 2,
            p: 2
          },
          children: [
            t && /* @__PURE__ */ n(B, { sx: {
              width: "100%",
              margin: "auto",
              maxWidth: t
            }, children: e }),
            !t && e
          ]
        }
      )
    }
  );
}
function Xg({
  children: e,
  mode: t = "info"
}) {
  const r = Be(), o = t === "info" ? r.palette.mode === "dark" ? "#193c47" : "#b9f4fe" : r.palette.mode === "dark" ? "#4d3800" : "#f9e3b9";
  return /* @__PURE__ */ n(
    B,
    {
      sx: (i) => ({
        my: 3,
        py: 1,
        px: 2,
        borderRadius: 1,
        background: o
      }),
      children: e
    }
  );
}
function Hu({
  hovered: e,
  drawerOpen: t,
  closeDrawer: r
}) {
  const o = ie(), i = ke(), a = e && !t;
  if (!i.topLevelNavigation)
    throw Error("Navigation not ready in Drawer");
  const {
    navigationEntries: s,
    groups: l
  } = i.topLevelNavigation, c = Object.values(s).filter((u) => !u.group), d = y((u) => t ? /* @__PURE__ */ n(B, { pt: 2, pl: 2, pr: 2, pb: 0.5, sx: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, children: /* @__PURE__ */ n(
    X,
    {
      variant: "caption",
      color: "textSecondary",
      className: "weight-500",
      sx: { flexGrow: 1 },
      children: u ? u.toUpperCase() : "Ungrouped views".toUpperCase()
    }
  ) }) : /* @__PURE__ */ n(B, { sx: { height: 16 } }), [t]), A = (u) => {
    const h = u.type === "collection" ? "drawer_navigate_to_collection" : u.type === "view" ? "drawer_navigate_to_view" : "unmapped_event";
    o.onAnalyticsEvent?.(h, { url: u.url });
  };
  return /* @__PURE__ */ C(Os, { children: [
    l.map((u) => /* @__PURE__ */ C(
      R.Fragment,
      {
        children: [
          d(u),
          Object.values(s).filter((h) => h.group === u).map((h, g) => /* @__PURE__ */ n(
            gi,
            {
              Icon: Fr(h.collection ?? h.view),
              tooltipsOpen: a,
              drawerOpen: t,
              onClick: () => A(h),
              url: h.url,
              name: h.name
            },
            `navigation_${g}`
          ))
        ]
      },
      `drawer_group_${u}`
    )),
    c.length > 0 && d(),
    c.map((u, h) => /* @__PURE__ */ n(
      gi,
      {
        Icon: Fr(u.collection ?? u.view),
        tooltipsOpen: a,
        onClick: () => A(u),
        drawerOpen: t,
        url: u.url,
        name: u.name
      },
      `navigation_${h}`
    ))
  ] });
}
function gi({
  name: e,
  Icon: t,
  drawerOpen: r,
  tooltipsOpen: o,
  url: i,
  onClick: a
}) {
  const s = Be(), c = /* @__PURE__ */ C(
    $s,
    {
      button: !0,
      component: Di,
      onClick: a,
      style: ({ isActive: d }) => ({
        fontWeight: d ? "600" : "500",
        background: d ? s.palette.mode === "light" ? Fe(s.palette.background.default, 0.1) : bt(s.palette.background.default, 0.08) : "inherit",
        minHeight: "48px",
        borderRadius: "0 16px 16px 0"
      }),
      sx: (d) => ({
        pl: 3,
        alignItems: "center"
      }),
      to: i,
      children: [
        /* @__PURE__ */ n(
          t,
          {
            fontSize: "medium",
            sx: (d) => ({ color: d.palette.mode === "dark" ? Po[500] : Po[700] })
          }
        ),
        /* @__PURE__ */ n(
          X,
          {
            variant: "subtitle2",
            sx: {
              opacity: r ? 1 : 0,
              fontWeight: "inherit",
              ml: 3,
              p: 0.5
            },
            children: e.toUpperCase()
          }
        )
      ]
    }
  );
  return r ? c : /* @__PURE__ */ n(
    me,
    {
      open: o,
      placement: "right",
      title: e,
      children: c
    }
  );
}
const dn = 280, _u = R.memo(
  function(t) {
    const {
      children: r,
      name: o,
      logo: i,
      toolbarExtraWidget: a,
      Drawer: s,
      autoOpenDrawer: l,
      FireCMSAppBarComponent: c = Zu
    } = t, d = Be(), A = He(d.breakpoints.up("md")), u = ke(), { containerRef: h } = is(), [g, f] = R.useState(!1), [p, m] = R.useState(!1), w = y(() => m(!0), []), b = y(() => m(!1), []), E = s || Hu, v = y(() => {
      f(!1);
    }, []), x = g || !!(A && l && p);
    return /* @__PURE__ */ C(
      B,
      {
        sx: {
          display: "flex",
          height: "100vh",
          "@supports (height: 100dvh)": {
            height: "100dvh"
          },
          width: "100vw",
          pt: "env(safe-area-inset-top)",
          pl: "env(safe-area-inset-left)",
          pr: "env(safe-area-inset-right)",
          pb: "env(safe-area-inset-bottom)"
        },
        children: [
          /* @__PURE__ */ n(
            c,
            {
              title: o,
              drawerOpen: x,
              toolbarExtraWidget: a
            }
          ),
          /* @__PURE__ */ n(
            qu,
            {
              onMouseEnter: w,
              onMouseMove: w,
              onMouseLeave: b,
              open: x,
              logo: i,
              hovered: l ? p : !1,
              setDrawerOpen: f,
              children: /* @__PURE__ */ n("nav", { children: u.loading ? /* @__PURE__ */ n(Lt, {}) : /* @__PURE__ */ n(
                E,
                {
                  hovered: p,
                  drawerOpen: x,
                  closeDrawer: v
                }
              ) })
            }
          ),
          /* @__PURE__ */ C(
            B,
            {
              component: "main",
              sx: {
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
                height: "100%",
                overflow: "auto"
              },
              children: [
                /* @__PURE__ */ n(Ju, {}),
                /* @__PURE__ */ n(
                  B,
                  {
                    ref: h,
                    sx: {
                      flexGrow: 1,
                      m: A ? 2 : 0,
                      mt: A ? 0 : 1,
                      borderRadius: A ? "12px" : void 0,
                      border: A ? `1px solid ${d.palette.divider}` : void 0,
                      height: "100%",
                      overflow: "auto"
                    },
                    children: /* @__PURE__ */ n(he, { children: r })
                  }
                )
              ]
            }
          )
        ]
      }
    );
  },
  xe
), Ju = tt("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "flex-end",
  // padding: theme.spacing(4, 12, 1, 3),
  // necessary for content to be below app bar
  ...e.mixins.toolbar
}));
function qu(e) {
  const t = ie(), r = Be(), o = He(r.breakpoints.up("md")), {
    open: i,
    logo: a,
    setDrawerOpen: s,
    hovered: l,
    ...c
  } = e;
  let d;
  a ? d = /* @__PURE__ */ n(
    "img",
    {
      style: {
        maxWidth: "100%",
        maxHeight: "100%"
      },
      src: a,
      alt: "Logo"
    }
  ) : d = /* @__PURE__ */ n(as, {});
  const A = /* @__PURE__ */ n(
    To,
    {
      color: "inherit",
      "aria-label": "Open drawer",
      edge: "start",
      onClick: () => s(!0),
      size: "large",
      sx: {
        position: "absolute",
        top: 8,
        left: 24
      },
      children: /* @__PURE__ */ n(Wl, {})
    }
  );
  return /* @__PURE__ */ C(q, { children: [
    !o && A,
    /* @__PURE__ */ C(
      Gs,
      {
        ...c,
        variant: o ? "permanent" : "temporary",
        open: i,
        onClose: o ? void 0 : () => {
          s(!1);
        },
        sx: {
          width: dn,
          flexShrink: 0,
          height: "100%",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          border: "none",
          ...i && {
            ...pi(r),
            "& .MuiDrawer-paper": pi(r)
          },
          ...!i && {
            ...mi(r, o),
            "& .MuiDrawer-paper": mi(r, o)
          }
        },
        children: [
          /* @__PURE__ */ n(
            To,
            {
              onClick: () => s(!1),
              sx: {
                position: "absolute",
                right: 16,
                top: 16,
                opacity: i ? 1 : 0,
                transition: r.transitions.create("opacity", {
                  easing: r.transitions.easing.sharp,
                  duration: r.transitions.duration.enteringScreen
                })
              },
              children: r.direction === "rtl" ? /* @__PURE__ */ n(zl, {}) : /* @__PURE__ */ n(Vl, {})
            }
          ),
          /* @__PURE__ */ n(Ri, { sx: {
            position: "absolute",
            left: i ? "-100%" : 0,
            right: i ? void 0 : 0,
            opacity: i ? 0 : 1,
            backgroundColor: r.palette.background.default,
            transition: r.transitions.create(["left", "opacity"], {
              easing: r.transitions.easing.sharp,
              duration: r.transitions.duration.enteringScreen
            })
          }, children: i ? A : /* @__PURE__ */ n(
            me,
            {
              title: "Open menu",
              placement: "right",
              children: A
            }
          ) }),
          /* @__PURE__ */ C(B, { sx: { height: "100%", width: "100%", overflow: "auto" }, children: [
            /* @__PURE__ */ n(
              rn,
              {
                color: "inherit",
                component: Di,
                to: ".",
                sx: (u) => ({
                  display: "block",
                  transition: u.transitions.create(["padding"], {
                    easing: u.transitions.easing.sharp,
                    duration: u.transitions.duration.enteringScreen
                  }),
                  p: u.spacing(
                    i ? 4 : 9,
                    i ? 12 : 2,
                    0,
                    i ? 3 : 2
                  )
                }),
                children: /* @__PURE__ */ n(me, { title: "Home", placement: "right", children: /* @__PURE__ */ n("div", { onClick: () => {
                  t.onAnalyticsEvent?.("drawer_navigate_to_home");
                }, children: d }) })
              },
              "breadcrumb-home"
            ),
            e.children
          ] }),
          /* @__PURE__ */ C(
            rn,
            {
              sx: (u) => ({
                width: dn,
                position: "fixed",
                bottom: 0,
                left: i ? 0 : "-100%",
                opacity: i ? 1 : 0,
                transition: u.transitions.create(["left", "opacity"], {
                  easing: u.transitions.easing.sharp,
                  duration: u.transitions.duration.enteringScreen
                }),
                px: "24px",
                py: 1,
                display: "flex",
                alignItems: "center",
                fontWeight: u.typography.fontWeightMedium,
                background: u.palette.mode === "light" ? "rgba(255,255,255,0.6)" : an(u.palette.background.paper, 0.1),
                backdropFilter: "blur(8px)"
                // borderTop: `1px solid ${theme.palette.divider}`
              }),
              href: "https://firecms.co?utm_source=drawer",
              onMouseDown: (u) => {
                u.preventDefault();
              },
              target: "_blank",
              children: [
                /* @__PURE__ */ n(
                  un,
                  {
                    style: { marginRight: "24px" },
                    fontSize: "small"
                  }
                ),
                "firecms.co"
              ]
            }
          )
        ]
      }
    )
  ] });
}
const pi = (e) => ({
  willChange: "width",
  pb: "32px",
  width: dn,
  border: "none",
  transition: e.transitions.create("width", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.enteringScreen
  }),
  backgroundColor: e.palette.background.default,
  overflowX: "hidden"
}), mi = (e, t) => ({
  willChange: "width",
  transition: e.transitions.create("width", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.leavingScreen
  }),
  border: "none",
  overflowX: "hidden",
  backgroundColor: e.palette.background.default,
  width: t ? `calc(${e.spacing(9)})` : "0px"
}), Zu = function({
  title: t,
  toolbarExtraWidget: r,
  drawerOpen: o
}) {
  const i = oo(), { breadcrumbs: a } = i, s = Vt(), { mode: l, toggleMode: c } = ro(), d = Be(), A = He(d.breakpoints.up("md")), u = s.user?.displayName ? s.user.displayName[0].toUpperCase() : s.user?.email ? s.user.email[0].toUpperCase() : "A";
  return /* @__PURE__ */ n(
    B,
    {
      sx: {
        position: "fixed",
        marginLeft: d.spacing(8),
        width: `calc(100% - ${d.spacing(8)})`,
        zIndex: A ? d.zIndex.drawer + 1 : void 0,
        transition: d.transitions.create(["width", "margin"], {
          easing: d.transitions.easing.sharp,
          duration: d.transitions.duration.leavingScreen
        }),
        ...o && A && {
          marginLeft: `calc(${dn}px - 8px)`,
          width: `calc(100% - ${dn}px)`,
          transition: d.transitions.create(["width", "margin"], {
            easing: d.transitions.easing.sharp,
            duration: d.transitions.duration.enteringScreen
          })
        }
      },
      children: /* @__PURE__ */ n(
        Wr,
        {
          direction: "down",
          in: !0,
          mountOnEnter: !0,
          unmountOnExit: !0,
          children: /* @__PURE__ */ C(Ri, { sx: { gap: 1 }, children: [
            /* @__PURE__ */ n(Ii, { lgDown: !0, children: /* @__PURE__ */ n(B, { mr: 2, children: /* @__PURE__ */ n(
              rn,
              {
                underline: "none",
                color: "inherit",
                component: br,
                to: ".",
                children: /* @__PURE__ */ n(
                  X,
                  {
                    variant: "h6",
                    noWrap: !0,
                    className: "weight-500",
                    children: t
                  }
                )
              },
              "breadcrumb-home"
            ) }) }),
            A && /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(
              Ls,
              {
                separator: /* @__PURE__ */ n(
                  Ml,
                  {
                    htmlColor: "rgb(0,0,0,0.87)",
                    fontSize: "small"
                  }
                ),
                "aria-label": "breadcrumb",
                children: a.map(
                  (h, g) => /* @__PURE__ */ n(
                    rn,
                    {
                      underline: "none",
                      color: "inherit",
                      component: br,
                      to: h.url,
                      children: /* @__PURE__ */ n(
                        Gr,
                        {
                          sx: (f) => ({
                            backgroundColor: f.palette.grey[200],
                            height: f.spacing(3),
                            color: f.palette.grey[800],
                            fontWeight: f.typography.fontWeightMedium,
                            "&:hover, &:focus": {
                              cursor: "pointer",
                              backgroundColor: f.palette.grey[300]
                            },
                            "&:active": {
                              boxShadow: f.shadows[1],
                              backgroundColor: f.palette.grey[400]
                            }
                          }),
                          label: h.title
                        }
                      )
                    },
                    `breadcrumb-${g}`
                  )
                )
              }
            ) }),
            /* @__PURE__ */ n(B, { flexGrow: 1 }),
            r && /* @__PURE__ */ n(he, { children: r }),
            /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
              oe,
              {
                color: "inherit",
                "aria-label": "Open drawer",
                edge: "start",
                onClick: () => c(),
                size: "large",
                children: l === "dark" ? /* @__PURE__ */ n(Ql, {}) : /* @__PURE__ */ n(Tl, {})
              }
            ) }),
            /* @__PURE__ */ n(B, { p: 1, children: s.user && s.user.photoURL ? /* @__PURE__ */ n(
              yo,
              {
                src: s.user.photoURL
              }
            ) : /* @__PURE__ */ n(yo, { children: u }) }),
            /* @__PURE__ */ n(
              de,
              {
                variant: "text",
                color: "inherit",
                onClick: s.signOut,
                children: "Log Out"
              }
            )
          ] })
        }
      )
    }
  );
}, Xu = (e) => e && Array.isArray(e) && e.length > 0 ? e.map((t, r) => t ? {
  [xa(t) + r]: Cn()
} : {}).reduce((t, r) => ({ ...t, ...r }), {}) : {};
function ss({
  droppableId: e,
  addLabel: t,
  value: r,
  disabled: o = !1,
  buildEntry: i,
  small: a,
  onInternalIdAdded: s,
  includeAddButton: l,
  newDefaultEntry: c,
  onValueChange: d
}) {
  const A = r && Array.isArray(r) && r.length > 0, u = ce(Xu(r)), [h, g] = Q(
    A ? Object.values(u.current) : []
  );
  Y(() => {
    if (A && r && r.length !== h.length) {
      const b = r.map((E, v) => {
        const x = xa(E) + v;
        if (x in u.current)
          return u.current[x];
        {
          const I = Cn();
          return u.current[x] = I, I;
        }
      });
      g(b);
    }
  }, [A, h.length, r]);
  const f = () => {
    if (o)
      return;
    const b = Cn(), E = [...h, b];
    s && s(b), g(E), d([...r ?? [], c]);
  }, p = (b) => {
    const E = [...h];
    E.splice(b, 1), g(E), d(r.filter((v, x) => x !== b));
  }, m = (b) => {
    const E = Cn(), v = r[b], x = [
      ...h.splice(0, b + 1),
      E,
      ...h.splice(b + 1, h.length - b - 1)
    ];
    s && s(E), g(x), d([...r.slice(0, b + 1), v, ...r.slice(b + 1)]);
  };
  return /* @__PURE__ */ n(ji, { onDragEnd: (b) => {
    if (!b.destination)
      return;
    const E = b.source.index, v = b.destination.index, x = [...h], I = x[E];
    x[E] = x[v], x[v] = I, g(x), d(ef(r, E, v));
  }, children: /* @__PURE__ */ n(
    Hi,
    {
      droppableId: e,
      renderClone: (b, E, v) => {
        const x = v.source.index, I = h[x];
        return /* @__PURE__ */ n(
          bi,
          {
            provided: b,
            internalId: I,
            index: x,
            small: a,
            disabled: o,
            buildEntry: i,
            remove: p,
            copy: m,
            isDragging: E.isDragging
          }
        );
      },
      children: (b, E) => /* @__PURE__ */ C(
        "div",
        {
          ...b.droppableProps,
          ref: b.innerRef,
          children: [
            A && h.map((v, x) => /* @__PURE__ */ n(
              _i,
              {
                draggableId: `array_field_${v}`,
                isDragDisabled: o,
                index: x,
                children: (I, k) => /* @__PURE__ */ n(
                  bi,
                  {
                    provided: I,
                    internalId: v,
                    index: x,
                    small: a,
                    disabled: o,
                    buildEntry: i,
                    remove: p,
                    copy: m,
                    isDragging: k.isDragging
                  }
                )
              },
              `array_field_${v}`
            )),
            b.placeholder,
            l && /* @__PURE__ */ n(
              B,
              {
                p: 1,
                justifyContent: "center",
                textAlign: "left",
                children: /* @__PURE__ */ n(
                  de,
                  {
                    variant: a ? "text" : "outlined",
                    size: a ? "small" : "large",
                    color: "primary",
                    disabled: o,
                    startIcon: /* @__PURE__ */ n(Ni, {}),
                    onClick: f,
                    children: t ?? "Add"
                  }
                )
              }
            )
          ]
        }
      )
    }
  ) });
}
function bi({
  provided: e,
  index: t,
  internalId: r,
  small: o,
  disabled: i,
  buildEntry: a,
  remove: s,
  copy: l,
  isDragging: c
}) {
  const [d, A] = Hr(), u = !o && A.height > 0 && A.height < 100, [h, g] = R.useState(!1), f = y(() => g(!0), []), p = y(() => g(!1), []);
  return /* @__PURE__ */ n(
    B,
    {
      onMouseEnter: f,
      onMouseMove: f,
      onMouseLeave: p,
      ref: e.innerRef,
      ...e.draggableProps,
      style: e.draggableProps.style,
      sx: (m) => ({
        backgroundColor: c || h ? va(m) : void 0,
        marginBottom: 1,
        borderRadius: `${m.shape.borderRadius}px`,
        opacity: 1
      }),
      children: /* @__PURE__ */ C(
        B,
        {
          display: "flex",
          alignItems: "start",
          children: [
            /* @__PURE__ */ n(
              B,
              {
                ref: d,
                flexGrow: 1,
                width: "calc(100% - 48px)",
                children: a(t, r)
              }
            ),
            /* @__PURE__ */ n(
              Ku,
              {
                direction: o ? "row" : "column",
                disabled: i,
                remove: s,
                index: t,
                provided: e,
                contentOverflow: u,
                copy: l
              }
            )
          ]
        }
      )
    }
  );
}
function Ku({
  direction: e,
  disabled: t,
  remove: r,
  index: o,
  provided: i,
  copy: a,
  contentOverflow: s
}) {
  const [l, c] = R.useState(null), d = (u) => {
    c(u.currentTarget), u.stopPropagation();
  }, A = () => {
    c(null);
  };
  return /* @__PURE__ */ C(
    B,
    {
      display: "flex",
      flexDirection: e === "row" ? "row-reverse" : "column",
      sx: {
        pl: 1,
        pt: 1
      },
      alignItems: "center",
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ...i.dragHandleProps,
            children: /* @__PURE__ */ n(
              me,
              {
                placement: e === "column" ? "left" : void 0,
                title: "Move",
                children: /* @__PURE__ */ n(
                  oe,
                  {
                    size: "small",
                    disabled: t,
                    sx: { cursor: t ? "inherit" : "move" },
                    children: /* @__PURE__ */ n(
                      Ol,
                      {
                        fontSize: "small",
                        color: t ? "disabled" : "inherit"
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        !s && /* @__PURE__ */ C(q, { children: [
          /* @__PURE__ */ n(
            me,
            {
              title: "Remove",
              placement: e === "column" ? "left" : void 0,
              children: /* @__PURE__ */ n(
                oe,
                {
                  size: "small",
                  "aria-label": "remove",
                  disabled: t,
                  onClick: () => r(o),
                  children: /* @__PURE__ */ n(
                    In,
                    {
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ n(
            me,
            {
              placement: e === "column" ? "left" : void 0,
              title: "Copy in this position",
              children: /* @__PURE__ */ n(
                oe,
                {
                  size: "small",
                  "aria-label": "copy",
                  disabled: t,
                  onClick: () => a(o),
                  children: /* @__PURE__ */ n(
                    yr,
                    {
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          )
        ] }),
        s && /* @__PURE__ */ C(q, { children: [
          /* @__PURE__ */ n(
            oe,
            {
              onClick: d,
              size: "small",
              children: /* @__PURE__ */ n(Pi, {})
            }
          ),
          /* @__PURE__ */ C(
            ki,
            {
              anchorEl: l,
              open: !!l,
              onClose: A,
              elevation: 3,
              children: [
                /* @__PURE__ */ C(Te, { dense: !0, onClick: () => r(o), children: [
                  /* @__PURE__ */ n(Bn, { children: /* @__PURE__ */ n(In, {}) }),
                  /* @__PURE__ */ n(Qt, { primary: "Remove" })
                ] }),
                /* @__PURE__ */ C(Te, { dense: !0, onClick: () => a(o), children: [
                  /* @__PURE__ */ n(Bn, { children: /* @__PURE__ */ n(yr, {}) }),
                  /* @__PURE__ */ n(Qt, { primary: "Copy" })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ef(e, t, r) {
  const o = Array.from(e), [i] = o.splice(t, 1);
  return o.splice(r, 0, i), o;
}
function Cn() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
function tf() {
  const e = Be();
  return He(e.breakpoints.up("xl"));
}
function nf({
  path: e,
  entityId: t,
  selectedSubPath: r,
  copy: o,
  collection: i,
  onValuesAreModified: a,
  formWidth: s,
  onUpdate: l,
  onClose: c
}) {
  i.customId && i.formAutoSave && console.warn(`The collection ${i.path} has customId and formAutoSave enabled. This is not supported and formAutoSave will be ignored`);
  const [d, A] = Q(!1), [u, h] = Q(void 0);
  co(u, () => {
    u && Nt({
      entityId: M?.id,
      collection: i,
      path: e,
      values: u,
      closeAfterSave: !1
    });
  }, !1, 2e3);
  const g = Be(), f = tf(), p = ce(!f), m = typeof s == "number" ? `${s}px` : s ?? Sn, w = Ue(), b = vo(), E = Et(), v = Ct(), x = ie(), I = Vt(), [k, F] = Q(void 0), [S, D] = Q(o ? "copy" : t ? "existing" : "new"), P = ce(void 0), T = P.current, O = (i.subcollections ?? []).filter((N) => !N.hideFromNavigation), ne = O?.length ?? 0, L = i.views, U = L?.length ?? 0, _ = i.formAutoSave && !i.customId, ee = (N) => {
    if (L) {
      const ue = L.map((ve) => ve.path).findIndex((ve) => ve === N);
      if (ue !== -1)
        return ue;
    }
    if (O) {
      const ue = O.map((ve) => ve.path).findIndex((ve) => ve === N);
      if (ue !== -1)
        return ue + U;
    }
    return -1;
  }, $ = U > 0 || ne > 0, G = r ?? Ba(
    i ? i.defaultSelectedView : void 0,
    {
      status: S,
      entityId: t
    }
  ), H = ce(G ? ee(G) : -1), V = H.current === -1 || f, {
    entity: z,
    dataLoading: Z,
    // eslint-disable-next-line no-unused-vars
    dataLoadingError: J
  } = no({
    path: e,
    entityId: t,
    collection: i,
    useCache: !1
  }), [M, j] = Q(z), [K, W] = Q(void 0);
  Y(() => {
    z && j(z);
  }, [z]), Y(() => {
    if (S === "new")
      W(!1);
    else {
      const N = M ? Ya(i, I, ct(e), M ?? null) : !1;
      M && W(!N);
    }
  }, [I, M, S]), Y(() => {
    p.current !== f && (r !== G && E.replace({
      path: e,
      entityId: t,
      selectedSubPath: G,
      updateUrl: !0,
      collection: i
    }), p.current = f);
  }, [G, f, r]);
  const ge = y((N) => {
    A(!1), v.open({
      type: "error",
      message: "Error before saving: " + N?.message
    }), console.error(N);
  }, [v]), be = y((N) => {
    A(!1), v.open({
      type: "error",
      message: "Error after saving (entity is saved): " + N?.message
    }), console.error(N);
  }, [v]), ae = (N) => {
    if (N !== -1) {
      if (L && N < U)
        return L[N].path;
      if (O)
        return O[N - U].path;
      throw Error("Something is wrong in getSelectedSubPath");
    }
  }, re = (N, ue) => {
    A(!1), _ || v.open({
      type: "success",
      message: `${i.singularName ?? i.name}: Saved correctly`
    }), j(N), D("existing"), a(!1), l && l({ entity: N }), ue ? (b.setBlocked(!1), b.close(!0), c?.()) : S !== "existing" && E.replace({
      path: e,
      entityId: N.id,
      selectedSubPath: ae(H.current),
      updateUrl: !0,
      collection: i
    });
  }, at = y((N) => {
    A(!1), v.open({
      type: "error",
      message: "Error saving: " + N?.message
    }), console.error("Error saving entity", e, t), console.error(N);
  }, [t, e, v]), Nt = ({ values: N, previousValues: ue, closeAfterSave: ve, entityId: ft, collection: Ht, path: _t }) => {
    A(!0), Aa({
      path: _t,
      entityId: ft,
      values: N,
      previousValues: ue,
      collection: Ht,
      status: S,
      dataSource: w,
      context: x,
      onSaveSuccess: (Jt) => re(Jt, ve),
      onSaveFailure: at,
      onPreSaveHookError: ge,
      onSaveSuccessHookError: be
    }).then();
  }, At = async ({
    collection: N,
    path: ue,
    entityId: ve,
    values: ft,
    previousValues: Ht,
    closeAfterSave: _t,
    autoSave: Jt
  }) => {
    S && (Jt ? h(ft) : Nt({
      collection: N,
      path: ue,
      entityId: ve,
      values: ft,
      previousValues: Ht,
      closeAfterSave: _t
    }));
  }, St = L && L.map(
    (N, ue) => {
      if (H.current !== ue)
        return null;
      N.builder && console.warn("customView.builder is deprecated, use customView.Builder instead", N);
      const ve = N.Builder ?? N.builder;
      return ve ? /* @__PURE__ */ n(
        B,
        {
          sx: {
            width: En,
            height: "100%",
            overflow: "auto",
            borderLeft: `1px solid ${g.palette.divider}`,
            [g.breakpoints.down("lg")]: {
              borderLeft: "inherit",
              width: Pt
            }
          },
          role: "tabpanel",
          flexGrow: 1,
          children: /* @__PURE__ */ n(he, { children: k && /* @__PURE__ */ n(
            ve,
            {
              collection: i,
              entity: M,
              modifiedValues: T ?? M?.values,
              formContext: k
            }
          ) })
        },
        `custom_view_${N.path}`
      ) : (console.error("customView.Builder is not defined"), null);
    }
  ).filter(Boolean), Ft = Z && !M || (!M || K === void 0) && (S === "existing" || S === "copy"), st = Ft || d, Xn = O && O.map(
    (N, ue) => {
      const ve = M ? `${e}/${M?.id}/${Ce(N.alias ?? N.path)}` : void 0;
      return H.current !== ue + U ? null : /* @__PURE__ */ C(
        B,
        {
          sx: {
            width: En,
            height: "100%",
            overflow: "auto",
            borderLeft: `1px solid ${g.palette.divider}`,
            [g.breakpoints.down("lg")]: {
              borderLeft: "inherit",
              width: Pt
            }
          },
          role: "tabpanel",
          flexGrow: 1,
          children: [
            st && /* @__PURE__ */ n(Lt, {}),
            !Ft && (M && ve ? /* @__PURE__ */ n(
              ns,
              {
                fullPath: ve,
                isSubCollection: !0,
                ...N
              }
            ) : /* @__PURE__ */ n(
              B,
              {
                sx: {
                  width: "100%",
                  height: "100%",
                  p: 3
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: /* @__PURE__ */ n(X, { variant: "label", children: "You need to save your entity before adding additional collections" })
              }
            ))
          ]
        },
        `subcol_${N.alias ?? N.path}`
      );
    }
  ).filter(Boolean), gn = y(() => {
    a(!1);
  }, []), pn = (N) => {
    H.current = N, E.replace({
      path: e,
      entityId: t,
      selectedSubPath: ae(N),
      updateUrl: !0,
      collection: i
    });
  }, mn = y((N) => {
    P.current = N;
  }, []), Kn = y((N) => {
    v.open({
      type: "error",
      message: "Error updating id, check the console"
    });
  }, []), er = y((N) => {
    j((ue) => ue ? {
      ...ue,
      id: N
    } : void 0);
  }, []), ut = (N) => {
    _ || a(N);
  };
  function tr() {
    const N = x.plugins;
    let ue = /* @__PURE__ */ n(
      yA,
      {
        status: S,
        path: e,
        collection: i,
        onEntitySaveRequested: At,
        onDiscard: gn,
        onValuesChanged: mn,
        onModified: ut,
        entity: M,
        onIdChange: er,
        onFormContextChange: F,
        hideId: i.hideIdFromForm,
        autoSave: _,
        onIdUpdateError: Kn
      }
    );
    return N && N.forEach((ve) => {
      ve.form?.provider && (ue = /* @__PURE__ */ n(
        ve.form.provider.Component,
        {
          status: S,
          path: e,
          collection: i,
          onDiscard: gn,
          onValuesChanged: mn,
          onModified: ut,
          entity: M,
          context: x,
          formContext: k,
          ...ve.form.provider.props,
          children: ue
        }
      ));
    }), /* @__PURE__ */ n(he, { children: ue });
  }
  const nr = K === void 0 ? /* @__PURE__ */ n(q, {}) : K ? /* @__PURE__ */ n(
    za,
    {
      entity: M,
      path: e,
      collection: i
    }
  ) : tr(), rr = O && O.map(
    (N) => /* @__PURE__ */ n(
      or,
      {
        sx: {
          fontSize: "0.875rem",
          minWidth: "140px"
        },
        wrapped: !0,
        label: N.name
      },
      `entity_detail_collection_tab_${N.name}`
    )
  ), bn = L && L.map(
    (N) => /* @__PURE__ */ n(
      or,
      {
        sx: {
          fontSize: "0.875rem",
          minWidth: "140px"
        },
        wrapped: !0,
        label: N.name
      },
      `entity_detail_custom_tab_${N.name}`
    )
  ), jt = /* @__PURE__ */ C(B, { sx: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    display: "flex",
    alignItems: "end",
    backgroundColor: g.palette.mode === "light" ? g.palette.background.default : g.palette.background.paper
  }, children: [
    /* @__PURE__ */ n(
      B,
      {
        sx: {
          pb: 1,
          alignSelf: "center"
        },
        children: /* @__PURE__ */ n(
          oe,
          {
            onClick: () => (c?.(), b.close(!1)),
            size: "large",
            children: /* @__PURE__ */ n(Ks, {})
          }
        )
      }
    ),
    /* @__PURE__ */ n(B, { flexGrow: 1 }),
    Ft && /* @__PURE__ */ n(
      B,
      {
        sx: {
          alignSelf: "center"
        },
        children: /* @__PURE__ */ n(yt, { size: 16, thickness: 8 })
      }
    ),
    /* @__PURE__ */ C(
      Ys,
      {
        value: H.current + 1,
        indicatorColor: "secondary",
        textColor: "inherit",
        onChange: (N, ue) => {
          pn(ue - 1);
        },
        sx: {
          paddingLeft: g.spacing(1),
          paddingRight: g.spacing(1),
          paddingTop: g.spacing(0)
        },
        variant: "scrollable",
        scrollButtons: "auto",
        children: [
          /* @__PURE__ */ n(
            or,
            {
              label: i.singularName ?? i.name,
              disabled: !$,
              onClick: () => {
                pn(-1);
              },
              sx: {
                display: $ ? void 0 : "none",
                fontSize: "0.875rem",
                minWidth: "140px"
              },
              wrapped: !0
            }
          ),
          bn,
          rr
        ]
      }
    )
  ] });
  return /* @__PURE__ */ n(
    B,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        transition: "width 250ms ease-in-out"
      },
      children: /* @__PURE__ */ C(q, { children: [
        jt,
        /* @__PURE__ */ n(Gn, {}),
        /* @__PURE__ */ C(B, { sx: {
          flexGrow: 1,
          height: "100%",
          width: `calc(${En} + ${m})`,
          maxWidth: "100%",
          [`@media (max-width: ${m})`]: {
            width: m
          },
          display: "flex",
          overflow: "auto",
          flexDirection: "row"
        }, children: [
          /* @__PURE__ */ n(B, { sx: {
            position: "relative",
            maxWidth: "100%"
          }, children: /* @__PURE__ */ n(
            B,
            {
              role: "tabpanel",
              hidden: !V,
              id: `form_${e}`,
              sx: {
                width: m,
                maxWidth: "100%",
                height: "100%",
                overflow: "auto",
                [g.breakpoints.down("sm")]: {
                  maxWidth: Pt,
                  width: Pt
                }
              },
              children: Ft ? /* @__PURE__ */ n(Lt, {}) : nr
            }
          ) }),
          St,
          Xn
        ] })
      ] })
    }
  );
}
function rf(e) {
  const {
    blocked: t,
    setBlocked: r,
    setBlockedNavigationMessage: o
  } = vo(), i = ke(), a = le(() => {
    if (!e)
      return;
    let l = e.collection;
    if (!l && (l = i.getCollection(e.path, e.entityId), !l))
      throw console.error("ERROR: No collection found in path `", e.path, "`. Entity id: ", e.entityId), Error("ERROR: No collection found in path `" + e.path + "`. Make sure you have defined a collection for this path in the root navigation.");
    return l;
  }, [i, e]);
  Y(() => {
    function l(c) {
      t && a && (c.preventDefault(), c.returnValue = `You have unsaved changes in this ${a.name}. Are you sure you want to leave this page?`);
    }
    return typeof window < "u" && window.addEventListener("beforeunload", l), () => {
      typeof window < "u" && window.removeEventListener("beforeunload", l);
    };
  }, [t, a]);
  const s = y((l) => {
    r(l), o(l ? /* @__PURE__ */ C(q, { children: [
      " You have unsaved changes in this ",
      /* @__PURE__ */ n("b", { children: a?.name }),
      "."
    ] }) : void 0);
  }, [a?.name, r, o]);
  return !e || !a ? /* @__PURE__ */ n("div", { style: { width: Sn } }) : /* @__PURE__ */ n(q, { children: /* @__PURE__ */ n(he, { children: /* @__PURE__ */ n(
    nf,
    {
      ...e,
      formWidth: e.width,
      collection: a,
      onValuesAreModified: s
    }
  ) }) });
}
const ls = "new";
function of(e, t) {
  if (t)
    return Pt;
  const r = !e.selectedSubPath, o = typeof e.width == "number" ? `${e.width}px` : e.width;
  return r ? o ?? Sn : `calc(${En} + ${o ?? Sn})`;
}
const af = (e, t) => {
  const r = An(), o = ce(!1), i = Be(), a = He(i.breakpoints.down("sm"));
  Y(() => {
    if (!e.loading && !o.current) {
      if (e.isUrlCollectionPath(r.pathname)) {
        const d = r.hash === `#${ls}`, A = e.urlPathToDataPath(r.pathname), u = sf(A, e.collections, d);
        t.replace(u.map((h) => pr(h, e, a)));
      }
      o.current = !0;
    }
  }, [r, e, t, a]);
  const s = y(() => {
    t.close();
  }, [t]), l = y((d) => {
    if (d.copy && !d.entityId)
      throw Error("If you want to copy an entity you need to provide an entityId");
    const A = Ba(
      d.collection ? d.collection.defaultSelectedView : void 0,
      {
        status: d.copy ? "copy" : d.entityId ? "existing" : "new",
        entityId: d.entityId
      }
    );
    t.open(pr({ selectedSubPath: A, ...d }, e, a));
  }, [t, e, a]), c = y((d) => {
    if (d.copy && !d.entityId)
      throw Error("If you want to copy an entity you need to provide an entityId");
    t.replace(pr(d, e, a));
  }, [e, t, a]);
  return {
    close: s,
    open: l,
    replace: c
  };
};
function sf(e, t, r) {
  const o = to({
    path: e,
    collections: t
  }), i = [];
  let a = "";
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    if (l.type === "collection" && (a = l.path), s > 0) {
      const c = o[s - 1];
      if (l.type === "entity")
        i.push(
          {
            path: l.path,
            entityId: l.entityId,
            copy: !1
          }
        );
      else if (l.type === "custom_view") {
        if (c.type === "entity") {
          const d = i[i.length - 1];
          d && (d.selectedSubPath = l.view.path);
        }
      } else if (l.type === "collection" && c.type === "entity") {
        const d = i[i.length - 1];
        d && (d.selectedSubPath = l.collection.alias ?? l.collection.path);
      }
    }
  }
  return r && i.push({
    path: a,
    copy: !1
  }), i;
}
const pr = (e, t, r) => {
  const o = Ce(e.path), i = e.entityId ? t.buildUrlCollectionPath(`${o}/${e.entityId}/${e.selectedSubPath || ""}`) : t.buildUrlCollectionPath(`${o}#${ls}`);
  return {
    key: `${e.path}/${e.entityId}`,
    component: /* @__PURE__ */ n(rf, { ...e }),
    urlPath: i,
    parentUrlPath: t.buildUrlCollectionPath(o),
    width: of(e, r),
    onClose: e.onClose
  };
};
function cs(e) {
  const {
    path: t,
    collections: r = [],
    currentFullPath: o
  } = e, i = Ce(t).split("/"), a = eo(i), s = [];
  for (let l = 0; l < a.length; l++) {
    const c = a[l], d = r && r.find((A) => A.alias === c || A.path === c);
    if (d) {
      const A = d.alias ?? d.path, u = o && o.length > 0 ? o + "/" + A : A, h = Ce(Ce(t).replace(c, "")), g = h.length > 0 ? h.split("/") : [];
      if (g.length > 0) {
        const f = g[0], p = u + "/" + f;
        if (s.push(new _e(f, u)), g.length > 1) {
          const m = g.slice(1).join("/");
          if (!d)
            throw Error("collection not found resolving path: " + d);
          d.subcollections && s.push(...cs({
            path: m,
            collections: d.subcollections,
            currentFullPath: p
          }));
        }
      }
      break;
    }
  }
  return s;
}
function lf({
  basePath: e,
  baseCollectionPath: t,
  authController: r,
  collections: o,
  views: i,
  collectionOverrideHandler: a,
  userConfigPersistence: s,
  plugins: l,
  dataSource: c
}) {
  const d = An(), [A, u] = Q(), [h, g] = Q(), [f, p] = Q(!1), [m, w] = Q(void 0), [b, E] = Q(!0), [v, x] = Q(void 0), I = Ce(e), k = Ce(t), F = I ? `/${I}` : "/", S = I ? `/${I}/${k}` : `/${k}`, D = y(
    (V) => I ? `/${I}/${wn(V)}` : `/${wn(V)}`,
    [I]
  ), P = y(
    (V) => `${Ce(t)}/${wn(V)}`,
    [t]
  ), T = y((V, z) => {
    const Z = [
      ...(V ?? []).map((M) => M.hideFromNavigation ? void 0 : {
        url: P(M.alias ?? M.path),
        type: "collection",
        name: M.name.trim(),
        path: M.alias ?? M.path,
        collection: M,
        description: M.description?.trim(),
        group: M.group?.trim()
      }).filter(Boolean),
      ...(z ?? []).map((M) => M.hideFromNavigation ? void 0 : {
        url: D(Array.isArray(M.path) ? M.path[0] : M.path),
        name: M.name.trim(),
        type: "view",
        view: M,
        description: M.description?.trim(),
        group: M.group?.trim()
      }).filter(Boolean)
    ], J = Object.values(Z).map((M) => M.group).filter(Boolean).filter((M, j, K) => K.indexOf(M) === j);
    return { navigationEntries: Z, groups: J };
  }, [D, P]), O = y(async () => {
    if (!r.initialLoading) {
      try {
        const [V = [], z = []] = await Promise.all(
          [
            cf(o, r, c, l),
            df(i, r, c)
          ]
        );
        u(V), g(z), w(T(V ?? [], z));
      } catch (V) {
        console.error(V), x(V);
      }
      E(!1), p(!0);
    }
  }, [o, r.user, r.initialLoading, c, l, i, T]);
  Y(() => {
    O();
  }, [O]);
  const ne = y((V, z, Z = !1) => {
    if (!A)
      return;
    const J = Kr(Ce(V), A), M = Z ? s?.getCollectionConfig(V) : void 0, j = J ? it(J, M) : void 0;
    let K = j;
    const W = a && a({
      entityId: z,
      path: Ce(V)
    });
    if (W && (K = W), j) {
      const ge = j.subcollections, be = j.callbacks, ae = j.permissions;
      K = {
        ...K,
        subcollections: K?.subcollections ?? ge,
        callbacks: K?.callbacks ?? be,
        permissions: K?.permissions ?? ae
      };
    }
    if (K)
      return { ...j, ...K };
  }, [
    e,
    t,
    A,
    a
  ]), L = y(
    (V) => Ce(V + "/").startsWith(Ce(S) + "/"),
    [S]
  ), U = y((V) => {
    if (V.startsWith(S))
      return V.replace(S, "");
    throw Error("Expected path starting with " + S);
  }, [S]), _ = y(
    ({
      path: V
    }) => `s/edit/${wn(V)}`,
    []
  ), ee = y((V) => {
    if (!A)
      throw Error("Collections have not been initialised yet");
    return na(V, A);
  }, [A]), $ = d.state, G = $ && $.base_location ? $.base_location : d, H = y((V) => cs({
    path: V,
    collections: A
  }), [A]);
  return {
    collections: A ?? [],
    views: h ?? [],
    loading: !f || b,
    navigationLoadingError: v,
    homeUrl: F,
    basePath: e,
    baseCollectionPath: t,
    initialised: f,
    getCollection: ne,
    isUrlCollectionPath: L,
    urlPathToDataPath: U,
    buildUrlCollectionPath: P,
    buildUrlEditCollectionPath: _,
    buildCMSUrlPath: D,
    resolveAliasesFrom: ee,
    topLevelNavigation: m,
    baseLocation: G,
    refreshNavigation: O,
    getParentReferencesFromPath: H
  };
}
function wn(e) {
  return encodeURIComponent(Ce(e)).replaceAll("%2F", "/").replaceAll("%23", "#");
}
function ds(e, t) {
  return e.filter((r) => r.permissions ? qn(r, t, [r.path], null).read !== !1 : !0).map((r) => r.subcollections ? {
    ...r,
    subcollections: ds(r.subcollections, t)
  } : r);
}
async function cf(e, t, r, o) {
  let i = [];
  return typeof e == "function" ? i = await e({
    user: t.user,
    authController: t,
    dataSource: r
  }) : Array.isArray(e) && (i = e), i = ds(i, t), o && o.forEach((a) => {
    a.collections?.injectCollections && (i = a.collections?.injectCollections(i ?? []));
  }), i;
}
async function df(e, t, r) {
  let o = [];
  return typeof e == "function" ? o = await e({
    user: t.user,
    authController: t,
    dataSource: r
  }) : Array.isArray(e) && (o = e), o;
}
function Af() {
  const e = An(), t = Yn(), [r, o] = Q([]), i = ce(r), a = ce({}), s = ce(0), l = (u) => {
    i.current = u, o(u);
  };
  Y(() => {
    const g = (e.state?.panels ?? []).map((f) => a.current[f]).filter((f) => !!f);
    xe(i.current.map((f) => f.key), g.map((f) => f.key)) || l(g);
  }, [e]);
  const c = y(() => {
    if (r.length === 0)
      return;
    const u = r[r.length - 1], h = [...r.slice(0, -1)];
    if (l(h), s.current > 0)
      u.urlPath && t(-1), s.current--;
    else if (u.parentUrlPath) {
      const g = e.state?.base_location ?? e;
      t(
        u.parentUrlPath,
        {
          replace: !0,
          state: {
            base_location: g,
            panels: h.map((f) => f.key)
          }
        }
      );
    }
  }, [r, t, e]), d = y((u) => {
    const h = Array.isArray(u) ? u : [u];
    h.forEach((p) => {
      a.current[p.key] = p;
    }), s.current = s.current + h.length;
    const g = e.state?.base_location ?? e, f = [...r, ...h];
    l(f), h.forEach((p) => {
      p.urlPath && t(
        p.urlPath,
        {
          state: {
            base_location: g,
            panels: f.map((m) => m.key)
          }
        }
      );
    });
  }, [e, t, r]), A = y((u) => {
    const h = Array.isArray(u) ? u : [u];
    h.forEach((p) => {
      a.current[p.key] = p;
    });
    const g = e.state?.base_location ?? e, f = [...r.slice(0, -h.length), ...h];
    l(f), h.forEach((p) => {
      p.urlPath && t(
        p.urlPath,
        {
          replace: !0,
          state: {
            base_location: g,
            panels: f.map((m) => m.key)
          }
        }
      );
    });
  }, [e, t, r]);
  return {
    sidePanels: r,
    close: c,
    open: d,
    replace: A
  };
}
const uf = "/c";
function ff(e) {
  const t = ro(), {
    children: r,
    collections: o,
    views: i,
    entityLinkBuilder: a,
    userConfigPersistence: s,
    dateTimeFormat: l,
    locale: c,
    authController: d,
    collectionOverrideHandler: A,
    storageSource: u,
    dataSource: h,
    basePath: g,
    baseCollectionPath: f,
    plugins: p,
    onAnalyticsEvent: m,
    fields: w
  } = e, b = g ?? "/", E = f ?? uf, v = c ? wi[c] : void 0, x = lf({
    basePath: b,
    baseCollectionPath: E,
    authController: d,
    collections: o,
    views: i,
    collectionOverrideHandler: A,
    userConfigPersistence: s,
    dataSource: h,
    plugins: p
  }), I = Af(), k = af(x, I), F = d.initialLoading || x.loading || (p?.some((D) => D.loading) ?? !1);
  if (x.navigationLoadingError)
    return /* @__PURE__ */ n(Mr, { maxWidth: 300, fullScreen: !0, children: /* @__PURE__ */ n(
      Ee,
      {
        title: "Error loading navigation",
        error: x.navigationLoadingError
      }
    ) });
  if (d.authError)
    return /* @__PURE__ */ n(Mr, { maxWidth: 300, fullScreen: !0, children: /* @__PURE__ */ n(
      Ee,
      {
        title: "Error loading auth",
        error: d.authError
      }
    ) });
  const S = {
    entityLinkBuilder: a,
    dateTimeFormat: l,
    locale: c,
    plugins: p,
    onAnalyticsEvent: m,
    fields: w ?? {}
  };
  return /* @__PURE__ */ n(Xr.Provider, { value: t, children: /* @__PURE__ */ n(da.Provider, { value: S, children: /* @__PURE__ */ n(
    ca.Provider,
    {
      value: s,
      children: /* @__PURE__ */ n(
        la.Provider,
        {
          value: u,
          children: /* @__PURE__ */ n(
            ra.Provider,
            {
              value: h,
              children: /* @__PURE__ */ n(
                ia.Provider,
                {
                  value: d,
                  children: /* @__PURE__ */ n(
                    aa.Provider,
                    {
                      value: I,
                      children: /* @__PURE__ */ n(
                        sa.Provider,
                        {
                          value: k,
                          children: /* @__PURE__ */ n(
                            oa.Provider,
                            {
                              value: x,
                              children: /* @__PURE__ */ n(Dc, { children: /* @__PURE__ */ n(
                                gs,
                                {
                                  dateAdapter: hs,
                                  utils: ps,
                                  locale: v,
                                  children: /* @__PURE__ */ n(
                                    hf,
                                    {
                                      loading: F,
                                      children: r
                                    }
                                  )
                                }
                              ) })
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  ) }) });
}
function hf({
  loading: e,
  children: t
}) {
  const r = ie();
  let o = t({
    context: r,
    loading: e
  });
  const i = r.plugins;
  return !e && i && i.forEach((a) => {
    a.provider && (o = /* @__PURE__ */ n(
      a.provider.Component,
      {
        ...a.provider.props,
        context: r,
        children: o
      }
    ));
  }), /* @__PURE__ */ n(q, { children: o });
}
const gf = ({ mode: e, primaryColor: t, secondaryColor: r, fontFamily: o, headersFontFamily: i }) => {
  Eo();
  const s = Eo({
    palette: {
      mode: e,
      background: {
        default: e === "dark" ? "#202024" : "#f8f8fa",
        paper: e === "dark" ? "#121215" : "#ffffff"
      },
      primary: {
        main: t || "#0070f4"
      },
      secondary: {
        main: r || Gl[400]
      },
      error: {
        main: Ll.A400
      }
    },
    shape: {
      borderRadius: 6
    },
    typography: {
      fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeightMedium: 500,
      h6: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "1.15rem",
        fontWeight: 500
      },
      h5: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "1.55rem"
      },
      h4: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "2rem",
        fontWeight: 500
      },
      h3: {
        fontFamily: o || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      h2: {
        fontFamily: i || "'IBM Plex Mono', 'Space Mono', 'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      h1: {
        fontFamily: i || "'IBM Plex Mono', 'Space Mono', 'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      label: {
        display: "block",
        color: "#838383",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.43
      }
    },
    components: {
      MuiSkeleton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-child td": {
              borderBottom: 0
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'IBM Plex Mono', 'Space Mono', monospace, 'Lucida Console'"
            },
            "&.weight-500": {
              fontWeight: 500
            }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'IBM Plex Mono', 'Space Mono', 'Lucida Console', monospace"
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
              display: "none"
            },
            "& input[type=number]": {
              MozAppearance: "textfield"
            }
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: "inherit"
          }
        }
      },
      // MuiPaper: {
      //     styleOverrides: {
      //         outlined: {
      //             border: "none",
      //         }
      //     }
      // },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      }
    }
  });
  return {
    ...s,
    // @ts-ignore
    shadows: s.shadows.map((l, c) => c === 3 ? "0px 0px 0px 0px rgba(0,0,0,0.18), 0px 0px 10px 0px rgba(0,0,0,0.12), 0px 0px 14px 2px rgba(0,0,0,0.10)" : l)
  };
}, pf = R.memo(
  function({
    HomePage: t = Nu,
    customRoutes: r
  }) {
    const o = An(), i = ke(), s = ie().plugins ?? [];
    if (!i)
      return /* @__PURE__ */ n(q, {});
    const l = o.state, c = l && l.base_location ? l.base_location : o, d = [];
    i.views && i.views.forEach((f) => {
      Array.isArray(f.path) ? d.push(...f.path.map((p) => vi(p, f))) : d.push(vi(f.path, f));
    });
    const u = [...i.collections ?? []].sort((f, p) => p.path.length - f.path.length).map(
      (f) => {
        const p = i.buildUrlCollectionPath(f.alias ?? f.path), m = [];
        return s && s.forEach((w) => {
          w.collections?.CollectionActions && m.push(...Tr(w.collections?.CollectionActions));
        }), m.push(...Tr(f.Actions)), /* @__PURE__ */ n(
          yn,
          {
            path: p + "/*",
            element: /* @__PURE__ */ n(
              Or,
              {
                path: p,
                title: f.name,
                type: "collection",
                children: /* @__PURE__ */ n(
                  ns,
                  {
                    isSubCollection: !1,
                    fullPath: f.alias ?? f.path,
                    ...f,
                    Actions: m
                  },
                  `collection_view_${f.alias ?? f.path}`
                )
              }
            )
          },
          `navigation_${f.alias ?? f.path}`
        );
      }
    ), h = /* @__PURE__ */ n(
      yn,
      {
        path: "/",
        element: /* @__PURE__ */ n(
          Or,
          {
            path: i.homeUrl,
            title: "Home",
            type: "home",
            children: /* @__PURE__ */ n(t, {})
          },
          "navigation_home"
        )
      }
    );
    return /* @__PURE__ */ C(zs, { location: c, children: [
      u,
      d,
      h,
      /* @__PURE__ */ n(
        yn,
        {
          path: "*",
          element: /* @__PURE__ */ n(ju, {})
        }
      ),
      r
    ] });
  }
), vi = (e, t) => /* @__PURE__ */ n(
  yn,
  {
    path: e,
    element: /* @__PURE__ */ n(
      Or,
      {
        path: e,
        title: t.name,
        type: "view",
        children: t.view
      },
      `navigation_${e}`
    )
  },
  "navigation_view_" + e
), Or = R.memo(
  function({
    children: t,
    title: r,
    path: o,
    type: i
  }) {
    const a = oo();
    return R.useEffect(() => {
      a.set({
        breadcrumbs: [{
          title: r,
          url: o
        }]
      });
    }, [o, r]), /* @__PURE__ */ n(q, { children: t });
  },
  xe
);
function Kg(e) {
  return e;
}
function ep(e) {
  return e;
}
function tp(e) {
  return e;
}
function np(e) {
  return e;
}
function rp(e) {
  return e;
}
function op(e) {
  return e;
}
function ip(e) {
  return e;
}
function ap(e) {
  return e;
}
function sp(e) {
  return e;
}
function mf() {
  const e = He("(prefers-color-scheme: dark)"), r = true ?? e, [o, i] = Q(r ? "dark" : "light");
  Y(() => {
    i(r ? "dark" : "light"), l(r ? "dark" : "light");
  }, [r]);
  const a = y(() => {
    i("dark"), l("dark");
  }, [e]), s = y(() => {
    i("light"), l("light");
  }, []), l = y((d) => {
    document.body.style.setProperty("color-scheme", d);
  }, [document]), c = y(() => {
    o === "light" ? (a()) : (s());
  }, [o, e]);
  return {
    mode: o,
    setMode: i,
    toggleMode: c
  };
}
function bf() {
  const [e, t] = Q({}), r = y((f) => {
    return {};
  }, []), o = y((f) => {
    const p = `collection_config::${Ko(f)}`;
    return e[p] ? e[p] : r(p);
  }, [e, r]), i = y((f, p) => {
    const m = `collection_config::${Ko(f)}`;
   
  }, [r]), [a, s] = Q([]), [l, c] = Q([]), [d, A] = Q([]);
  Y(() => {
    // s(localStorage.getItem("recently_visited_paths") ? JSON.parse(localStorage.getItem("recently_visited_paths")) : []), c(localStorage.getItem("favourite_paths") ? JSON.parse(localStorage.getItem("favourite_paths")) : []), A(localStorage.getItem("collapsed_groups") ? JSON.parse(localStorage.getItem("collapsed_groups")) : []);
  }, []);
  const u = y((f) => {
    // localStorage.setItem("recently_visited_paths", JSON.stringify(f)), s(f);
  }, []), h = y((f) => {
    // localStorage.setItem("favourite_paths", JSON.stringify(f)), c(f);
  }, []), g = y((f) => {
    // localStorage.setItem("collapsed_groups", JSON.stringify(f)), A(f);
  }, []);
  return {
    onCollectionModified: i,
    getCollectionConfig: o,
    recentlyVisitedPaths: a,
    setRecentlyVisitedPaths: u,
    favouritePaths: l,
    setFavouritePaths: h,
    collapsedGroups: d,
    setCollapsedGroups: g
  };
}
const vf = ({ children: e }) => /* @__PURE__ */ n(
  js,
  {
    maxSnack: 3,
    autoHideDuration: 3500,
    children: e
  }
), xf = ({
  firebaseApp: e,
  signInOptions: t
}) => {
  const [r, o] = Q(void 0), [i, a] = Q(), [s, l] = Q(), [c, d] = Q(!0), [A, u] = Q(!0), [h, g] = Q(!1), [f, p] = Q(), [m, w] = Q();
  Y(() => {
    if (e)
      try {
        const $ = De(e);
        return a(void 0), o($.currentUser), nc(
          $,
          E,
          (G) => l(G)
        );
      } catch ($) {
        return a($), () => {
        };
      }
  }, [e]);
  const b = y(() => {
    g(!0), o(null);
  }, []), E = y(async ($) => {
    o($), d(!1), u(!1);
  }, []), v = y(() => {
    const $ = De(e);
    rc($).then((G) => {
      o(null), l(null);
    }), g(!1);
  }, [e]), x = y(($) => t.find((G) => {
    if (G === null)
      throw Error("useFirebaseAuthController");
    if (typeof G == "object" && G.provider === $)
      return G;
  }), [t]), I = y(() => {
    const $ = new qi(), G = x("google.com");
    G?.scopes && G.scopes.forEach((V) => $.addScope(V)), G?.customParameters && $.setCustomParameters(G.customParameters);
    const H = De();
    Mo(H, $).catch(l);
  }, [x]), k = y(($, G) => {
    u(!0), Mo($, G).catch(l).then(() => u(!1));
  }, []), F = y(() => {
    const $ = De();
    u(!0), oc($).catch(l).then(() => u(!1));
  }, []), S = y(($, G) => {
    const H = De();
    return u(!0), ic(H, $, G).catch(l).then((V) => {
      u(!1), p(V ?? void 0);
    });
  }, []), D = y(() => {
    const $ = new Oo("apple.com"), G = x("apple.com");
    G?.scopes && G.scopes.forEach((V) => $.addScope(V)), G?.customParameters && $.setCustomParameters(G.customParameters);
    const H = De();
    k(H, $);
  }, [k, x]), P = y(() => {
    const $ = new ac(), G = x("facebook.com");
    G?.scopes && G.scopes.forEach((V) => $.addScope(V)), G?.customParameters && $.setCustomParameters(G.customParameters);
    const H = De();
    k(H, $);
  }, [k, x]), T = y(() => {
    const $ = new sc(), G = x("github.com");
    G?.scopes && G.scopes.forEach((V) => $.addScope(V)), G?.customParameters && $.setCustomParameters(G.customParameters);
    const H = De();
    k(H, $);
  }, [k, x]), O = y(() => {
    const $ = new Oo("microsoft.com"), G = x("microsoft.com");
    G?.scopes && G.scopes.forEach((V) => $.addScope(V)), G?.customParameters && $.setCustomParameters(G.customParameters);
    const H = De();
    k(H, $);
  }, [k, x]), ne = y(() => {
    const $ = new lc(), G = x("twitter.com");
    G?.customParameters && $.setCustomParameters(G.customParameters);
    const H = De();
    k(H, $);
  }, [k, x]), L = y(($, G) => {
    const H = De();
    u(!0), cc(H, $, G).catch(l).then(() => u(!1));
  }, []), U = y(($, G) => {
    const H = De();
    u(!0), dc(H, $, G).catch(l).then(() => u(!1));
  }, []), _ = y(($) => {
    const G = De();
    return u(!0), Ac(G, $).then((H) => (u(!1), H));
  }, []), ee = y(async () => {
    if (!r)
      throw Error("User is not logged in");
    return r.getIdToken();
  }, [r]);
  return {
    user: r ?? null,
    authError: i,
    authProviderError: s,
    authLoading: A,
    initialLoading: c,
    getAuthToken: ee,
    confirmationResult: f,
    signOut: v,
    loginSkipped: h,
    skipLogin: b,
    googleLogin: I,
    anonymousLogin: F,
    appleLogin: D,
    facebookLogin: P,
    githubLogin: T,
    microsoftLogin: O,
    twitterLogin: ne,
    emailPasswordLogin: L,
    phoneLogin: S,
    fetchSignInMethodsForEmail: _,
    createUserWithEmailAndPassword: U,
    extra: m,
    setExtra: w
  };
};
function wf(e) {
  if (!e)
    return e;
  const t = e.toDate();
  return t.setHours(0, 0, 0, 0), Zr.fromDate(t);
}
function yf({
  firebaseApp: e,
  textSearchController: t,
  fields: r = {}
}) {
  const o = y((l, c, d) => {
    const A = Tt(l.data()), u = l.data() ? d.properties ? kd(A, d.properties) : l.data() : void 0;
    return {
      id: l.id,
      path: As(l.ref.path),
      values: u
    };
  }, []), i = y((l, c, d, A, u, h, g = !1) => {
    if (!e)
      throw Error("useFirestoreDataSource Firebase not initialised");
    const f = lt(e), p = g ? Lo(f, l) : Zt(f, l), m = [];
    return c && Object.entries(c).filter(([w, b]) => !!b).forEach(([w, b]) => {
      const [E, v] = b;
      m.push(Yo(w, E, nn(v, f)));
    }), d && A && m.push(fc(d, A)), u && m.push(hc(u)), h && m.push(gc(h)), Wo(p, ...m);
  }, [e]), a = y((l, c, d) => {
    if (!e)
      throw Error("useFirestoreDataSource Firebase not initialised");
    const A = lt(e);
    return pc(gt(A, l, c)).then((u) => {
      if (!u.exists())
        return;
      const h = Ie({
        collection: d,
        path: l,
        entityId: u.id,
        values: Tt(u.data()),
        fields: r
      });
      return o(u, l, h);
    });
  }, [e]), s = y(async (l, c, d) => {
    if (!t)
      throw Error("Trying to make text search without specifying a FirestoreTextSearchController");
    const A = await t({
      path: l,
      searchString: c
    });
    if (A === void 0)
      throw Error("The current path is not supported by the specified FirestoreTextSearchController");
    const u = A.map(
      async (h) => {
        try {
          return await a(l, h, d);
        } catch (g) {
          console.error(g);
          return;
        }
      }
    );
    return Promise.all(u).then((h) => h.filter((g) => g !== void 0 && g.values));
  }, [a, t]);
  return {
    /**
     * Fetch entities in a Firestore path
     * @param path
     * @param collection
     * @param filter
     * @param limit
     * @param startAfter
     * @param searchString
     * @param orderBy
     * @param order
     * @return Function to cancel subscription
     * @see useCollectionFetch if you need this functionality implemented as a hook
     * @category Firestore
     */
    fetchCollection: y(({
      path: l,
      collection: c,
      filter: d,
      limit: A,
      startAfter: u,
      searchString: h,
      orderBy: g,
      order: f
    }) => {
      if (h)
        return s(l, h, c);
      const p = c.collectionGroup ?? !1;
      console.debug("Fetching collection", {
        path: l,
        limit: A,
        filter: d,
        startAfter: u,
        orderBy: g,
        order: f,
        collectionGroup: p
      });
      const m = i(l, d, g, f, u, A, p);
      return Vo(m).then((w) => w.docs.map((b) => {
        const E = Ie({
          collection: c,
          path: l,
          values: Tt(b.data()),
          fields: r
        });
        return o(b, l, E);
      }));
    }, [i, s]),
    /**
     * Listen to a entities in a given path
     * @param path
     * @param collection
     * @param onError
     * @param filter
     * @param limit
     * @param startAfter
     * @param searchString
     * @param orderBy
     * @param order
     * @param onUpdate
     * @return Function to cancel subscription
     * @see useCollectionFetch if you need this functionality implemented as a hook
     * @category Firestore
     */
    listenCollection: y(({
      path: l,
      collection: c,
      filter: d,
      limit: A,
      startAfter: u,
      searchString: h,
      orderBy: g,
      order: f,
      onUpdate: p,
      onError: m
    }) => {
      const w = c.collectionGroup ?? !1;
      console.debug("Listening collection", {
        path: l,
        collectionGroup: w,
        limit: A,
        filter: d,
        startAfter: u,
        orderBy: g,
        order: f
      });
      const b = i(l, d, g, f, u, A, w);
      if (h)
        return s(l, h, c).then(p).catch((v) => {
          m && m(v);
        }), () => {
        };
      const E = Ie({
        collection: c,
        path: l,
        fields: r
      });
      return zo(
        b,
        {
          next: (v) => {
            p(v.docs.map((x) => o(x, l, E)));
          },
          error: m
        }
      );
    }, [i, s]),
    /**
     * Retrieve an entity given a path and a collection
     * @param path
     * @param entityId
     * @param collection
     * @category Firestore
     */
    fetchEntity: y(({
      path: l,
      entityId: c,
      collection: d
    }) => a(l, c, d), [a]),
    /**
     *
     * @param path
     * @param entityId
     * @param collection
     * @param onUpdate
     * @param onError
     * @return Function to cancel subscription
     * @category Firestore
     */
    listenEntity: y(({
      path: l,
      entityId: c,
      collection: d,
      onUpdate: A,
      onError: u
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const h = lt(e);
      return zo(
        gt(h, l, c),
        {
          next: (g) => {
            const f = Ie({
              collection: d,
              path: l,
              entityId: g.id,
              fields: r
            });
            A(o(g, l, f));
          },
          error: u
        }
      );
    }, [e]),
    /**
     * Save entity to the specified path. Note that Firestore does not allow
     * undefined values.
     * @param path
     * @param entityId
     * @param values
     * @param schemaId
     * @param collection
     * @param status
     * @category Firestore
     */
    saveEntity: y(({
      path: l,
      entityId: c,
      values: d,
      collection: A,
      status: u
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const h = lt(e), f = Ie({
        collection: A,
        path: l,
        entityId: c,
        fields: r
      }).properties, p = Zt(h, l), m = nn(d, h), w = Bd(
        {
          inputValues: m,
          properties: f,
          status: u,
          timestampNowValue: Xi(),
          setDateToMidnight: wf
        }
      );
      console.debug("Saving entity", l, c, w);
      let b;
      return c ? b = gt(p, c) : b = gt(p), mc(b, w, { merge: !0 }).then(() => ({
        id: b.id,
        path: l,
        values: Tt(w)
      }));
    }, [e]),
    /**
     * Delete an entity
     * @param entity
     * @param collection
     * @category Firestore
     */
    deleteEntity: y(({
      entity: l
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = lt(e);
      return bc(gt(c, l.path, l.id));
    }, [e]),
    /**
     * Check if the given property is unique in the given collection
     * @param path Collection path
     * @param name of the property
     * @param value
     * @param property
     * @param entityId
     * @return `true` if there are no other fields besides the given entity
     * @category Firestore
     */
    checkUniqueField: y((l, c, d, A, u) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const h = lt(e);
      if (console.debug("Check unique field entity", l, c, d, u), A.dataType === "array" && console.error("checkUniqueField received an array"), d == null)
        return Promise.resolve(!0);
      const g = Wo(Zt(h, l), Yo(c, "==", nn(d, h)));
      return Vo(g).then(
        (f) => f.docs.filter((p) => p.id !== u).length === 0
      );
    }, [e]),
    generateEntityId: y((l) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = lt(e);
      return gt(Zt(c, l)).id;
    }, [e]),
    countEntities: y(async (l) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = lt(e), d = l.collection.collectionGroup ? Lo(c, l.path) : Zt(c, l.path);
      return (await vc(d)).data().count;
    }, [e])
  };
}
function Tt(e) {
  if (e == null)
    return null;
  if (!Ki().isEqual(e)) {
    if (Xi().isEqual(e))
      return null;
    if (e instanceof Zr || typeof e.toDate == "function" && e.toDate() instanceof Date)
      return e.toDate();
    if (e instanceof Date)
      return e;
    if (e instanceof ea)
      return new Nn(e.latitude, e.longitude);
    if (e instanceof xc)
      return new _e(e.id, As(e.path));
    if (Array.isArray(e))
      return e.map(Tt).filter((t) => t !== void 0);
    if (typeof e == "object") {
      const t = {};
      for (const r of Object.keys(e)) {
        const o = Tt(e[r]);
        o !== void 0 && (t[r] = o);
      }
      return t;
    }
    return e;
  }
}
function nn(e, t) {
  return e === void 0 ? Ki() : Array.isArray(e) ? e.map((r) => nn(r, t)) : e instanceof _e ? gt(t, e.path, e.id) : e instanceof Nn ? new ea(e.latitude, e.longitude) : e instanceof Date ? Zr.fromDate(e) : e && typeof e == "object" ? Object.entries(e).map(([r, o]) => ({ [r]: nn(o, t) })).reduce((r, o) => ({ ...r, ...o }), {}) : e;
}
function As(e) {
  let t = e.lastIndexOf("/");
  return t = t === -1 ? e.length : t, e.substring(0, t);
}
function Ef({ firebaseApp: e }) {
  const [t, r] = Q();
  Y(() => {
    e && r(wc(e));
  }, [e]);
  const o = {};
  return {
    uploadFile({ file: i, fileName: a, path: s, metadata: l }) {
      if (!t)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      const c = a ?? i.name;
      return console.debug("Uploading file", c, i, s, l), yc(ir(t, `${s}/${c}`), i, l).then((d) => ({
        path: d.ref.fullPath
      }));
    },
    async getFile(i) {
      try {
        if (!t)
          throw Error("useFirebaseStorageSource Firebase not initialised");
        const a = ir(t, i), s = await Uo(a), c = await (await fetch(s)).blob();
        return new File([c], i);
      } catch (a) {
        if (a?.code === "storage/object-not-found")
          return null;
        throw a;
      }
    },
    async getDownloadURL(i) {
      if (!t)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      if (o[i])
        return o[i];
      const a = ir(t, i), [s, l] = await Promise.all([Uo(a), Ec(a)]), c = {
        url: s,
        metadata: l
      };
      return o[i] = c, c;
    }
  };
}
function Cf({
  authController: e,
  authentication: t,
  getAppCheckToken: r,
  appCheckForceRefresh: o = !1,
  storageSource: i,
  dataSource: a
}) {
  const s = !!t, [l, c] = Q(s), [d, A] = Q(!1), [u, h] = Q(!s || !!e.loginSkipped), g = u && (!s || !!e.user || !!e.loginSkipped) && !d;
  Y(() => {
    e.loginSkipped && h(!0);
  }, [e.loginSkipped]);
  const f = ce(), p = y(async () => {
    if (e.initialLoading)
      return;
    if (!e.user && !e.loginSkipped) {
      f.current = void 0, c(!1), h(!1);
      return;
    }
    const m = e.user;
    if (r)
      try {
        await r(o) ? console.debug("App Check success.") : (A("App Check failed."), e.signOut());
      } catch (w) {
        A(w.message), e.signOut();
      }
    if (t instanceof Function && m && !xe(f.current, m)) {
      c(!0);
      try {
        await t({
          user: m,
          authController: e,
          dataSource: a,
          storageSource: i
        }) || (e.signOut(), A(!0));
      } catch (w) {
        A(w), e.signOut();
      }
      c(!1), h(!0), f.current = m;
    } else
      c(!1);
    !e.initialLoading && !m && h(!0);
  }, [e, t, r, o, a, i]);
  return Y(() => {
    p();
  }, [p]), {
    canAccessMainView: g,
    authLoading: s && l,
    notAllowedError: d,
    authVerified: u
  };
}
const Bf = `It seems like the provided Firebase config is not correct. If you 
are using the credentials provided automatically by Firebase 
Hosting, make sure you link your Firebase app to Firebase Hosting. 
`;
function kf({
  firebaseConfig: e,
  onFirebaseInit: t,
  name: r,
  authDomain: o
}) {
  const [i, a] = R.useState(), [s, l] = R.useState(!1), [c, d] = R.useState(), A = y((u) => {
    try {
      const h = Cc(u, r ?? "[DEFAULT]");
      d(void 0), l(!1), a(h);
    } catch (h) {
      console.error("Error initialising Firebase", h), d(Bf + `
` + (h.message ?? JSON.stringify(h)));
    }
  }, [r]);
  return Y(() => {
    t && e && i && t(e, i);
  }, [i]), Y(() => {
    l(!0), e ? A(e) : process.env.NODE_ENV === "production" ? fetch("/__/firebase/init.json").then(async (u) => {
      if (console.debug("Firebase init response", u.status), u && u.status < 300) {
        const h = await u.json();
        o && (h.authDomain = o), A(h);
      }
    }).catch(
      (u) => {
        l(!1), d(
          "Could not load Firebase configuration from Firebase hosting. If the app is not deployed in Firebase hosting, you need to specify the configuration manually" + u.toString()
        );
      }
    ) : (l(!1), d(
      "You need to deploy the app to Firebase hosting or specify a Firebase configuration object"
    ));
  }, [e, A]), {
    firebaseApp: i,
    firebaseConfigLoading: s,
    configError: c
  };
}
function If({
  firebaseApp: e,
  options: t
}) {
  t?.debugToken && Object.assign(window, {
    FIREBASE_APPCHECK_DEBUG_TOKEN: t?.debugToken
  });
  const [r, o] = R.useState(!1), [i, a] = R.useState(), s = y((l) => {
    if (!(!i || !t))
      return Bc(i, l);
  }, [i, t]);
  return Y(() => {
    if (!t || !e)
      return;
    o(!0);
    const {
      providerKey: l,
      useEnterpriseRecaptcha: c,
      isTokenAutoRefreshEnabled: d
    } = t, A = kc(e, {
      provider: c ? new Ic(l) : new Sc(l),
      isTokenAutoRefreshEnabled: d
    });
    a(A), o(!1);
  }, [e, t]), {
    appCheckLoading: r,
    getAppCheckToken: t ? s : void 0
  };
}
const Sf = (e) => /* @__PURE__ */ n(q, { children: /* @__PURE__ */ C(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: 32,
    height: 32,
    children: [
      /* @__PURE__ */ C(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJb",
          x1: "29.401",
          x2: "29.401",
          y1: "4.064",
          y2: "106.734",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#ff5840" }),
            /* @__PURE__ */ n("stop", { offset: ".007", stopColor: "#ff5840" }),
            /* @__PURE__ */ n("stop", { offset: ".989", stopColor: "#fa528c" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#fa528c" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJb)",
          d: "M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37 c-4.94,0.83-9.17,3.85-11.64, 7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46 C48.81,10.83,49.13,13.71,47.46,15.5z"
        }
      ),
      /* @__PURE__ */ C(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJc",
          x1: "12.148",
          x2: "12.148",
          y1: ".872",
          y2: "47.812",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#feaa53" }),
            /* @__PURE__ */ n("stop", { offset: ".612", stopColor: "#ffcd49" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#ffde44" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJc)",
          d: "M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22 c-1.06-6.88,0.54-13.38, 3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"
        }
      ),
      /* @__PURE__ */ C(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJd",
          x1: "29.76",
          x2: "29.76",
          y1: "32.149",
          y2: "-6.939",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#42d778" }),
            /* @__PURE__ */ n("stop", { offset: ".428", stopColor: "#3dca76" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#34b171" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJd)",
          d: "M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05 C19.78,43.81, 25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"
        }
      ),
      /* @__PURE__ */ C(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJe",
          x1: "46",
          x2: "46",
          y1: "3.638",
          y2: "35.593",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#155cde" }),
            /* @__PURE__ */ n("stop", { offset: ".278", stopColor: "#1f7fe5" }),
            /* @__PURE__ */ n("stop", { offset: ".569", stopColor: "#279ceb" }),
            /* @__PURE__ */ n("stop", { offset: ".82", stopColor: "#2cafef" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#2eb5f0" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJe)",
          d: `M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15
        c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z`
        }
      )
    ]
  }
) }), Ff = (e) => /* @__PURE__ */ n(
  "svg",
  {
    width: 32,
    height: 32,
    viewBox: "0 0 56 56",
    style: { transform: "scale(2.8)" },
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ n(
      "g",
      {
        stroke: e === "light" ? "#424245" : "white",
        strokeWidth: "0.5",
        fillRule: "evenodd",
        children: /* @__PURE__ */ n(
          "path",
          {
            d: "M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",
            fill: e === "light" ? "#424245" : "white",
            fillRule: "nonzero"
          }
        )
      }
    )
  }
), Rf = (e) => /* @__PURE__ */ n(
  "svg",
  {
    fill: e === "light" ? "#1c1e21" : "white",
    role: "img",
    viewBox: "0 0 24 24",
    width: 28,
    height: 28,
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ n(
      "path",
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    )
  }
), Df = (e) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 90 90",
    children: /* @__PURE__ */ n("g", { children: /* @__PURE__ */ n(
      "path",
      {
        d: "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z",
        fill: e === "light" ? "#39569c" : "white"
      }
    ) })
  }
), Pf = (e) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 480 480",
    children: /* @__PURE__ */ n("g", { children: /* @__PURE__ */ n(
      "path",
      {
        d: "M0.176,224L0.001,67.963l192-26.072V224H0.176z M224.001,37.241L479.937,0v224H224.001V37.241z M479.999,256l-0.062,224   l-255.936-36.008V256H479.999z M192.001,439.918L0.157,413.621L0.147,256h191.854V439.918z",
        fill: e === "light" ? "#00a2ed" : "white"
      }
    ) })
  }
), Tf = (e) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ n(
      "path",
      {
        fill: e === "light" ? "#00acee" : "white",
        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
      }
    )
  }
), us = "recaptcha-container";
function Qf() {
  return Y(() => {
    if (!window || window?.recaptchaVerifier)
      return;
    const e = De();
    window.recaptchaVerifier = new Zi(
      us,
      {
        size: "invisible"
      },
      e
    );
  }, []), null;
}
function Mf({
  allowSkipLogin: e,
  logo: t,
  signInOptions: r,
  firebaseApp: o,
  authController: i,
  noUserComponent: a,
  disableSignupScreen: s = !1,
  disabled: l = !1,
  additionalComponent: c,
  notAllowedError: d
}) {
  const A = ro(), [u, h] = Q(!1), [g, f] = Q(!1), p = r.map((v) => typeof v == "object" ? v.provider : v), m = y(() => {
    const v = De(), x = new Zi("recaptcha", { size: "invisible" }, v), I = uc(v, i.authProviderError);
    if (I.hints[0].factorId === $o.FACTOR_ID) {
      const k = {
        multiFactorHint: I.hints[0],
        session: I.session
      };
      new Go(v).verifyPhoneNumber(k, x).then(function(S) {
        const D = String(window.prompt("Please enter the verification code that was sent to your mobile device.")), P = Go.credential(S, D), T = $o.assertion(P);
        return I.resolveSignIn(T);
      });
    } else
      console.warn("Unsupported second factor.");
  }, [i.authProviderError]);
  function w() {
    let v;
    if (i.user != null)
      return v;
    const x = ["auth/popup-closed-by-user", "auth/cancelled-popup-request"];
    return i.authProviderError && (i.authProviderError.code === "auth/operation-not-allowed" || i.authProviderError.code === "auth/configuration-not-found" ? v = /* @__PURE__ */ C("div", { children: [
      /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
        Ee,
        {
          error: "You need to enable Firebase auth and the corresponding login provider in your Firebase project"
        }
      ) }),
      o && /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
        "a",
        {
          href: `https://console.firebase.google.com/project/${o.options.projectId}/authentication/providers`,
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ n(
            de,
            {
              variant: "text",
              color: "primary",
              children: "Open Firebase configuration"
            }
          )
        }
      ) })
    ] }) : i.authProviderError.code === "auth/invalid-api-key" ? v = /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
      Ee,
      {
        title: "Invalid API key",
        error: "auth/invalid-api-key: Check that your Firebase config is set correctly in your `firebase-config.ts` file"
      }
    ) }) }) : x.includes(i.authProviderError.code) || (i.authProviderError.code === "auth/multi-factor-auth-required" && m(), v = /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(Ee, { error: i.authProviderError }) }))), v;
  }
  let b;
  t ? b = /* @__PURE__ */ n(
    "img",
    {
      src: t,
      style: {
        height: "100%",
        width: "100%",
        objectFit: "cover"
      },
      alt: "Logo"
    }
  ) : b = /* @__PURE__ */ n(as, {});
  let E;
  return d && (typeof d == "string" ? E = d : d instanceof Error ? E = d.message : E = "It looks like you don't have access to the CMS, based on the specified Authenticator configuration"), /* @__PURE__ */ n(
    Fi,
    {
      in: !0,
      timeout: 800,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ C(B, { sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        "@supports (minHeight: 100dvh)": {
          minHeight: "100dvh"
        },
        minWidth: "100vw",
        p: 2
      }, children: [
        /* @__PURE__ */ n("div", { id: "recaptcha" }),
        /* @__PURE__ */ C(B, { sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 480
        }, children: [
          /* @__PURE__ */ n(B, { m: 1, sx: {
            padding: 1,
            width: 260,
            height: 260
          }, children: b }),
          E && /* @__PURE__ */ n(B, { p: 2, children: /* @__PURE__ */ n(Ee, { error: E }) }),
          w(),
          !u && !g && /* @__PURE__ */ C(q, { children: [
            fs(i, p, A.mode, l),
            p.includes("password") && /* @__PURE__ */ n(
              nt,
              {
                disabled: l,
                text: "Email/password",
                icon: /* @__PURE__ */ n(Qi, { fontSize: "large" }),
                onClick: () => h(!0)
              }
            ),
            p.includes("phone") && /* @__PURE__ */ n(
              nt,
              {
                disabled: l,
                text: "Phone number",
                icon: /* @__PURE__ */ n(Xs, { fontSize: "large" }),
                onClick: () => f(!0)
              }
            ),
            p.includes("anonymous") && /* @__PURE__ */ n(
              nt,
              {
                disabled: l,
                text: "Log in anonymously",
                icon: /* @__PURE__ */ n(
                  Fc,
                  {
                    fontSize: "large"
                  }
                ),
                onClick: i.anonymousLogin
              }
            ),
            e && /* @__PURE__ */ n(B, { m: 1, children: /* @__PURE__ */ n(
              de,
              {
                disabled: l,
                onClick: i.skipLogin,
                children: "Skip login"
              }
            ) })
          ] }),
          u && /* @__PURE__ */ n(
            $f,
            {
              authController: i,
              onClose: () => h(!1),
              mode: A.mode,
              noUserComponent: a,
              disableSignupScreen: s
            }
          ),
          g && /* @__PURE__ */ n(
            Of,
            {
              authController: i,
              onClose: () => f(!1)
            }
          ),
          !u && !g && c
        ] })
      ] })
    }
  );
}
function nt({
  icon: e,
  onClick: t,
  text: r,
  disabled: o
}) {
  return /* @__PURE__ */ n(B, { m: 0.5, width: "100%", children: /* @__PURE__ */ n(
    de,
    {
      fullWidth: !0,
      variant: "outlined",
      disabled: o,
      onClick: t,
      children: /* @__PURE__ */ C(B, { sx: {
        p: "1",
        display: "flex",
        width: "240px",
        height: "32px",
        alignItems: "center",
        justifyItems: "center"
      }, children: [
        /* @__PURE__ */ n(B, { sx: {
          display: "flex",
          flexDirection: "column",
          width: "32px",
          alignItems: "center",
          justifyItems: "center"
        }, children: e }),
        /* @__PURE__ */ n(B, { sx: {
          flexGrow: 1,
          pl: 2,
          textAlign: "center"
        }, children: r })
      ] })
    }
  ) });
}
function Of({
  onClose: e,
  authController: t
}) {
  Qf();
  const [r, o] = Q(), [i, a] = Q(), [s, l] = Q(!1);
  return /* @__PURE__ */ C("form", { onSubmit: async (d) => {
    d.preventDefault(), i && t.confirmationResult ? (l(!1), t.confirmationResult.confirm(i).catch((A) => {
      A.code === "auth/invalid-verification-code" && l(!0);
    })) : r && t.phoneLogin(r, window.recaptchaVerifier);
  }, children: [
    s && /* @__PURE__ */ n(B, { p: 2, children: /* @__PURE__ */ n(Ee, { error: "Invalid confirmation code" }) }),
    /* @__PURE__ */ n("div", { id: us }),
    /* @__PURE__ */ C(se, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ n(
        oe,
        {
          onClick: e,
          children: /* @__PURE__ */ n(Er, { sx: {
            width: 20,
            height: 20
          } })
        }
      ) }),
      /* @__PURE__ */ n(se, { item: !0, xs: 12, sx: {
        p: 1,
        display: "flex"
      }, children: /* @__PURE__ */ n(
        X,
        {
          align: "center",
          variant: "subtitle2",
          children: "Please enter your phone number"
        }
      ) }),
      /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ n(
        ot,
        {
          placeholder: "",
          fullWidth: !0,
          value: r,
          disabled: !!(r && (t.authLoading || t.confirmationResult)),
          type: "phone",
          required: !0,
          onChange: (d) => o(d.target.value)
        }
      ) }),
      !!(r && t.confirmationResult) && /* @__PURE__ */ C(q, { children: [
        /* @__PURE__ */ n(se, { item: !0, xs: 12, sx: {
          mt: 2,
          p: 1,
          display: "flex"
        }, children: /* @__PURE__ */ n(
          X,
          {
            align: "center",
            variant: "subtitle2",
            children: "Please enter the confirmation code"
          }
        ) }),
        /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ n(
          ot,
          {
            placeholder: "",
            fullWidth: !0,
            value: i,
            type: "text",
            required: !0,
            onChange: (d) => a(d.target.value)
          }
        ) })
      ] }),
      /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ C(B, { sx: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%"
      }, children: [
        t.authLoading && /* @__PURE__ */ n(
          yt,
          {
            sx: { p: 1 },
            size: 16,
            thickness: 8
          }
        ),
        /* @__PURE__ */ n(de, { type: "submit", children: "Ok" })
      ] }) })
    ] })
  ] });
}
function $f({
  onClose: e,
  authController: t,
  mode: r,
  noUserComponent: o,
  disableSignupScreen: i
}) {
  const a = ce(null), [s, l] = Q(), [c, d] = Q(), [A, u] = Q(), h = c === void 0, g = c && c.includes("password"), f = c && !c.includes("password") && c.length > 0, p = c && !c.includes("password");
  Y(() => {
    (g || p) && a.current && a.current.focus();
  }, [g, p]), Y(() => {
    if (!document)
      return;
    const k = (F) => {
      F.keyCode === 27 && e();
    };
    return document.addEventListener("keydown", k, !1), () => {
      document.removeEventListener("keydown", k, !1);
    };
  }, [e]);
  function m() {
    s && t.fetchSignInMethodsForEmail(s).then((k) => {
      d(k);
    });
  }
  function w() {
    s && A && t.emailPasswordLogin(s, A);
  }
  function b() {
    s && A && t.createUserWithEmailAndPassword(s, A);
  }
  const E = () => {
    h ? e() : d(void 0);
  }, v = (k) => {
    k.preventDefault(), h ? m() : g ? w() : p && b();
  }, x = p ? "No user found with that email. Pick a password to create a new account" : g ? "Please enter your password" : "Please enter your email", I = p ? "Create account" : g ? "Login" : "Ok";
  return f ? /* @__PURE__ */ C(se, { container: !0, spacing: 1, children: [
    /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ n(
      oe,
      {
        onClick: E,
        children: /* @__PURE__ */ n(Er, { sx: {
          width: 20,
          height: 20
        } })
      }
    ) }),
    /* @__PURE__ */ C(se, { item: !0, xs: 12, sx: { p: 1 }, children: [
      /* @__PURE__ */ n(X, { align: "center", variant: "subtitle2", children: "You already have an account" }),
      /* @__PURE__ */ C(X, { align: "center", variant: "body2", children: [
        "You can use one of these methods to login with ",
        s
      ] })
    ] }),
    /* @__PURE__ */ n(se, { item: !0, xs: 12, children: c && fs(t, c, r, !1) })
  ] }) : /* @__PURE__ */ n(
    Wr,
    {
      direction: "up",
      in: !0,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ n("form", { onSubmit: v, children: /* @__PURE__ */ C(se, { container: !0, spacing: 1, children: [
        /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ n(
          oe,
          {
            onClick: E,
            children: /* @__PURE__ */ n(Er, { sx: {
              width: 20,
              height: 20
            } })
          }
        ) }),
        /* @__PURE__ */ n(se, { item: !0, xs: 12, sx: {
          p: 1,
          display: p && i ? "none" : "flex"
        }, children: /* @__PURE__ */ n(
          X,
          {
            align: "center",
            variant: "subtitle2",
            children: x
          }
        ) }),
        /* @__PURE__ */ n(
          se,
          {
            item: !0,
            xs: 12,
            sx: { display: h ? "inherit" : "none" },
            children: /* @__PURE__ */ n(
              ot,
              {
                placeholder: "Email",
                fullWidth: !0,
                autoFocus: !0,
                value: s ?? "",
                disabled: t.authLoading,
                type: "email",
                onChange: (k) => l(k.target.value)
              }
            )
          }
        ),
        /* @__PURE__ */ n(se, { item: !0, xs: 12, children: p && o }),
        /* @__PURE__ */ n(
          se,
          {
            item: !0,
            xs: 12,
            sx: { display: g || p && !i ? "inherit" : "none" },
            children: /* @__PURE__ */ n(
              ot,
              {
                placeholder: "Password",
                fullWidth: !0,
                value: A ?? "",
                disabled: t.authLoading,
                inputRef: a,
                type: "password",
                onChange: (k) => u(k.target.value)
              }
            )
          }
        ),
        /* @__PURE__ */ n(se, { item: !0, xs: 12, children: /* @__PURE__ */ C(B, { sx: {
          display: p && i ? "none" : "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "100%"
        }, children: [
          t.authLoading && /* @__PURE__ */ n(
            yt,
            {
              sx: { p: 1 },
              size: 16,
              thickness: 8
            }
          ),
          /* @__PURE__ */ n(de, { type: "submit", children: I })
        ] }) })
      ] }) })
    }
  );
}
function fs(e, t, r, o) {
  return /* @__PURE__ */ C(q, { children: [
    t.includes("google.com") && /* @__PURE__ */ n(
      nt,
      {
        disabled: o,
        text: "Sign in with Google",
        icon: Sf(),
        onClick: e.googleLogin
      }
    ),
    t.includes("microsoft.com") && /* @__PURE__ */ n(
      nt,
      {
        disabled: o,
        text: "Sign in with Microsoft",
        icon: Pf(r),
        onClick: e.microsoftLogin
      }
    ),
    t.includes("apple.com") && /* @__PURE__ */ n(
      nt,
      {
        disabled: o,
        text: "Sign in with Apple",
        icon: Ff(r),
        onClick: e.appleLogin
      }
    ),
    t.includes("github.com") && /* @__PURE__ */ n(
      nt,
      {
        disabled: o,
        text: "Sign in with Github",
        icon: Rf(r),
        onClick: e.githubLogin
      }
    ),
    t.includes("facebook.com") && /* @__PURE__ */ n(
      nt,
      {
        disabled: o,
        text: "Sign in with Facebook",
        icon: Df(r),
        onClick: e.facebookLogin
      }
    ),
    t.includes("twitter.com") && /* @__PURE__ */ n(
      nt,
      {
        disabled: o,
        text: "Sign in with Twitter",
        icon: Tf(r),
        onClick: e.twitterLogin
      }
    )
  ] });
}
const xi = [
  qi.PROVIDER_ID
];
function lp({
  name: e,
  logo: t,
  logoDark: r,
  toolbarExtraWidget: o,
  authentication: i,
  collectionOverrideHandler: a,
  collections: s,
  views: l,
  textSearchController: c,
  allowSkipLogin: d,
  signInOptions: A = xi,
  firebaseConfig: u,
  onFirebaseInit: h,
  appCheckOptions: g,
  primaryColor: f,
  secondaryColor: p,
  fontFamily: m,
  dateTimeFormat: w,
  locale: b,
  HomePage: E,
  basePath: v,
  baseCollectionPath: x,
  LoginView: I,
  onAnalyticsEvent: k,
  fields: F = {},
  plugins: S,
  autoOpenDrawer: D
}) {
  Wc(e, t);
  const {
    firebaseApp: P,
    firebaseConfigLoading: T,
    configError: O
  } = kf({
    onFirebaseInit: h,
    firebaseConfig: u
  }), {
    appCheckLoading: ne,
    getAppCheckToken: L
  } = If({
    firebaseApp: P,
    options: g
  }), U = xf({
    firebaseApp: P,
    signInOptions: A
  }), _ = bf(), ee = yf({
    firebaseApp: P,
    textSearchController: c,
    fields: F
  }), $ = Ef({
    firebaseApp: P
  }), {
    authLoading: G,
    canAccessMainView: H,
    notAllowedError: V
  } = Cf({
    authController: U,
    authentication: i,
    getAppCheckToken: L,
    appCheckForceRefresh: g && g.forceRefresh ? g.forceRefresh : !1,
    dataSource: ee,
    storageSource: $
  }), z = mf(), Z = le(() => gf({
    mode: z.mode,
    primaryColor: f,
    secondaryColor: p,
    fontFamily: m
  }), [m, z.mode, f, p]);
  return O ? /* @__PURE__ */ n(Mr, { fullScreen: !0, children: O }) : T || !P || ne ? /* @__PURE__ */ C(q, { children: [
    /* @__PURE__ */ n(Co, {}),
    /* @__PURE__ */ n(Lt, {})
  ] }) : /* @__PURE__ */ n(Us, { basename: v, children: /* @__PURE__ */ n(vf, { children: /* @__PURE__ */ n(
    Tc,
    {
      value: z,
      children: /* @__PURE__ */ n(
        ff,
        {
          collections: s,
          views: l,
          authController: U,
          userConfigPersistence: _,
          collectionOverrideHandler: a,
          dateTimeFormat: w,
          dataSource: ee,
          storageSource: $,
          entityLinkBuilder: ({ entity: J }) => `https://console.firebase.google.com/project/${P.options.projectId}/firestore/data/${J.path}/${J.id}`,
          locale: b,
          basePath: v,
          baseCollectionPath: x,
          onAnalyticsEvent: k,
          plugins: S,
          fields: F,
          children: ({
            context: J,
            loading: M
          }) => {
            let j;
            if (M || G)
              j = /* @__PURE__ */ n(Lt, {});
            else {
              const K = z.mode === "dark" && r ? r : t;
              H ? j = /* @__PURE__ */ C(
                _u,
                {
                  name: e,
                  logo: K,
                  toolbarExtraWidget: o,
                  autoOpenDrawer: D,
                  children: [
                    /* @__PURE__ */ n(
                      pf,
                      {
                        HomePage: E
                      }
                    ),
                    /* @__PURE__ */ n(Su, {})
                  ]
                }
              ) : j = /* @__PURE__ */ n(
                I ?? Mf,
                {
                  logo: K,
                  allowSkipLogin: d,
                  signInOptions: A ?? xi,
                  firebaseApp: P,
                  authController: U,
                  notAllowedError: V
                }
              );
            }
            return /* @__PURE__ */ C(Ws, { theme: Z, children: [
              /* @__PURE__ */ n(Co, { enableColorScheme: !0 }),
              j
            ] });
          }
        }
      )
    }
  ) }) });
}
function cp(e, t) {
  return console.debug("Performing Algolia query", e, t), e.search(t).then(({ hits: r }) => r.map((o) => o.objectID)).catch((r) => (console.error(r), []));
}
export {
  ss as ArrayContainer,
  bi as ArrayContainerItem,
  so as ArrayEnumPreview,
  ti as ArrayEnumSelectBinding,
  Ku as ArrayItemOptions,
  sd as ArrayOfMapsPreview,
  Od as ArrayOfReferencesFieldBinding,
  ud as ArrayOfReferencesPreview,
  hd as ArrayOfStorageComponentsPreview,
  gd as ArrayOfStringsPreview,
  md as ArrayOneOfPreview,
  Jo as ArrayPropertyEnumPreview,
  jo as ArrayPropertyPreview,
  Qg as AsyncPreviewComponent,
  oA as BlockFieldBinding,
  yd as BooleanPreview,
  uo as BooleanSwitch,
  qg as BreadcrumbUpdater,
  Fd as COLLECTION_PATH_SEPARATOR,
  Mr as CenteredView,
  Lt as CircularProgressCenter,
  ma as ColorChip,
  It as CustomDialogActions,
  BA as DEFAULT_FIELD_CONFIGS,
  wd as DatePreview,
  mo as DateTimeField,
  _d as DateTimeFieldBinding,
  zg as DebouncedTextField,
  Zg as DeleteConfirmationDialog,
  Ud as DisabledTextField,
  Hu as Drawer,
  gi as DrawerNavigationItem,
  Xt as EmptyValue,
  _a as EntityCollectionTable,
  ns as EntityCollectionView,
  yA as EntityForm,
  za as EntityPreview,
  _e as EntityReference,
  Ve as EnumValuesChip,
  he as ErrorBoundary,
  Ee as ErrorView,
  Bt as ExpandablePanel,
  Me as FieldDescription,
  du as FilledMenuItem,
  cu as FilledSelect,
  ff as FireCMS,
  Zu as FireCMSAppBar,
  da as FireCMSContextInstance,
  Nu as FireCMSHomePage,
  as as FireCMSLogo,
  lp as FirebaseCMSApp,
  Mf as FirebaseLoginView,
  Ao as FormikArrayContainer,
  Nn as GeoPoint,
  Nc as ImagePreview,
  Xg as InfoLabel,
  eA as KeyValueFieldBinding,
  vd as KeyValuePreview,
  Oe as LabelWithIcon,
  nt as LoginButton,
  Xd as MapFieldBinding,
  bd as MapPropertyPreview,
  io as Markdown,
  sA as MarkdownFieldBinding,
  Tc as ModeControllerProvider,
  os as NavigationCollectionCard,
  Qr as NavigationGroup,
  pf as NavigationRoutes,
  ju as NotFoundPage,
  Ed as NumberPropertyPreview,
  Ut as PropertyFieldBinding,
  Qe as PropertyPreview,
  ka as ReadOnlyFieldBinding,
  qd as ReferenceFieldBinding,
  xt as ReferencePreview,
  Wu as ReferenceSelectionInner,
  rA as RepeatFieldBinding,
  Or as RouteWrapper,
  _u as Scaffold,
  ei as SelectFieldBinding,
  Su as SideDialogs,
  Ot as SkeletonPropertyComponent,
  vf as SnackbarProvider,
  Kc as StorageThumbnail,
  td as StorageThumbnailInternal,
  ii as StorageUploadFieldBinding,
  ba as StringPropertyPreview,
  Ug as SwitchControl,
  Hd as SwitchFieldBinding,
  Kt as TextFieldBinding,
  Mn as TextInput,
  Da as TextareaAutosize,
  Fn as UrlComponentPreview,
  au as VirtualTable,
  Rg as addInitialSlash,
  ap as buildAdditionalFieldDelegate,
  Kg as buildCollection,
  ip as buildEntityCallbacks,
  op as buildEnumValueConfig,
  rp as buildEnumValues,
  sp as buildFieldConfig,
  tp as buildProperties,
  np as buildPropertiesOrBuilder,
  ep as buildProperty,
  go as canCreateEntity,
  Wa as canDeleteEntity,
  Ya as canEditEntity,
  nn as cmsToFirestoreModel,
  li as collectionIconKeys,
  gf as createCMSDefaultTheme,
  $c as deleteEntityWithCallbacks,
  Tt as firestoreToCMSModel,
  ct as fullPathToCollectionSegments,
  Ng as getBadgeForWidget,
  Hg as getBracketNotation,
  Kr as getCollectionByPathOrAlias,
  eo as getCollectionPathsCombinations,
  jg as getColorForProperty,
  lo as getDefaultValueFor,
  wa as getDefaultValueForDataType,
  Tn as getDefaultValuesFor,
  ho as getFieldConfig,
  Oa as getFieldId,
  xa as getHashValue,
  SA as getIcon,
  Re as getIconForProperty,
  Fr as getIconForView,
  IA as getIdIcon,
  Dg as getLastSegment,
  Ga as getPropertyInPath,
  Cn as getRandomId,
  $t as getReferenceFrom,
  Va as getReferencePreviewKeys,
  La as getResolvedPropertyInPath,
  dt as getValueInPath,
  Dd as hydrateRegExp,
  Xo as isEmptyObject,
  Hn as isHidden,
  cr as isObject,
  je as isPropertyBuilder,
  hn as isReadOnly,
  kA as isReferenceProperty,
  Wg as isValidRegExp,
  Og as joinCollectionLists,
  Ea as mergeCollections,
  it as mergeDeep,
  cp as performAlgoliaTextSearch,
  Cd as pick,
  _g as plural,
  Lg as randomColor,
  ln as randomString,
  qo as removeFunctions,
  Mg as removeInPath,
  Ce as removeInitialAndTrailingSlashes,
  Qc as removeInitialSlash,
  Mc as removeTrailingSlash,
  Zo as removeUndefined,
  Tg as renderSkeletonCaptionText,
  ha as renderSkeletonIcon,
  fa as renderSkeletonImageThumbnail,
  rt as renderSkeletonText,
  kt as resolveArrayProperty,
  Ie as resolveCollection,
  na as resolveCollectionPathAliases,
  Ba as resolveDefaultSelectedView,
  _n as resolveEnumValues,
  Gc as resolveNavigationFrom,
  qn as resolvePermissions,
  Qa as resolveProperties,
  We as resolveProperty,
  Ma as resolvePropertyEnum,
  kd as sanitizeData,
  Aa as saveEntityWithCallbacks,
  Rd as segmentsToStrippedPath,
  Yg as serializeRegExp,
  Jg as singular,
  Ca as sortProperties,
  Ko as stripCollectionPath,
  $g as toKebabCase,
  Gg as toSnakeCase,
  Br as traverseValueProperty,
  ya as traverseValuesProperties,
  Bd as updateDateAutoValues,
  Vt as useAuthController,
  oo as useBreadcrumbsContext,
  Wc as useBrowserTitleAndIcon,
  bf as useBuildLocalConfigurationPersistence,
  mf as useBuildModeController,
  Ge as useClearRestoreValue,
  Lc as useClipboard,
  Oc as useCollectionFetch,
  Ue as useDataSource,
  co as useDebounce,
  Vg as useDebounceValue,
  no as useEntityFetch,
  ie as useFireCMSContext,
  xf as useFirebaseAuthController,
  Ef as useFirebaseStorageSource,
  yf as useFirestoreDataSource,
  kf as useInitialiseFirebase,
  If as useInitializeAppCheck,
  ro as useModeController,
  ke as useNavigationContext,
  Un as useReferenceDialog,
  Pg as useResolvedNavigationFrom,
  rs as useSelectionController,
  vo as useSideDialogContext,
  zn as useSideDialogsController,
  Et as useSideEntityController,
  Ct as useSnackbarController,
  fn as useStorageSource,
  Cf as useValidateAuthenticator
};
//# sourceMappingURL=index.es.js.map
