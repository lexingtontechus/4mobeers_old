import { Table, Row, Col, Text, Card, Grid } from "@nextui-org/react";

export default function Privacy_CCPA() {
  const columns = [
    { name: "Category", uid: "category" },
    //{ name: "role", uid: "role" },
    //{ name: "Collected", uid: "status" },
    //{ name: "ACTIONS", uid: "actions" },
    //{ name: "Example", uid: "example" },
    { name: "Collected", uid: "collected" }
  ];
  const ccpa = [
    {
      id: 1,
      category: "A. Identifiers",
      example:
        "Contact details, such as real name, alias, postal  address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name",
      collected: "NO"
    },
    {
      id: 2,
      category: "B. Personal information",
      example:
        "Categories listed in the California Customer Records statute: Name, contact information, education, employment, employment history and financial information",
      collected: "YES"
    },
    {
      id: 3,
      category: "C. Protected classification",
      example:
        "Characteristics under California or federal law: Gender and date of birth",
      collected: "NO"
    },
    {
      id: 4,
      category: "D. Commercial information",
      example:
        "Transaction information, purchase history, financial details and payment information",
      collected: "NO"
    },
    {
      id: 5,
      category: "E. Biometric information",
      example: "Fingerprints and voiceprints",
      collected: "NO"
    },
    {
      id: 6,
      category: "F. Internet or other similar network activity",
      example:
        "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements",
      collected: "NO"
    },
    {
      id: 7,
      category: "G. Geolocation data",
      example: "Device location",
      collected: "NO"
    },
    {
      id: 8,
      category:
        "H. Audio, electronic, visual, thermal, olfactory, or similar information",
      example:
        "Images and audio, video or call recordings created in connection with our business activities",
      collected: "NO"
    },
    {
      id: 9,
      category: "I. Professional or employment-related information",
      example:
        "Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us",
      collected: "NO"
    },
    {
      id: 10,
      category: "J. Education Information",
      example: "Student records and directory information",
      collected: "NO"
    },
    {
      id: 11,
      category: "K. Inferences drawn from other personal information",
      example:
        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
      collected: "NO"
    }
  ];
  const renderCell = (ccpa, columnKey) => {
    const cellValue = ccpa[columnKey];
    switch (columnKey) {
      case "category":
        return (
          <Col>
            <Row>
              <Text
                category={cellValue}
                css={{ maxWidth: "80%" }}
                wrap="flex-wrap"
              >
                {ccpa.category}
              </Text>
            </Row>
            <Row>
              <Text
                wrap="flex-wrap"
                hideIn="md"
                size="$xs"
                css={{ maxWidth: "20%" }}
              >
                {ccpa.example}
              </Text>
            </Row>
          </Col>
        );

      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Privacy CCPA"
      css={{
        height: "auto",
        width: "auto"
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            //hideHeader={column.uid === "actions"}
            align={column.uid === "category" ? "flex-start" : "start"}
            //align={column.uid === "actions" ? "center" : "start"}
            wrap={column.uid === "category" ? "flex-wrap" : "start"}
            css={{ p: 0, wrap: "Wrap", fluid: "true" }}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={ccpa}>
        {(item) => (
          <Table.Row key={item.index} wrap="flex-wrap">
            {(columnKey) => (
              <Table.Cell wrap="flex-wrap">
                {renderCell(item, columnKey)}
              </Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
