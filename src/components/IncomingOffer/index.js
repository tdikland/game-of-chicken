import React from "react";
import { Grid, Icon, Table, Button } from "semantic-ui-react";

function AskTable({ asker, ask, items }) {
  return (
    <Table size={"small"} basic compact={"very"} singleLine unstackable>
      <Table.Header>
        <Table.HeaderCell colSpan="4" textAlign={"right"}>
          {asker}
        </Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {items.map((v, idx) => {
            return (
              <Table.Cell key={idx}>
                <Icon name="circle" size="small" color={v} />
              </Table.Cell>
            );
          })}
        </Table.Row>
        <Table.Row>
          {ask.map((v, idx) => {
            return (
              <Table.Cell textAlign="center" key={idx}>
                {v}
              </Table.Cell>
            );
          })}
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

function BidTable({ bidder, bid, items }) {
  return (
    <Table size={"small"} basic compact={"very"} singleLine unstackable>
      <Table.Header>
        <Table.HeaderCell colSpan="4" testAlign={"left"}>
          {bidder}
        </Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {items.map((v, idx) => {
            return (
              <Table.Cell key={idx}>
                <Icon name="circle" size="small" color={v} />
              </Table.Cell>
            );
          })}
        </Table.Row>
        <Table.Row>
          {bid.map((v, idx) => {
            return (
              <Table.Cell textAlign="center" key={idx}>
                {v}
              </Table.Cell>
            );
          })}
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

function IncomingOffer({ ask, asker, bid, bidder, items }) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={7}>
          <BidTable bid={bid} bidder={bidder} items={items} />
        </Grid.Column>
        <Grid.Column width={2} textAlign={"center"} verticalAlign={"middle"}>
          <Icon size="large" name="arrow right" />
        </Grid.Column>
        <Grid.Column width={7}>
          <AskTable ask={ask} asker={asker} items={items} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Button fluid>Accept</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid>Reject</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default IncomingOffer;
