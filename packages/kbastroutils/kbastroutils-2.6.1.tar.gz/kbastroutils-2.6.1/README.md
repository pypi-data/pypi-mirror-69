# KBAstroUtils

This is a collection of modules for analyses related to astrophysics by Dr. Kornpob Bhirombhakdi. Contact: kbhirombhakdi@stsci.edu

Tasks include:

    - dqmask.py = handle data quality (DQ) arrays
    
    - container.py = handle declaring attibutes given keys and values
    
    - segmentation.py = wrapper for making a segmentation map (used to be source.py in version < 1.2.0)
    
    - sub2full.py = mapping a subarray image back to its full frame
    
    - gnd.py = wrapper, and main class for grism reduction
    
    - grismconf.py = read conf file for grism reduction
    
    - grismsens.py = read sens file for grism reduction
    
    - grismapcorr.py = read aperture correction table, and calculate aperture correction factor
    
    - grismmeta.py = construct meta info
    
    - make_sip.py = calculate Simple Imaging Polynomial (SIP)
    
    - photapcorr.py = read photometric calibration table, and prepare calibration factors (i.e., encircled energy correction, and photometric AB zeropoint)
    
    - mag2flux.py = converting ABmag to flam
        
Known issues:

    - ACS photometric zeropoints are set to 0.

    - Memory
    
    - No description/documentation
    
    - Handling other telescopes
        
    - flux2mag.py
    
    - AB2Vega.py
    
    - Vega2AB.py
    
    - WFC3 subarray
    
    - drz gets brighter about 10%
    
    - test new code with ACS-WFC, and other WFC3-IR
    
Next
    
    - Combine 1D spectra
    
    - Use assertion for error handling (http://swcarpentry.github.io/python-novice-inflammation/09-defensive/index.html)
    
    - HST-ACS-WFC flux calibration
    
    - Fix drz getting brigther
    
v.2.5.0

    - Implement ACS subarray

    - Implement ('HST','ACS','WFC') as identifier

    - Implement grismcrclean.py, grismmodel.py, grismcalibpath.py, grismdrz.py

    - Change grismconf.py, grismsens.py, gnd.py, dqmask.py
            
v.2.4.0

    - Implement grismmeta.py
    
    - HST-ACS-WFC is available for wavelength calibration, but not flux calibration
    
    - HST-ACS-WFC subarray is applicable
    
    - Change the construction of GrismCONF, and GrismSens
        
v.2.3.0

    - GND.make_pairs(pairs=None) can automatically make pairs
    
    - GND.make_xyd(xyd=None, init=init, inittype='radec') can automatically find a centroid given init
    
    - GND.show(method='meta', output=True) returns the table instead of displaying it
    
    - GND.make_drz() is deactivated
    
v.2.2.0

    - GND.save takes filename
    
    - Fix GND.show(method='flam') handling xmin, xmax
    
    - GND.show(method='stamp') takes dqon

v.2.1.0

    - Add functionalities in GND.show(method='clean', traceon=True, zoom=True)
    
    - Implement: photapcorr.py, mag2flux.py

v.2.0.0

    - New APIs: gnd.py
    
    - Demo provided
    
    - Implement: grismapcorr.py, make_sip.py
    
---

v.1.3.1

    - Fix import

v.1.3.0

    - Implement: grismconf.py, gnd.py, grismsens.py
    
v.1.2.0

    - Implement: sub2full.py

    - Change: source.py to segmentation.py
    
    - Fix description: segmentation.py

v.1.1.0

    - Implement: container.py, source.py
    
    - Fix description: dqmask.py
    
v.1.0.2

    - Fix description of dqmask.py
    
v.1.0.1

    - Fix import modules in dqmask.py
    
v.1.0.0

    - Implement dqmask.py
    