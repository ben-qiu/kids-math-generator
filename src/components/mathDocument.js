import React from "react";
import PropTypes from 'prop-types';
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    flexDirection: "row"
  },
  title: {
    fontSize: 24,
    textAlign: "center"
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12
  },
  text: {
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    textAlign: "justify"
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "heavy"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexGrow: 2
  }
});

const MathDocument = ({ header, questions }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.body}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.section}>
          {questions.slice(0, 15).map((question, index) => (
            <Text style={styles.text} key={index}>
              ({index + 1}) {question}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          {questions.slice(15, 30).map((question, index) => (
            <Text style={styles.text} key={index}>
              ({index + 16}) {question}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          {questions.slice(30, 45).map((question, index) => (
            <Text style={styles.text} key={index}>
              ({index + 31}) {question}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

MathDocument.propTypes = {
  header: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.string),
}

MathDocument.defaultProps = {
  header: "Math challenge",
  questions: [],
}

export default MathDocument;
