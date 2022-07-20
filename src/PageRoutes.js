import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

export default class PageRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/dogs" element={<DogList dogs={this.props.dogs} />} />
        <Route
          path="/dogs/:name"
          element={<DogDetails dogs={this.props.dogs} />}
        />
        <Route path="*" element={<Navigate to="/dogs" replace />} />
      </Routes>
    );
  }
}
