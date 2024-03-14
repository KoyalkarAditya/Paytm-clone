import React from "react"
import { RecoilRoot, useRecoilValue } from "recoil"
import { hasAccount } from "../store/atoms/Atom"
import Signin from "./Signin"
import Signup from "./Signup"
export default function LoginToggle() {
  return (
    <div className="flex flex-col h-80">
      <div className="flex justify-center items-center h-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="1200"
          viewBox="-2.5242255 -1.318595 21.876621 7.91157"
        >
          <g fill="none">
            <path
              d="M16.77137 1.55572c-.15275-.43674-.56903-.75036-1.05798-.75036h-.01023c-.31785 0-.6043.13229-.80821.34466-.20426-.21237-.49072-.34466-.80822-.34466h-.01023c-.2794 0-.5348.1023-.73095.27164V.99092c-.0067-.08573-.07726-.1531-.1644-.1531h-.75c-.09172 0-.1658.07408-.1658.16615v4.07282c0 .09207.07408.16616.1658.16616h.75c.08361 0 .1524-.06244.16334-.14323l-.00035-2.92382a.26293.26293 0 01.0014-.02928c.012-.13053.1076-.23777.2586-.25118h.13827c.06315.00564.11642.02787.1584.06138.06526.05186.1016.13159.1016.21908l.00282 2.90936c0 .09207.07443.1665.1658.1665h.75c.08856 0 .16052-.07055.16476-.15839l-.00035-2.92135c-.00036-.09596.0441-.18274.12206-.23425.03845-.0247.08467-.04127.13793-.04621h.13829c.16228.01411.26035.13723.26.28046l.00282 2.90548c0 .09207.07444.16615.1658.16615h.75001c.09137 0 .1658-.07408.1658-.16615V1.95259c0-.21308-.02398-.30374-.05679-.39687M11.69398.84843h-.42897V.15134C11.265.06773 11.19727 0 11.11366 0c-.00988 0-.0194.0014-.02857.00317-.47555.13053-.3803.78917-1.24848.84526h-.08432c-.0127 0-.02469.00176-.03633.00423h-.0007l.0007.00035c-.07409.01659-.12982.0822-.12982.16123v.75c0 .09137.07443.1658.16615.1658h.45262l-.0007 3.1803c0 .09066.07337.16404.16403.16404h.74154c.09031 0 .1637-.07338.1637-.16404l.00034-3.1803h.42016c.09137 0 .1658-.07443.1658-.1658v-.75c0-.09137-.07443-.1658-.1658-.1658"
              fill="#00BAF2"
            />
            <path
              d="M8.99555.84843h-.75c-.09137 0-.16546.07444-.16546.1658v1.55082c-.00176.09595-.07937.17286-.17568.17286h-.31397c-.09737 0-.17604-.07832-.17604-.17569l-.00282-1.54798c0-.09137-.07444-.1658-.1658-.1658h-.75001c-.09172 0-.1658.07443-.1658.1658v1.69968c0 .64558.46037 1.10596 1.1063 1.10596 0 0 .48472 0 .49954.00282.08749.00988.15557.08325.15557.17356 0 .08926-.06667.16228-.1531.17322-.00423.0007-.00811.00176-.0127.00247l-1.09679.00388c-.09172 0-.1658.07443-.1658.1658v.74966c0 .09172.07408.1658.1658.1658h1.22626c.64628 0 1.1063-.46002 1.1063-1.10595v-3.1369c0-.09137-.07408-.1658-.1658-.1658M1.73602 2.22268v.46285c0 .097-.07867.17603-.17568.17603l-.4759.00035v-.92745h.4759c.09701 0 .17568.07831.17568.17568zM1.80199.84825H.16263C.07267.84825 0 .92128 0 1.01088v.73484c0 .00141.00035.00282.00035.00423 0 .00353-.00035.00706-.00035.01023v3.32599c0 .09031.06773.16405.1517.16616h.7641c.09137 0 .1658-.07408.1658-.1658l.00283-1.13983h.71755c.60042 0 1.01882-.41663 1.01882-1.01953V1.8692c0-.6029-.4184-1.02094-1.01882-1.02094zM4.8479 3.98346v.11712c0 .00953-.0014.0187-.00281.02752a.17498.17498 0 01-.00706.02434c-.02329.06562-.0889.11324-.16687.11324h-.3122c-.09737 0-.17674-.07408-.17674-.1651v-.14146c0-.00176-.00036-.00353-.00036-.00529l.00036-.37641v-.11784l.00035-.00105c.00035-.09067.07902-.16404.17639-.16404h.3122c.09772 0 .17675.07373.17675.1651zM4.72868.85256h-1.0407c-.09207 0-.1665.06985-.1665.15557v.29175c0 .00176.00035.00388.00035.00564 0 .00212-.00036.00423-.00036.00635v.3997c0 .09067.07903.16475.1764.16475h.99094c.07832.01235.14041.0695.14923.15875v.09666c-.00882.08502-.0702.1471-.145.15416h-.4907c-.65264 0-1.1176.43357-1.1176 1.04246v.87207c0 .60537.3997 1.0361 1.04774 1.0361h1.35996c.24412 0 .44203-.18485.44203-.41239V1.97827c0-.69003-.3556-1.12571-1.2058-1.12571z"
              fill="#1F336B"
            />
          </g>
        </svg>
      </div>
      <RecoilRoot>
        <div className="flex justify-center">
          <Toggle />
        </div>
      </RecoilRoot>
    </div>
  )

  function Toggle() {
    const hasAccountValue = useRecoilValue(hasAccount)
    return <>{hasAccountValue ? <Signin /> : <Signup />}</>
  }
}
