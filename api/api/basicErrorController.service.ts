/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { ModelAndView } from '../model/modelAndView';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class BasicErrorControllerService {
  protected basePath = 'http://localhost:8081';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          );
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingDELETE(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingDELETE(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingDELETE(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingDELETE(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.delete<ModelAndView>(
      `${this.configuration.basePath}/error`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingGET(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingGET(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingGET(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingGET(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<ModelAndView>(
      `${this.configuration.basePath}/error`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingHEAD(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingHEAD(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingHEAD(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingHEAD(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.head<ModelAndView>(
      `${this.configuration.basePath}/error`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingOPTIONS(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingOPTIONS(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingOPTIONS(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingOPTIONS(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.options<ModelAndView>(
      `${this.configuration.basePath}/error`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingPATCH(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingPATCH(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingPATCH(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingPATCH(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.patch<ModelAndView>(
      `${this.configuration.basePath}/error`,
      null,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingPOST(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingPOST(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingPOST(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingPOST(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.post<ModelAndView>(
      `${this.configuration.basePath}/error`,
      null,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingPUT(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingPUT(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingPUT(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingPUT(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.put<ModelAndView>(
      `${this.configuration.basePath}/error`,
      null,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * errorHtml
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public errorHtmlUsingTRACE(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<ModelAndView>;
  public errorHtmlUsingTRACE(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpResponse<ModelAndView>>;
  public errorHtmlUsingTRACE(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<HttpEvent<ModelAndView>>;
  public errorHtmlUsingTRACE(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'text/html'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['text/html'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return {} as Observable<any>;
  }
}
