import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import main from "./main.jpg"
import logo from "./logo.png"
import logo_siit from "./siit.png"

// Define your styles
const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica',
  },
  textOverlay: {
    position: 'absolute',
    top: '80',
    textAlign: 'center',
    fontWeight:500,
    color: 'balck', // Text color
    fontSize: 44, // Font size
    
    
  },
  textOverlay2: {
    position: 'absolute',
    top: '140',
    textAlign: 'center',
    fontWeight:500,
    color: 'balck', // Text color
    fontSize: 28, // Font size
    
    
  },
   certificate: {
    position: 'absolute',
    top: '200',
    textAlign: 'center',
    
    color: 'balck', // Text color
    fontSize: 24, // Font size
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textDecoration: 'underline',
  },
  content: {
    position: 'absolute',
    top: '200',
    fontSize:20,
    marginBottom: 10,
  },
  content1: {
    position: 'absolute',
    top: '250',
    fontSize: 48,
    
    fontWeight:800
  },
  content2: {
    position: 'absolute',
    top: '50%',
    fontSize: 16,
    marginBottom: 10,
  },
  content3: {
    position: 'absolute',
    top: '55%',
    fontSize: 16,
    marginBottom: 10,
  },
  content4: {
    position: 'absolute',
    top: '650',
    fontSize: 16,
    marginBottom: 10,
  },
  content5: {
    position: 'absolute',
    top: '450',
    
        width: 150,
        height: 150
    
   
  },
  content6: {
    position: 'absolute',
    top: '50',
    
        width: 150,
        height: 100,
        marginLeft:20
    
    
   
  },
});

// Your React PDF component
const MyPDF = (props) => (
  <Document>
    <Page  size={{ width: 990, height: 732 }}>
      <View style={styles.imageContainer}>
        <Image src={main} />
        
        <Text style={styles.textOverlay2}>  CERTIFICATE OF COMPLETION </Text>
        <Text style={styles.content}>This certificate is presented to</Text>
        <Text style={styles.content1}>{props.serchedUser.studentName}</Text>
        <Text style={styles.content2}>has successfully completed the course on</Text>
        <Text style={styles.content3}><Text style={{ fontWeight: 'bold' }}>{props.serchedUser.courseName}</Text></Text>
        <Text style={styles.content4}>Date: {props.serchedUser.completedDate}</Text>
        <Image src={logo} style={styles.content5} />
        <Image src={logo_siit} style={styles.content6} />
      </View>
    </Page>
  </Document>
);

export default MyPDF;
