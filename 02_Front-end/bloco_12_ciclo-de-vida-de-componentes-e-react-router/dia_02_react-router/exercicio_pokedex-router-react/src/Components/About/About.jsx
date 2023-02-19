import React, { Component } from "react";
import './About.css';

class About extends Component {
  render() {
    return (
      <section >
        <p id="about">
          The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia)
          is an invaluable tool to Trainers in the Pokémon world. It gives
          information about all Pokémon in the world that are contained in its
          database, although it differs in how it acquires and presents
          information over the different media. However, they are also only
          given to a few Trainers at a time, generally to the ones that are felt
          to have exceptional potential and skill. Regional Pokédexes give
          information about Pokémon native to a particular region, while the
          National Pokédex records information about all known Pokémon. While
          the concept of a Pokédex has existed for a long period, the digital
          version of it is a more recent invention created by Professor Oak.
          Pokédex entries typically describe a Pokémon in only two or three
          sentences. They may give background information on the habitat or
          activities of a Pokémon in the wild or other information on the
          Pokémon's history or anatomy. Pokédex entries also include height,
          weight, cry, footprint (prior to Generation VI), location, other
          forms, and a picture of the Pokémon.
        </p>
      </section>
    );
  }
}

export default About;
