/* 
Title: Hello World Example
Version: 0.1
Purpose: Send a Hello World message on the body and set a HTTP Header.
(c) Copyright 2021 Jonathan Carvalho. Licensed under Apache 2 license.
*/

export function onClientRequest(request) {
  //onClientRequest: This event happens for every request as the request is received, before checking if a response is available in cache.
  //Use this event for request modifications before going to cache or to origin.
  request.respondWith(200, {},'<html><body><h1>Hello World From Akamai EdgeWorkers</h1></body></html>');
}

export function onOriginRequest (request) {
  // onOriginRequest: This happens just before sending the request to the origin.
  //This event only happens if the response is not served from cache and not constructed on the edge.
  //Use this event if you want to affect the response coming back from the origin.
}

export function onOriginResponse(request, response) {
  //onOriginResponse: This event happens as the origin response is created.
  //The event only happens if the response is not served from cache and not constructed on the edge.
  //Use this event if you want to modify the response before it is cached.
}

export function onClientResponse(request, response) {
  //onClientResponse: This event happens before the response is sent to the client.
  //Note: You cannot currently modify the response body. You can only modify the response headers.
  response.setHeader('X-Hello-World', 'From Akamai EdgeWorkers')
}

export function responseProvider(request) {
  //responseProvider: This event happens if the response is not already found in cache.
}