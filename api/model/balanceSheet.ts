/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface BalanceSheet { 
    symbol?: string;
    id?: string;
    key?: string;
    subkey?: string;
    updated?: number;
    date?: number;
    reportDate?: string;
    fiscalDate?: string;
    currency?: string;
    currentCash?: number;
    shortTermInvestments?: number;
    receivables?: number;
    inventory?: number;
    otherCurrentAssets?: number;
    currentAssets?: number;
    longTermInvestments?: number;
    propertyPlantEquipment?: number;
    goodwill?: number;
    intangibleAssets?: number;
    otherAssets?: number;
    totalAssets?: number;
    accountsPayable?: number;
    currentLongTermDebt?: number;
    otherCurrentLiabilities?: number;
    totalCurrentLiabilities?: number;
    longTermDebt?: number;
    otherLiabilities?: number;
    minorityInterest?: number;
    totalLiabilities?: number;
    commonStock?: number;
    retainedEarnings?: number;
    treasuryStock?: number;
    capitalSurplus?: number;
    shareholderEquity?: number;
    netTangibleAssets?: number;
    filingType?: string;
    fiscalQuarter?: number;
    fiscalYear?: number;
}

