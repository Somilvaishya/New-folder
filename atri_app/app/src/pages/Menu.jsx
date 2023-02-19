import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex42Cb, useFlex43Cb, useFlex45Cb, useDiv65Cb, useDiv66Cb, useDiv67Cb, useDiv68Cb, useDiv69Cb, useDiv70Cb, useDiv71Cb, useDiv72Cb, useFlex46Cb, useImage159Cb, useTextBox194Cb, useTextBox195Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useTextBox200Cb, useImage161Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useTextBox207Cb, useTextBox208Cb, useTextBox229Cb, useImage151Cb, useLink31Cb, useLink32Cb, useLink33Cb, useLink35Cb, useLink36Cb, useButton28Cb, useButton30Cb, useTextBox190Cb, useTextBox191Cb, useButton31Cb, useButton32Cb, useButton33Cb, useButton34Cb, useButton35Cb, useImage152Cb, useImage153Cb, useImage154Cb, useImage155Cb, useImage157Cb, useImage158Cb, useTextBox193Cb, useTextBox209Cb, useTextBox210Cb, useImage162Cb, useImage163Cb, useImage165Cb, useImage164Cb, useImage166Cb, useImage167Cb, useImage168Cb, useImage169Cb, useImage170Cb, useTextBox211Cb, useImage171Cb, useImage172Cb, useImage173Cb, useImage174Cb, useTextBox212Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useTextBox217Cb, useTextBox218Cb, useTextBox219Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useTextBox223Cb, useTextBox224Cb, useTextBox225Cb, useTextBox226Cb, useTextBox227Cb, useTextBox228Cb, useImage175Cb, useImage176Cb, useImage177Cb, useImage178Cb, useImage179Cb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex42Props = useStore((state)=>state["Menu"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Menu"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Menu"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Menu"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex45Props = useStore((state)=>state["Menu"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Menu"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Div65Props = useStore((state)=>state["Menu"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Menu"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Div66Props = useStore((state)=>state["Menu"]["Div66"]);
const Div66IoProps = useIoStore((state)=>state["Menu"]["Div66"]);
const Div66Cb = useDiv66Cb()
const Div67Props = useStore((state)=>state["Menu"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Menu"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Div68Props = useStore((state)=>state["Menu"]["Div68"]);
const Div68IoProps = useIoStore((state)=>state["Menu"]["Div68"]);
const Div68Cb = useDiv68Cb()
const Div69Props = useStore((state)=>state["Menu"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Menu"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div70Props = useStore((state)=>state["Menu"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["Menu"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Div71Props = useStore((state)=>state["Menu"]["Div71"]);
const Div71IoProps = useIoStore((state)=>state["Menu"]["Div71"]);
const Div71Cb = useDiv71Cb()
const Div72Props = useStore((state)=>state["Menu"]["Div72"]);
const Div72IoProps = useIoStore((state)=>state["Menu"]["Div72"]);
const Div72Cb = useDiv72Cb()
const Flex46Props = useStore((state)=>state["Menu"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Menu"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Image159Props = useStore((state)=>state["Menu"]["Image159"]);
const Image159IoProps = useIoStore((state)=>state["Menu"]["Image159"]);
const Image159Cb = useImage159Cb()
const TextBox194Props = useStore((state)=>state["Menu"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Menu"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["Menu"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Menu"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["Menu"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Menu"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Menu"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Menu"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Menu"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Menu"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Menu"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Menu"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["Menu"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Menu"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const Image161Props = useStore((state)=>state["Menu"]["Image161"]);
const Image161IoProps = useIoStore((state)=>state["Menu"]["Image161"]);
const Image161Cb = useImage161Cb()
const TextBox201Props = useStore((state)=>state["Menu"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Menu"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Menu"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Menu"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["Menu"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Menu"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["Menu"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Menu"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Menu"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Menu"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["Menu"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Menu"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["Menu"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Menu"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const TextBox208Props = useStore((state)=>state["Menu"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Menu"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox229Props = useStore((state)=>state["Menu"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Menu"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const Image151Props = useStore((state)=>state["Menu"]["Image151"]);
const Image151IoProps = useIoStore((state)=>state["Menu"]["Image151"]);
const Image151Cb = useImage151Cb()
const Link31Props = useStore((state)=>state["Menu"]["Link31"]);
const Link31IoProps = useIoStore((state)=>state["Menu"]["Link31"]);
const Link31Cb = useLink31Cb()
const Link32Props = useStore((state)=>state["Menu"]["Link32"]);
const Link32IoProps = useIoStore((state)=>state["Menu"]["Link32"]);
const Link32Cb = useLink32Cb()
const Link33Props = useStore((state)=>state["Menu"]["Link33"]);
const Link33IoProps = useIoStore((state)=>state["Menu"]["Link33"]);
const Link33Cb = useLink33Cb()
const Link35Props = useStore((state)=>state["Menu"]["Link35"]);
const Link35IoProps = useIoStore((state)=>state["Menu"]["Link35"]);
const Link35Cb = useLink35Cb()
const Link36Props = useStore((state)=>state["Menu"]["Link36"]);
const Link36IoProps = useIoStore((state)=>state["Menu"]["Link36"]);
const Link36Cb = useLink36Cb()
const Button28Props = useStore((state)=>state["Menu"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["Menu"]["Button28"]);
const Button28Cb = useButton28Cb()
const Button30Props = useStore((state)=>state["Menu"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["Menu"]["Button30"]);
const Button30Cb = useButton30Cb()
const TextBox190Props = useStore((state)=>state["Menu"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Menu"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["Menu"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Menu"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const Button31Props = useStore((state)=>state["Menu"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["Menu"]["Button31"]);
const Button31Cb = useButton31Cb()
const Button32Props = useStore((state)=>state["Menu"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["Menu"]["Button32"]);
const Button32Cb = useButton32Cb()
const Button33Props = useStore((state)=>state["Menu"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["Menu"]["Button33"]);
const Button33Cb = useButton33Cb()
const Button34Props = useStore((state)=>state["Menu"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["Menu"]["Button34"]);
const Button34Cb = useButton34Cb()
const Button35Props = useStore((state)=>state["Menu"]["Button35"]);
const Button35IoProps = useIoStore((state)=>state["Menu"]["Button35"]);
const Button35Cb = useButton35Cb()
const Image152Props = useStore((state)=>state["Menu"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["Menu"]["Image152"]);
const Image152Cb = useImage152Cb()
const Image153Props = useStore((state)=>state["Menu"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["Menu"]["Image153"]);
const Image153Cb = useImage153Cb()
const Image154Props = useStore((state)=>state["Menu"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["Menu"]["Image154"]);
const Image154Cb = useImage154Cb()
const Image155Props = useStore((state)=>state["Menu"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["Menu"]["Image155"]);
const Image155Cb = useImage155Cb()
const Image157Props = useStore((state)=>state["Menu"]["Image157"]);
const Image157IoProps = useIoStore((state)=>state["Menu"]["Image157"]);
const Image157Cb = useImage157Cb()
const Image158Props = useStore((state)=>state["Menu"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["Menu"]["Image158"]);
const Image158Cb = useImage158Cb()
const TextBox193Props = useStore((state)=>state["Menu"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Menu"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox209Props = useStore((state)=>state["Menu"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Menu"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["Menu"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Menu"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const Image162Props = useStore((state)=>state["Menu"]["Image162"]);
const Image162IoProps = useIoStore((state)=>state["Menu"]["Image162"]);
const Image162Cb = useImage162Cb()
const Image163Props = useStore((state)=>state["Menu"]["Image163"]);
const Image163IoProps = useIoStore((state)=>state["Menu"]["Image163"]);
const Image163Cb = useImage163Cb()
const Image165Props = useStore((state)=>state["Menu"]["Image165"]);
const Image165IoProps = useIoStore((state)=>state["Menu"]["Image165"]);
const Image165Cb = useImage165Cb()
const Image164Props = useStore((state)=>state["Menu"]["Image164"]);
const Image164IoProps = useIoStore((state)=>state["Menu"]["Image164"]);
const Image164Cb = useImage164Cb()
const Image166Props = useStore((state)=>state["Menu"]["Image166"]);
const Image166IoProps = useIoStore((state)=>state["Menu"]["Image166"]);
const Image166Cb = useImage166Cb()
const Image167Props = useStore((state)=>state["Menu"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["Menu"]["Image167"]);
const Image167Cb = useImage167Cb()
const Image168Props = useStore((state)=>state["Menu"]["Image168"]);
const Image168IoProps = useIoStore((state)=>state["Menu"]["Image168"]);
const Image168Cb = useImage168Cb()
const Image169Props = useStore((state)=>state["Menu"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["Menu"]["Image169"]);
const Image169Cb = useImage169Cb()
const Image170Props = useStore((state)=>state["Menu"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["Menu"]["Image170"]);
const Image170Cb = useImage170Cb()
const TextBox211Props = useStore((state)=>state["Menu"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Menu"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const Image171Props = useStore((state)=>state["Menu"]["Image171"]);
const Image171IoProps = useIoStore((state)=>state["Menu"]["Image171"]);
const Image171Cb = useImage171Cb()
const Image172Props = useStore((state)=>state["Menu"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["Menu"]["Image172"]);
const Image172Cb = useImage172Cb()
const Image173Props = useStore((state)=>state["Menu"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["Menu"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image174Props = useStore((state)=>state["Menu"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["Menu"]["Image174"]);
const Image174Cb = useImage174Cb()
const TextBox212Props = useStore((state)=>state["Menu"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Menu"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Menu"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Menu"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Menu"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Menu"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Menu"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Menu"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Menu"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Menu"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Menu"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Menu"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Menu"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Menu"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Menu"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Menu"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Menu"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Menu"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["Menu"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Menu"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Menu"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Menu"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["Menu"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Menu"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox224Props = useStore((state)=>state["Menu"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Menu"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox225Props = useStore((state)=>state["Menu"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Menu"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["Menu"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Menu"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["Menu"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Menu"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["Menu"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Menu"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image175Props = useStore((state)=>state["Menu"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["Menu"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image176Props = useStore((state)=>state["Menu"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["Menu"]["Image176"]);
const Image176Cb = useImage176Cb()
const Image177Props = useStore((state)=>state["Menu"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["Menu"]["Image177"]);
const Image177Cb = useImage177Cb()
const Image178Props = useStore((state)=>state["Menu"]["Image178"]);
const Image178IoProps = useIoStore((state)=>state["Menu"]["Image178"]);
const Image178Cb = useImage178Cb()
const Image179Props = useStore((state)=>state["Menu"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["Menu"]["Image179"]);
const Image179Cb = useImage179Cb()

  return (<>
  <Flex2 className="p-Menu Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image2 className="p-Menu Image151 bpt" {...Image151Props} {...Image151Cb} {...Image151IoProps}/>
<Link2 className="p-Menu Link31 bpt" {...Link31Props} {...Link31Cb} {...Link31IoProps}/>
<Link2 className="p-Menu Link32 bpt" {...Link32Props} {...Link32Cb} {...Link32IoProps}/>
<Link2 className="p-Menu Link33 bpt" {...Link33Props} {...Link33Cb} {...Link33IoProps}/>
<Link2 className="p-Menu Link36 bpt" {...Link36Props} {...Link36Cb} {...Link36IoProps}/>
<Link2 className="p-Menu Link35 bpt" {...Link35Props} {...Link35Cb} {...Link35IoProps}/>
<Button2 className="p-Menu Button30 bpt" {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
<Button2 className="p-Menu Button28 bpt" {...Button28Props} {...Button28Cb} {...Button28IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox2 className="p-Menu TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox2 className="p-Menu TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<Image2 className="p-Menu Image157 bpt" {...Image157Props} {...Image157Cb} {...Image157IoProps}/>
<Image2 className="p-Menu Image158 bpt" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
<Image2 className="p-Menu Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<Image2 className="p-Menu Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
<Image2 className="p-Menu Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<Image2 className="p-Menu Image152 bpt" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<TextBox2 className="p-Menu TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<Button2 className="p-Menu Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
<Button2 className="p-Menu Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
<Button2 className="p-Menu Button33 bpt" {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
<Button2 className="p-Menu Button34 bpt" {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
<Button2 className="p-Menu Button35 bpt" {...Button35Props} {...Button35Cb} {...Button35IoProps}/>
</Flex2>
<Image2 className="p-Menu Image159 bpt" {...Image159Props} {...Image159Cb} {...Image159IoProps}/>
<TextBox2 className="p-Menu TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox2 className="p-Menu TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox2 className="p-Menu TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
<TextBox2 className="p-Menu TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox2 className="p-Menu TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox2 className="p-Menu TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox2 className="p-Menu TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<Image2 className="p-Menu Image161 bpt" {...Image161Props} {...Image161Cb} {...Image161IoProps}/>
<TextBox2 className="p-Menu TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox2 className="p-Menu TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox2 className="p-Menu TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<TextBox2 className="p-Menu TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox2 className="p-Menu TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
<TextBox2 className="p-Menu TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox2 className="p-Menu TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
<TextBox2 className="p-Menu TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<Flex2 className="p-Menu Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Div2 className="p-Menu Div72 bpt" {...Div72Props} {...Div72Cb} {...Div72IoProps}>
<Image2 className="p-Menu Image169 bpt" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
</Div2>
<Div2 className="p-Menu Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<Image2 className="p-Menu Image166 bpt" {...Image166Props} {...Image166Cb} {...Image166IoProps}/>
</Div2>
<Div2 className="p-Menu Div68 bpt" {...Div68Props} {...Div68Cb} {...Div68IoProps}>
<Image2 className="p-Menu Image164 bpt" {...Image164Props} {...Image164Cb} {...Image164IoProps}/>
</Div2>
<Div2 className="p-Menu Div71 bpt" {...Div71Props} {...Div71Cb} {...Div71IoProps}>
<Image2 className="p-Menu Image168 bpt" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
</Div2>
<Div2 className="p-Menu Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}>
<Image2 className="p-Menu Image167 bpt" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
</Div2>
<TextBox2 className="p-Menu TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<Div2 className="p-Menu Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<Image2 className="p-Menu Image165 bpt" {...Image165Props} {...Image165Cb} {...Image165IoProps}/>
</Div2>
<Div2 className="p-Menu Div66 bpt" {...Div66Props} {...Div66Cb} {...Div66IoProps}>
<Image2 className="p-Menu Image163 bpt" {...Image163Props} {...Image163Cb} {...Image163IoProps}/>
</Div2>
<TextBox2 className="p-Menu TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<Div2 className="p-Menu Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Image2 className="p-Menu Image162 bpt" {...Image162Props} {...Image162Cb} {...Image162IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-Menu Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Image2 className="p-Menu Image170 bpt" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
<TextBox2 className="p-Menu TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
<Image2 className="p-Menu Image175 bpt" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
<Image2 className="p-Menu Image176 bpt" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
<Image2 className="p-Menu Image177 bpt" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
<Image2 className="p-Menu Image178 bpt" {...Image178Props} {...Image178Cb} {...Image178IoProps}/>
<Image2 className="p-Menu Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
<TextBox2 className="p-Menu TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox2 className="p-Menu TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<TextBox2 className="p-Menu TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox2 className="p-Menu TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox2 className="p-Menu TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<TextBox2 className="p-Menu TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox2 className="p-Menu TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox2 className="p-Menu TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox2 className="p-Menu TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox2 className="p-Menu TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox2 className="p-Menu TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox2 className="p-Menu TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox2 className="p-Menu TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<TextBox2 className="p-Menu TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox2 className="p-Menu TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox2 className="p-Menu TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox2 className="p-Menu TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<Image2 className="p-Menu Image174 bpt" {...Image174Props} {...Image174Cb} {...Image174IoProps}/>
<Image2 className="p-Menu Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
<Image2 className="p-Menu Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
<Image2 className="p-Menu Image171 bpt" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
</Flex2>
<TextBox2 className="p-Menu TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
  </>);
}
