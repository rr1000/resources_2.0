---
title: Overview
---

# Overview

The following documentation provides a quick overview of the Catalyze HIPAA compliant API sections and in some cases, additional details around individual API calls.
All API routes currently support JSON. The set of APIs documented here are focused on the core methods around users, authentication, applications, persons, codesets, and custom classes.

In addition to the HIPAA compliant backend provided by Catalyze, with its associated set of APIs around user management, data storage, file management etc., Catalyze also provides a large and growing set of healthcare specific data models and associated APIs. These models were created to help Catalyze customers support existing and emerging data exchange standards. The Person data model and associated routes are derived from CCDA, or Blue Button Plus, but have been and continue to be extended.
The full Person model includes the core CCDA sections, mapped to the data coming out of clinical systems, but has also been extended to include sections around activity, nutrition, genetics, and financials. Our goal is to support developers building apps and technologies with leanings towards a rich, patient-centered and patient-focused model.

Below is some background on what constitutes personally identifiable information (PII) according the HHS and HIPAA.


1. Names
2. All geographical subdivisions smaller than a State, including street address, city, county, precinct, zip code, and their equivalent geocodes, except for the initial three digits of a zip  code, if according to the current publicly available data from the Bureau of the Census:
2.1. The geographic unit formed by combining all zip codes with the same three initial digits contains more than 20,000 people; and
2.2. The initial three digits of a zip code for all such geographic units containing 20,000 or fewer people is changed to 000. The 17 specific zipcodes that this applies to are: 036, 692, 878, 059, 790, 879, 063, 821, 884, 102, 823, 890, 203, 830, 893, 556, 831.
3. All elements of dates (except year) for dates directly related to an individual, including birth date, admission date, discharge date, date of death; and all ages over 89 and all elements of dates (including year) indicative of such age, except that such ages and elements may be aggregated into a single category of age 90 or older;
4. Phone numbers;
5. Fax numbers;
6. Electronic mail addresses (email);
7. Social Security numbers;
8. Medical record numbers;
9. Health plan beneficiary numbers;
10. Account numbers;
11. Certificate/license numbers;
12. Vehicle identifiers and serial numbers, including license plate numbers;
13. Device identifiers and serial numbers;
14. Web Universal Resource Locators (URLs);
15. Internet Protocol (IP) address numbers;
16. Biometric identifiers, including finger and voice prints;
17. Full face photographic images and any comparable images; and
18. Any other unique identifying number, characteristic, or code (note this does not mean the unique code assigned by the system to code the data)

There are also additional standards and criteria to protect individual's privacy from re-identification. Any code used to replace the identifiers in datasets cannot be derived from any information related to the individual and the master codes, nor can the method to derive the codes be disclosed. For example, a subject's initials cannot be used to code their data because the initials are derived from their name. Additionally, the developer must not have actual knowledge that the patient could be re-identified from the remaining identifiers in the PHI. In other words, the information would still be considered identifiable is there was a way to identify the individual even though all of the 18 identifiers were removed.
