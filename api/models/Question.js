/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type:"question",
    questionType:"opened_question or closed_question",
    dataFormat:"text, number, currency, date or RegExp",
    statement:"e.g. Qual tipo de declaração de imposto de renda você usa?",
    allowMultiSelection:false,
    answerOptions: [
      "e,g, Completa",
      "e,g, Simplificada",
      "e,g, Não sei"
    ]
  }
};
sails.config.models.migrate='drop';
