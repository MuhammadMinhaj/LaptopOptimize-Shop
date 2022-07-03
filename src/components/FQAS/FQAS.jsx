// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Container from "../Common/Container";
import Title from "../Common/Title";
const questions = [
  {
    question:
      "Why Is It Important For Business Owners To Create An Ecommerce Site?",
    answer:
      "Today, people have very less time to purchase items, by going to physical stores. They prefer to browse their mobile devices or PC and shop online. Having an ecommerce site for your business will help you to capture this market base and keep your customers informed about all your latest products and services.",
  },
  {
    question:
      "How Can I Choose The Best Platform For My Ecommerce Business Website?",
    answer:
      "Before getting started with your ecommerce web development, consider the few fundamentals that can help to choose the best platform. Always consider the items that you are selling. Some ecommerce platforms can handle inventory tracking and multiple product options while some others will not. Consider the design options, payment gateways, security of the site, integration with other tools, features and pricing before finalizing on the platform.",
  },
  {
    question: "What Are The Main Activities Of Ecommerce Sites?",
    answer:
      "Ecommerce websites help online shoppers make a safe purchase from online stores and they are considered as platforms that help in buying and selling. It also helps in gathering and using demographics data from various channels and improves the customer service.",
  },
  {
    question: "Why Is Ecommerce Needed For Any Business?",
    answer:
      "Ecommerce has gained much popularity nowadays because it offers business a whole range of opportunities ranging from marketing opportunities to increasing the range of products that helps to generate sales. It is with an optimized and well created e-store that you can easily create and achieve the goals and also offer the customers round the clock support services.",
  },
  {
    question: "What Are The Different Types Of Ecommerce?",
    answer:
      "Ecommerce or internet commerce is basically related with different types of business transactions. The main four ways of ecommerce business is Business to business or B2B, Business to Customer B2C, Customer to Business (C2B and Customer to Customer C2C.",
  },
  {
    question: "How Should I Promote My Ecommerce Site?",
    answer:
      "There are various ways to do this and the first thing to do is to promote the site to all the customers. This will help to increase your customer base. Your website address should be present on every advertisement that your company invests in. Register with the search engines and optimize your website as this will affect the traffic of your site.",
  },
  {
    question: "How To Create An Impressive Website?",
    answer:
      "The beauty of a site lies in the way it operates and how user friendly it is. Ensure that your site is fast, easy to use, professional and attractive. Also make sure that you are able to fulfill the orders very promptly without any delay. In case you are unable to offer the service, make sure that your customer is informed about it via email.",
  },
];
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box py="3rem">
      <Container>
        <Title
          fTitle="Frequently Asked"
          lTitle="Questions"
          subTitle="Know more about our services system"
        />
        <Box py="1rem">
          {questions.map(({ question, answer }, ind) => (
            <Accordion
              expanded={expanded === `panel1-${ind}`}
              onChange={handleChange(`panel1-${ind}`)}
              key={question}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel${ind}bh-content`}
                id={`panel${ind}bh-header`}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ width: "100%", flexShrink: 0 }}
                  color="var(--primary-deep)"
                >
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
