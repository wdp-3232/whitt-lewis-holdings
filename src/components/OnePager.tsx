import React from 'react';
import svgPaths from '../imports/svg-xpmtdgpk1h';
import imgImageWillPearce from "figma:asset/d7fca004035a2cdf8b071be44329ed541467dbb1.png";

// --- Imported Helper Components ---

function Icon() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g clipPath="url(#clip0_46_335)" id="Icon">
          <path d={svgPaths.p1b4efa00} fill="var(--fill-0, white)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p95aeb00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2.75" />
          <path d="M35.2 14.3V29.7H40.7" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2.75" />
        </g>
        <defs>
          <clipPath id="clip0_46_335">
            <rect fill="white" height="44" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22px] relative shrink-0 w-[130.247px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-serif font-bold leading-[20px] left-0 not-italic text-[20px] text-white top-[-0.1px] tracking-[-0.5px]">Whitt Lewis</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[17.6px] relative shrink-0 w-[130.247px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-sans font-bold leading-[16px] min-h-px min-w-px relative text-[#99a1af] text-[12px] tracking-[2.4px] uppercase whitespace-pre-wrap">Holdings</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[130.247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.4px] items-start justify-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[17.6px] h-[44px] items-center left-[32px] top-[18px] w-[520.902px]" data-name="Container">
      <Icon />
      <Container4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[35.75px] left-[32px] top-[72px] w-[473.547px]" data-name="Paragraph">
      <p className="absolute font-sans font-normal leading-[17.875px] left-0 text-[11px] text-[rgba(219,234,254,0.9)] top-[-2px] w-[472px] whitespace-pre-wrap">Whitt Lewis Holdings is a North Carolina-based firm founded by Will Pearce for the purpose of purchasing one exceptional service business in the Southeast to own and operate long-term.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#1e3a8a] h-[131.75px] relative shrink-0 w-[537.547px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d6d3d1] border-b-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-serif font-bold leading-[28px] not-italic relative shrink-0 text-[#1c398e] text-[18px] tracking-[0.45px] uppercase">About Will Pearce</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[98.984px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-sans font-normal leading-[19.8px] left-0 text-[#292524] text-[11px] text-justify top-[-2px] w-[474px] whitespace-pre-wrap">I grew up in Statesville, NC, and was in part raised by my grandfather who owned a local geothermal heating and air business. I spent much of my childhood going on service calls with him, so I have a great deal of respect for what it takes to build a reputation based service company. These experiences during the formative years of my life taught me the value of hard work, integrity, and reliability, and serve as the basis for who I hope to be as a business owner.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[178.172px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-sans font-normal leading-[19.8px] left-0 text-[#292524] text-[11px] text-justify top-[-2px] w-[474px] whitespace-pre-wrap">{`After stints working the drive thru line at McDonald’s, scrubbing toilets at a pizza parlor, and repeatedly testing the structural integrity of corrugated board at a cardboard manufacturing plant, I graduated from UNC Chapel Hill with a BA in Mathematics and Economics. From there, I spent several years working in investment banking and private equity, where I had the opportunity to assist clients and portfolio companies with topics ranging from M&A and capital raising to commercial strategy and operational improvement. Across these experiences, I’ve performed a wide variety of tasks alongside colleagues who come from a multitude of different backgrounds, but the constant theme has been that high effort, attention to detail, and humility tends to lead to good outcomes.`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[118.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-sans font-normal leading-[19.8px] left-0 text-[#292524] text-[11px] text-justify top-[-2px] w-[474px] whitespace-pre-wrap">What I’m looking for now is the chance to take that work ethic and apply it to something I can own and be accountable for. I’m building Whitt Lewis Holdings to buy one great business and operate it full-time, and to earn trust the same way the best small business owners do, by showing up, doing quality work, and treating people right. If I have the opportunity to carry forward what an owner has built, I’ll focus on protecting the company’s reputation, taking care of employees, and continuing to serve customers well.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[419.938px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[459.938px] relative shrink-0 w-[473.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading />
        <Container7 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[45px] relative shrink-0 w-[473.547px]" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[17px] relative size-full">
        <p className="font-serif font-bold leading-[28px] not-italic relative shrink-0 text-[#1c398e] text-[18px] tracking-[0.45px] uppercase">What I Offer as a Buyer</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M16 11L18 13L22 9" id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d820380} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[154.75px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-bold leading-[18px] left-0 text-[#1c1917] text-[12px] top-[-1px]">Long-term Owner Operator</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[224.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon1 />
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[224.766px]" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-normal leading-[14.438px] left-[10px] text-[#44403b] text-[10.5px] text-justify top-[-1px] w-[215px] whitespace-pre-wrap">I plan to operate the business on-site, day-to-day. I care about protecting the reputation you built and taking care of the people who make it run.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[87.75px] items-start left-0 top-0 w-[224.766px]" data-name="Container">
      <Container12 />
      <Paragraph4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[140.656px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-bold leading-[18px] left-0 text-[#1c1917] text-[12px] top-[-1px]">Integrity First Ownership</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[224.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon2 />
        <Heading3 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[224.781px]" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-normal leading-[14.438px] left-[10px] text-[#44403b] text-[10.5px] text-justify top-[-1px] w-[215px] whitespace-pre-wrap">I try to do what I say I’m going to do and handle things the right way. My goal is to earn trust over time and be known as a good person to do business with.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[87.75px] items-start left-[248.77px] top-0 w-[224.781px]" data-name="Container">
      <Container14 />
      <Paragraph5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-[473.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p7e95b80} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[171.641px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-bold leading-[18px] left-0 text-[#1c1917] text-[12px] top-[-1px]">{`Respect for Customers & Craft`}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[224.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon3 />
        <Heading4 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[57.75px] relative shrink-0 w-[224.766px]" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-normal leading-[14.438px] left-[10px] text-[#44403b] text-[10.5px] text-justify top-[-1px] w-[215px] whitespace-pre-wrap">I understand the value of deep customer relationships and the skill required in your trade. I promise to uphold the standards that made you successful.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[102.188px] items-start left-0 top-0 w-[224.766px]" data-name="Container">
      <Container17 />
      <Paragraph6 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p123c17c0} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p160f0100} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ab515c0} id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1edb4e00} id="Vector_4" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[142.734px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-bold leading-[18px] left-0 text-[#1c1917] text-[12px] top-[-1px]">Continuity for Employees</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[224.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon4 />
        <Heading5 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[224.781px]" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-sans font-normal leading-[14.438px] left-[10px] text-[#44403b] text-[10.5px] text-justify top-[-1px] w-[215px] whitespace-pre-wrap">I’m not buying a business to reinvent it. If I have the opportunity to step in, it’s because I believe in your team and the way you’ve built the operation, and I plan to keep the people who make it run in place.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[102.188px] items-start left-[248.77px] top-0 w-[224.781px]" data-name="Container">
      <Container19 />
      <Paragraph7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[102.188px] relative shrink-0 w-[473.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[473.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[37.297px] items-start pt-[37.281px] relative size-full">
        <Container10 />
        <Container15 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[473.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading1 />
        <Container9 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[473.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[8px] relative size-full">
        <p className="flex-[1_0_0] font-sans font-bold leading-[13.5px] min-h-px min-w-px relative text-[#a6a09b] text-[9px] tracking-[0.9px] uppercase whitespace-pre-wrap">Confidential • Trusted • Professional</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[537.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] pl-[32px] pt-[24px] relative size-full">
        <Container6 />
        <Container8 />
        <Container20 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1056px] relative shrink-0 w-[538.547px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function ImageWillPearce() {
  return (
    <div className="h-[298.406px] pointer-events-none relative rounded-[6px] shrink-0 w-full" data-name="Image (Will Pearce)">
      <div aria-hidden="true" className="absolute inset-0 rounded-[6px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgImageWillPearce} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e5e4] border-solid inset-0 rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-sans font-bold leading-[28px] left-0 text-[#1c1917] text-[18px] top-[-1px]">Will Pearce</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-sans font-bold leading-[16.5px] min-h-px min-w-px relative text-[#79716b] text-[11px] tracking-[0.55px] uppercase whitespace-pre-wrap">{`Founder & Principal`}</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa3ff970} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p5c184f0} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[146.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-sans font-normal leading-[15.75px] relative shrink-0 text-[#44403b] text-[10.5px]">Will@WhittLewisHoldings.com</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_46_318)" id="Icon">
          <path d={svgPaths.p3a6edb80} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_46_318">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[72.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-normal leading-[15.75px] relative shrink-0 text-[#44403b] text-[10.5px]">(704) 685-5733</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[55.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-normal leading-[15.75px] relative shrink-0 text-[#44403b] text-[10.5px]">Raleigh, NC</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Text4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_46_306)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p21d23a70} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.16667 7H12.8333" id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_46_306">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[112.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-normal leading-[15.75px] relative shrink-0 text-[#44403b] text-[10.5px]">whittlewisholdings.com</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Text5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[87px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[143.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph8 />
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[486.906px] relative shrink-0 w-[276.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-px pt-[20px] px-[20px] relative size-full">
        <ImageWillPearce />
        <Container23 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[188.5px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-serif font-bold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] top-0 tracking-[0.35px] uppercase">Investment Criteria</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[244.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.969px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-bold leading-[16.5px] relative shrink-0 text-[#1c1917] text-[11px]">Geography</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[222.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-px relative size-full">
        <Icon9 />
        <Heading8 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[63.766px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">North Carolina</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[63.406px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">South Carolina</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[43.797px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Tennessee</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[33.203px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Virginia</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[161.344px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Open to other states in the Southeast</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <Text15 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[78px] relative shrink-0 w-[222.438px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white shrink-0 relative rounded-[6px] w-[244.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e7e5e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center pl-[11px] pr-px py-2 relative w-full">
        <Container33 />
        <List />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3471a100} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1977ee80} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[82.641px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-bold leading-[16.5px] relative shrink-0 text-[#1c1917] text-[11px]">Financial Profile</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[222.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-px relative size-full">
        <Icon10 />
        <Heading9 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[153.969px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">{`$400K - $1.25M of owners' earnings`}</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[95.609px]" data-name="Text">
      <p className="flex-[1_0_0] font-sans font-normal leading-[13.063px] min-h-px min-w-px relative text-[#57534d] text-[9.5px] whitespace-pre-wrap">History of profitability</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[162.875px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Low capital expenditure requirements</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[162.469px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">{`No single customer > 20% of revenue`}</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text22 />
      <Text23 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[62px] relative shrink-0 w-[222.438px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <ListItem5 />
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white shrink-0 relative rounded-[6px] w-[244.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e7e5e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center pl-[11px] pr-px py-2 relative w-full">
        <Container35 />
        <List1 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p317fdd80} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4b27f00} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pe97dd00} id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p31c78b80} id="Vector_4" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[111.578px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-bold leading-[16.5px] relative shrink-0 text-[#1c1917] text-[11px]">{`Management & Team`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[222.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-px relative size-full">
        <Icon11 />
        <Heading10 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[107.781px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Owner seeking transition</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[141.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Strong leaders staying post close</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[110.781px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Dedicated employee base</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[81.828px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Culture of integrity</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text30 />
      <Text31 />
    </div>
  );
}

function List2() {
  return (
    <div className="h-[62px] relative shrink-0 w-[222.438px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
        <ListItem12 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white shrink-0 relative rounded-[6px] w-[244.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e7e5e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center pl-[11px] pr-px py-2 relative w-full">
        <Container37 />
        <List2 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa5c9980} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[75.719px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-sans font-bold leading-[16.5px] relative shrink-0 text-[#1c1917] text-[11px]">Industry Focus</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[222.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-px relative size-full">
        <Icon12 />
        <Heading11 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[103.016px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Industrial / B2B services</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[83.531px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Residential services</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-0 top-[3px] w-[4.844px]" data-name="Text">
      <p className="font-sans font-normal leading-[11px] relative shrink-0 text-[#2b7fff] text-[8px]">●</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex h-[13.063px] items-start left-[10.84px] top-0 w-[82.906px]" data-name="Text">
      <p className="font-sans font-normal leading-[13.063px] relative shrink-0 text-[#57534d] text-[9.5px]">Healthcare services</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="List Item">
      <Text36 />
      <Text37 />
    </div>
  );
}

function List3() {
  return (
    <div className="h-[46px] relative shrink-0 w-[222.438px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <ListItem13 />
        <ListItem14 />
        <ListItem15 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white shrink-0 relative rounded-[6px] w-[244.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e7e5e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start justify-center pl-[11px] pr-px py-2 relative w-full">
        <Container39 />
        <List3 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[478.594px] relative shrink-0 w-[244.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pb-[8px] relative size-full">
        <Container32 />
        <Container34 />
        <Container36 />
        <Container38 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[276.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pl-[16px] pt-[8px] relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#e7e5e4] h-[38.5px] relative shrink-0 w-[276.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d6d3d1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-sans font-normal leading-[13.5px] left-[138.69px] text-[#79716b] text-[9px] text-center top-[11px] w-[117px] whitespace-pre-wrap">© 2026 Whitt Lewis Holdings</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f5f5f4] h-[1056px] relative shrink-0 w-[277.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px relative size-full">
        <Container22 />
        <Container29 />
        <Container40 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[1056px] items-start left-[360px] overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[32px] w-[816px]" data-name="Container">
      <Container1 />
      <Container21 />
    </div>
  );
}

function PY() {
  return (
    <div className="absolute bg-[#f5f5f4] h-[1120px] left-0 top-0 w-[1536px]" data-name="pY">
      <Container />
    </div>
  );
}

function Icon13() {
  return (
    <div className="size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #44403B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #44403B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-[8px] border border-[#e7e5e4] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 px-4 py-2 w-full hover:bg-gray-50 transition-colors"
    >
      <Icon13 />
      <span className="font-sans font-normal text-[#44403b] text-[14px]">Back to Website</span>
    </button>
  );
}

function Icon14() {
  return (
    <div className="size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_46_279)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_46_279">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#193cb8] rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 px-4 py-2 w-full hover:bg-blue-800 transition-colors"
    >
      <Icon14 />
      <span className="font-sans font-normal text-white text-[14px]">Save as PDF / Print</span>
    </button>
  );
}

function Container41({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[88px] items-start left-[24px] top-[128px] w-[175.406px] z-10 print:hidden" data-name="Container">
      <Button onClick={onClose} />
      <Button1 onClick={() => window.print()} />
    </div>
  );
}

// --- Main Export ---

interface BrochurePageProps {
  onBack: () => void;
}

export const BrochurePage: React.FC<BrochurePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#f5f5f4] w-full overflow-y-auto">
        <div className="relative w-full min-w-[1024px] flex justify-center pb-12 pt-8" data-name="One-Pager & Letter Head">
            <Container41 onClose={onBack} />
            <Container />
        </div>
    </div>
  );
};
