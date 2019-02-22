import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";

const Cards = props => {
	return (
		<CardsContainer>
			{props.cards.map(card => {
				return <Card key={card.headline} card={card} />;
			})}
			{/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
		</CardsContainer>
	);
};

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propType = {
	cards: PropTypes.shape({
		headline: PropTypes.string.isRequired,
		tab: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired
	})
};

const CardsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: none;
	flex-direction: row;
	width: 100%;
	margin-top: 16px;
	flex-wrap: wrap;

	@media (min-width: 1200px) {
		width: 1200px;
	}
`;
