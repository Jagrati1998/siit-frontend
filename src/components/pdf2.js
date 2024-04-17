import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    margin: 20,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  body: {
    fontSize: 11,
  },
  institute: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{"भारत सरकार द्वारा पंजीकृत (Government Recognised)"}</Text>
      <Image style={styles.image} src="path/to/your/institute_logo.jpg" />
      <Text style={styles.title}>{"SIIT COMPUTER COLLEGE"}</Text>
      <Text style={styles.body}>
        {"Registered Under Punjab Shops & Commercial Establishment Act, 1958 Under Labour Department, Haryana"}
      </Text>
      <Text style={styles.body}>
        {"& Certified Institute by Ministry of MSME Govt. of India"}
      </Text>
      <Text style={styles.body}>
        {"Regd. by Ministry of Commerce & Industry TM. 4947921"}
      </Text>
      <Text style={styles.body}>
        {"International Organization for Standardization 9001:2015"}
      </Text>
      <Text style={styles.header}>{"Certificate / Diploma"}</Text>
      <Text style={styles.body}>
        <Text style={styles.flexRow}>
          <Text>Reg No.</Text>
          <Text>SIIT/22/1209</Text>
        </Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.title}>{"This Certificate / Diploma is awarded to"}</Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.flexRow}>
          <Text>Student's Name</Text>
          <Text>NEETA RANI</Text>
        </Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.flexRow}>
          <Text>Father's Name</Text>
          <Text>SH.MURARI LAL</Text>
        </Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.institute}>{"Institute"}</Text>
        <Text>SIIT COMPUTER COLLEGE, FATEHABAD (HRY.)</Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.flexRow}>
          <Text>Course</Text>
          <Text>DIPLOMA IN NURSERY TEACHER TRAINING</Text>
        </Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.flexRow}>
          <Text>Duration</Text>
          <Text>1 YEAR</Text>
        </Text>
      </Text>
      <Text style={styles.body}>
        <Text style={styles.flexRow}>
          <Text>with the Grade of</Text>
          <Text>A+</Text>
        </Text>
      </Text>
      <Text style={styles.body}>
        <Text>has successfully completed on the</Text>
      </Text>
    </Page>
    </Document>
)
export default MyDocument
