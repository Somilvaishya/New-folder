import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex34Cb, useFlex35Cb, useDiv61Cb, useFlex38Cb, useFlex41Cb, useTextBox113Cb, useTextBox114Cb, useImage105Cb, useImage106Cb, useTextBox126Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useTextBox132Cb, useImage107Cb, useImage108Cb, useImage112Cb, useTextBox133Cb, useTextBox135Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useTextBox141Cb, useTextBox142Cb, useTextBox143Cb, useImage122Cb, useImage123Cb, useImage124Cb, useTextBox144Cb, useTextBox145Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useTextBox153Cb, useTextBox156Cb, useImage125Cb, useImage126Cb, useImage127Cb, useTextBox157Cb, useTextBox158Cb, useTextBox160Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useImage139Cb, useTextBox166Cb, useTextBox167Cb, useImage140Cb, useImage143Cb, useImage144Cb, useImage145Cb, useTextBox168Cb, useTextBox169Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useTextBox174Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useTextBox182Cb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useTextBox187Cb, useTextBox188Cb, useTextBox189Cb, useImage146Cb, useImage147Cb, useImage148Cb, useImage149Cb, useImage150Cb, useImage92Cb, useLink24Cb, useLink25Cb, useLink27Cb, useLink28Cb, useLink29Cb, useButton22Cb, useButton23Cb, useImage95Cb, useImage102Cb, useImage96Cb, useImage98Cb, useImage99Cb, useImage101Cb, useTextBox115Cb, useImage103Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useButton24Cb, useImage104Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useButton25Cb, useFlex40Cb, useTextBox131Cb, useImage128Cb, useImage129Cb, useImage130Cb, useImage131Cb, useImage132Cb, useImage133Cb, useImage136Cb, useTextBox164Cb, useImage137Cb, useImage138Cb, useButton27Cb, useImage141Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
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

  const Flex34Props = useStore((state)=>state["About"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["About"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["About"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["About"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Div61Props = useStore((state)=>state["About"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["About"]["Div61"]);
const Div61Cb = useDiv61Cb()
const Flex38Props = useStore((state)=>state["About"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["About"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex41Props = useStore((state)=>state["About"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["About"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const TextBox113Props = useStore((state)=>state["About"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["About"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["About"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["About"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const Image105Props = useStore((state)=>state["About"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["About"]["Image105"]);
const Image105Cb = useImage105Cb()
const Image106Props = useStore((state)=>state["About"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["About"]["Image106"]);
const Image106Cb = useImage106Cb()
const TextBox126Props = useStore((state)=>state["About"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["About"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox128Props = useStore((state)=>state["About"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["About"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["About"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["About"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["About"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["About"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox132Props = useStore((state)=>state["About"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["About"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image107Props = useStore((state)=>state["About"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["About"]["Image107"]);
const Image107Cb = useImage107Cb()
const Image108Props = useStore((state)=>state["About"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["About"]["Image108"]);
const Image108Cb = useImage108Cb()
const Image112Props = useStore((state)=>state["About"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["About"]["Image112"]);
const Image112Cb = useImage112Cb()
const TextBox133Props = useStore((state)=>state["About"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["About"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox135Props = useStore((state)=>state["About"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["About"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["About"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["About"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["About"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["About"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["About"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["About"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["About"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["About"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["About"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["About"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["About"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["About"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["About"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["About"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["About"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["About"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const Image122Props = useStore((state)=>state["About"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["About"]["Image122"]);
const Image122Cb = useImage122Cb()
const Image123Props = useStore((state)=>state["About"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["About"]["Image123"]);
const Image123Cb = useImage123Cb()
const Image124Props = useStore((state)=>state["About"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["About"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox144Props = useStore((state)=>state["About"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["About"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["About"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["About"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox149Props = useStore((state)=>state["About"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["About"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["About"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["About"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["About"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["About"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox153Props = useStore((state)=>state["About"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["About"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox156Props = useStore((state)=>state["About"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["About"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const Image125Props = useStore((state)=>state["About"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["About"]["Image125"]);
const Image125Cb = useImage125Cb()
const Image126Props = useStore((state)=>state["About"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["About"]["Image126"]);
const Image126Cb = useImage126Cb()
const Image127Props = useStore((state)=>state["About"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["About"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox157Props = useStore((state)=>state["About"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["About"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["About"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["About"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox160Props = useStore((state)=>state["About"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["About"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["About"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["About"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["About"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["About"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["About"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["About"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image139Props = useStore((state)=>state["About"]["Image139"]);
const Image139IoProps = useIoStore((state)=>state["About"]["Image139"]);
const Image139Cb = useImage139Cb()
const TextBox166Props = useStore((state)=>state["About"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["About"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["About"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["About"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image140Props = useStore((state)=>state["About"]["Image140"]);
const Image140IoProps = useIoStore((state)=>state["About"]["Image140"]);
const Image140Cb = useImage140Cb()
const Image143Props = useStore((state)=>state["About"]["Image143"]);
const Image143IoProps = useIoStore((state)=>state["About"]["Image143"]);
const Image143Cb = useImage143Cb()
const Image144Props = useStore((state)=>state["About"]["Image144"]);
const Image144IoProps = useIoStore((state)=>state["About"]["Image144"]);
const Image144Cb = useImage144Cb()
const Image145Props = useStore((state)=>state["About"]["Image145"]);
const Image145IoProps = useIoStore((state)=>state["About"]["Image145"]);
const Image145Cb = useImage145Cb()
const TextBox168Props = useStore((state)=>state["About"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["About"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["About"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["About"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox171Props = useStore((state)=>state["About"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["About"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["About"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["About"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["About"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["About"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["About"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["About"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["About"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["About"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["About"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["About"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["About"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["About"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["About"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["About"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["About"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["About"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["About"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["About"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["About"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["About"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["About"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["About"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["About"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["About"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["About"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["About"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["About"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["About"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["About"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["About"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["About"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["About"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["About"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["About"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["About"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["About"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const Image146Props = useStore((state)=>state["About"]["Image146"]);
const Image146IoProps = useIoStore((state)=>state["About"]["Image146"]);
const Image146Cb = useImage146Cb()
const Image147Props = useStore((state)=>state["About"]["Image147"]);
const Image147IoProps = useIoStore((state)=>state["About"]["Image147"]);
const Image147Cb = useImage147Cb()
const Image148Props = useStore((state)=>state["About"]["Image148"]);
const Image148IoProps = useIoStore((state)=>state["About"]["Image148"]);
const Image148Cb = useImage148Cb()
const Image149Props = useStore((state)=>state["About"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["About"]["Image149"]);
const Image149Cb = useImage149Cb()
const Image150Props = useStore((state)=>state["About"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["About"]["Image150"]);
const Image150Cb = useImage150Cb()
const Image92Props = useStore((state)=>state["About"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["About"]["Image92"]);
const Image92Cb = useImage92Cb()
const Link24Props = useStore((state)=>state["About"]["Link24"]);
const Link24IoProps = useIoStore((state)=>state["About"]["Link24"]);
const Link24Cb = useLink24Cb()
const Link25Props = useStore((state)=>state["About"]["Link25"]);
const Link25IoProps = useIoStore((state)=>state["About"]["Link25"]);
const Link25Cb = useLink25Cb()
const Link27Props = useStore((state)=>state["About"]["Link27"]);
const Link27IoProps = useIoStore((state)=>state["About"]["Link27"]);
const Link27Cb = useLink27Cb()
const Link28Props = useStore((state)=>state["About"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["About"]["Link28"]);
const Link28Cb = useLink28Cb()
const Link29Props = useStore((state)=>state["About"]["Link29"]);
const Link29IoProps = useIoStore((state)=>state["About"]["Link29"]);
const Link29Cb = useLink29Cb()
const Button22Props = useStore((state)=>state["About"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["About"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button23Props = useStore((state)=>state["About"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["About"]["Button23"]);
const Button23Cb = useButton23Cb()
const Image95Props = useStore((state)=>state["About"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["About"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image102Props = useStore((state)=>state["About"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["About"]["Image102"]);
const Image102Cb = useImage102Cb()
const Image96Props = useStore((state)=>state["About"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["About"]["Image96"]);
const Image96Cb = useImage96Cb()
const Image98Props = useStore((state)=>state["About"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["About"]["Image98"]);
const Image98Cb = useImage98Cb()
const Image99Props = useStore((state)=>state["About"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["About"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image101Props = useStore((state)=>state["About"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["About"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox115Props = useStore((state)=>state["About"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["About"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Image103Props = useStore((state)=>state["About"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["About"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox116Props = useStore((state)=>state["About"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["About"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["About"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["About"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["About"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["About"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Button24Props = useStore((state)=>state["About"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["About"]["Button24"]);
const Button24Cb = useButton24Cb()
const Image104Props = useStore((state)=>state["About"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["About"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox119Props = useStore((state)=>state["About"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["About"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["About"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["About"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["About"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["About"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Button25Props = useStore((state)=>state["About"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["About"]["Button25"]);
const Button25Cb = useButton25Cb()
const Flex40Props = useStore((state)=>state["About"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["About"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const TextBox131Props = useStore((state)=>state["About"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["About"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Image128Props = useStore((state)=>state["About"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["About"]["Image128"]);
const Image128Cb = useImage128Cb()
const Image129Props = useStore((state)=>state["About"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["About"]["Image129"]);
const Image129Cb = useImage129Cb()
const Image130Props = useStore((state)=>state["About"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["About"]["Image130"]);
const Image130Cb = useImage130Cb()
const Image131Props = useStore((state)=>state["About"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["About"]["Image131"]);
const Image131Cb = useImage131Cb()
const Image132Props = useStore((state)=>state["About"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["About"]["Image132"]);
const Image132Cb = useImage132Cb()
const Image133Props = useStore((state)=>state["About"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["About"]["Image133"]);
const Image133Cb = useImage133Cb()
const Image136Props = useStore((state)=>state["About"]["Image136"]);
const Image136IoProps = useIoStore((state)=>state["About"]["Image136"]);
const Image136Cb = useImage136Cb()
const TextBox164Props = useStore((state)=>state["About"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["About"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Image137Props = useStore((state)=>state["About"]["Image137"]);
const Image137IoProps = useIoStore((state)=>state["About"]["Image137"]);
const Image137Cb = useImage137Cb()
const Image138Props = useStore((state)=>state["About"]["Image138"]);
const Image138IoProps = useIoStore((state)=>state["About"]["Image138"]);
const Image138Cb = useImage138Cb()
const Button27Props = useStore((state)=>state["About"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["About"]["Button27"]);
const Button27Cb = useButton27Cb()
const Image141Props = useStore((state)=>state["About"]["Image141"]);
const Image141IoProps = useIoStore((state)=>state["About"]["Image141"]);
const Image141Cb = useImage141Cb()

  return (<>
  <Flex1 className="p-About Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image1 className="p-About Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<Link1 className="p-About Link24 bpt" {...Link24Props} {...Link24Cb} {...Link24IoProps}/>
<Link1 className="p-About Link27 bpt" {...Link27Props} {...Link27Cb} {...Link27IoProps}/>
<Link1 className="p-About Link29 bpt" {...Link29Props} {...Link29Cb} {...Link29IoProps}/>
<Link1 className="p-About Link25 bpt" {...Link25Props} {...Link25Cb} {...Link25IoProps}/>
<Link1 className="p-About Link28 bpt" {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
<Button1 className="p-About Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
<Button1 className="p-About Button23 bpt" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox1 className="p-About TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Flex1 className="p-About Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Div1 className="p-About Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<Image1 className="p-About Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<Image1 className="p-About Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
<Image1 className="p-About Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
<Image1 className="p-About Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
<TextBox1 className="p-About TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
</Div1>
<Image1 className="p-About Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<Image1 className="p-About Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
</Flex1>
<Flex1 className="p-About Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image1 className="p-About Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<TextBox1 className="p-About TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox1 className="p-About TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox1 className="p-About TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<Button1 className="p-About Button25 bpt" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
<TextBox1 className="p-About TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<Image1 className="p-About Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<TextBox1 className="p-About TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox1 className="p-About TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<TextBox1 className="p-About TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Button1 className="p-About Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
<Flex1 className="p-About Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}/>
</Flex1>
<Image1 className="p-About Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<Image1 className="p-About Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<TextBox1 className="p-About TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox1 className="p-About TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox1 className="p-About TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox1 className="p-About TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox1 className="p-About TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<Image1 className="p-About Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
<Image1 className="p-About Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<Image1 className="p-About Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox1 className="p-About TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox1 className="p-About TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox1 className="p-About TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox1 className="p-About TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox1 className="p-About TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox1 className="p-About TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox1 className="p-About TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox1 className="p-About TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<TextBox1 className="p-About TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox1 className="p-About TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox1 className="p-About TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<Image1 className="p-About Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
<Image1 className="p-About Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<Image1 className="p-About Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<TextBox1 className="p-About TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox1 className="p-About TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<TextBox1 className="p-About TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox1 className="p-About TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox1 className="p-About TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox1 className="p-About TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox1 className="p-About TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<Image1 className="p-About Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
<Image1 className="p-About Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
<TextBox1 className="p-About TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<TextBox1 className="p-About TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox1 className="p-About TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<Image1 className="p-About Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<TextBox1 className="p-About TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox1 className="p-About TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<Flex1 className="p-About Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Image1 className="p-About Image136 bpt" {...Image136Props} {...Image136Cb} {...Image136IoProps}/>
<TextBox1 className="p-About TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<Image1 className="p-About Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
<Image1 className="p-About Image137 bpt" {...Image137Props} {...Image137Cb} {...Image137IoProps}/>
<Image1 className="p-About Image141 bpt" {...Image141Props} {...Image141Cb} {...Image141IoProps}/>
<Button1 className="p-About Button27 bpt" {...Button27Props} {...Button27Cb} {...Button27IoProps}/>
<Image1 className="p-About Image138 bpt" {...Image138Props} {...Image138Cb} {...Image138IoProps}/>
<Image1 className="p-About Image130 bpt" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
<Image1 className="p-About Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
<Image1 className="p-About Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
<Image1 className="p-About Image128 bpt" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
<Image1 className="p-About Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<Image1 className="p-About Image139 bpt" {...Image139Props} {...Image139Cb} {...Image139IoProps}/>
<TextBox1 className="p-About TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Image1 className="p-About Image145 bpt" {...Image145Props} {...Image145Cb} {...Image145IoProps}/>
<TextBox1 className="p-About TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox1 className="p-About TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox1 className="p-About TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox1 className="p-About TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox1 className="p-About TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox1 className="p-About TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox1 className="p-About TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox1 className="p-About TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<Image1 className="p-About Image143 bpt" {...Image143Props} {...Image143Cb} {...Image143IoProps}/>
<TextBox1 className="p-About TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox1 className="p-About TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox1 className="p-About TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<Image1 className="p-About Image144 bpt" {...Image144Props} {...Image144Cb} {...Image144IoProps}/>
<TextBox1 className="p-About TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox1 className="p-About TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<Image1 className="p-About Image140 bpt" {...Image140Props} {...Image140Cb} {...Image140IoProps}/>
<TextBox1 className="p-About TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox1 className="p-About TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox1 className="p-About TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<Image1 className="p-About Image150 bpt" {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
<Image1 className="p-About Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
<TextBox1 className="p-About TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox1 className="p-About TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox1 className="p-About TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<TextBox1 className="p-About TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox1 className="p-About TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<Image1 className="p-About Image148 bpt" {...Image148Props} {...Image148Cb} {...Image148IoProps}/>
<Image1 className="p-About Image146 bpt" {...Image146Props} {...Image146Cb} {...Image146IoProps}/>
<Image1 className="p-About Image147 bpt" {...Image147Props} {...Image147Cb} {...Image147IoProps}/>
  </>);
}
