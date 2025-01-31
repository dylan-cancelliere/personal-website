import { Text } from "@mantine/core";

export const BryxBodyText = (
  <>
    <Text>
      So far at Bryx I've built an events system, an accompanying calendar
      module, and a translation system utilizing AWS Polly to convert
      abbreviations and common mispronounciations into speech.
    </Text>
    <Text pt="xs">
      Currently, I'm working as the only front-end engineer on a small team
      creating an unreleased product in the public safety space. As of the time
      of writing I've shipped a group hierarchy management tool and a role
      builder for this project.
    </Text>
  </>
);

export const MfjBodyText = (
  <>
    <Text>
      I interned at Measures for Justice (MFJ) during the summer and then stayed
      on part-time for another eight months while I finished school.
    </Text>
    <Text pt="xs">
      At MFJ, I optimized the data filtering flow on the commons site for both
      performance and accessibility in accordance with WCAG 2.2 guidelines. In
      addition to some dev-ops work I undertook in creating automated smoke
      tests for our build pipeline, I contributed to the team beyond code by
      establishing standard patterns the team relied on while migrating from an
      in-house UI library to Material UI.
    </Text>
  </>
);

export const AwsBodyText = (
  <>
    <Text>
      At AWS I worked on the data recovery team for Aurora DB. I learned a ton
      about operating relational databases at a truly massive scale.
    </Text>
    <Text pt="xs">
      My project was a fullstack app that provides diagnostics and recovery
      information in the event of a large-scale event, such as a natural
      disaster, that disurpts service from a data center.
    </Text>
  </>
);

export const HubSpot2BodyText = (
  <>
    <Text>
      During my second internship at HubSpot I worked on the ads platform. One
      of my projects was an integration between my team and the campaigns team,
      which allowed users to convert their successful campaigns into assets they
      could reuse on other platforms.
    </Text>
    <Text pt="xs">
      Additionally, I implemented a lead tracking system that identifies which
      paywalled features users are running into and as a result upgrading their
      plan in order to use gain access.
    </Text>
  </>
);

export const BryxInternshipBodyText = (
  <>
    <Text>
      While at Bryx I started development on a Records Management System (RMS)
      to help alleviate the manual paperwork many fire stations engage in on a
      regular basis. In particular, I spent a lot of time working on a form
      validator for the{" "}
      <a href="https://www.usfa.fema.gov/nfirs/documentation/" target="_blank">
        NFIRS spec
      </a>
      .
    </Text>
    <Text pt="xs">
      The RMS product was the first experience I had with the design stage of a
      mass market product, as well as the first time I was directly responsible
      for implementing accessibility features as they did not ship with the UI
      framework we were using.
    </Text>
  </>
);

export const HubSpot1BodyText = (
  <>
    <Text>
      My first internship at HubSpot was on the Cookie Banner team, which at the
      time was surprisingly interesting due to the somewhat recent passing of
      Europe's GDPR law. While there, my team worked on a tool in which
      customers could submit their website to be scraped and we would determine
      which cookies the site was using and try to categorize them. Then, they
      would be able to inject a script for users to disable or enable cookies by
      category.
    </Text>
    <Text pt="xs">
      My first role in this project was to create a data pipeline using an
      internal tool modeled after Kafka that automatically scheduled cookie
      scans and delayed results to be processed during off hours as to reduce
      cost. Then, I built out a UI for users to see reports of their cookies,
      how we categorized them, and any changes that occurred since the last
      scan.
    </Text>
    <Text pt="xs">
      HubSpot was a very formative moment in my career and I attribute many of
      my strengths as a Software Engineer, particularly regarding code review,
      to my coworkers Mo and Dylan.
    </Text>
  </>
);

export const ConstantContactBodyText = (
  <>
    <Text>
      Constant Contact was my first internship the summer after my freshman year
      of college. It was a little unorthodox in many ways, but especially since
      the world was still figuring out how to work remotely due to the pandemic.
    </Text>
    <Text pt="xs">
      I worked on the cross platform email editor, Constant Contact's flagship
      product, and was a part of the redesign effort into making a simple but
      powerful drag and drop interface for customers to use.
    </Text>
  </>
);
