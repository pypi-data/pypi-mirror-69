# Version 0.8.5

### Change models
+ Fix bugs in several algorithm related to Division by 0, sqrt(0), 
+ Added more algorithm in Probabilistic-based algorithm
    + CEBaseSBO
+ Added selection by roulette wheel in root (This method now can handle negative fitness values)
+ Changed GA using roulette wheel selection instead of k-tournament method

### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples of: 
    + CE_SSDO, CE_SBO
    + GA, SBO
    
---------------------------------------------------------------------

# Version 0.8.4

### Change models
+ Fix bugs in Probabilistic-based algorithm
    + BaseCEM
    + CEBaseLCBO
    + CEBaseLCBONew: No levy
    + CEBaseSSDO
+ Fix bugs in Physics-based algorithm
    + LevyEO
+ Fix bug in Human-based algorithm
    + LCBO

+ Added Coronavirus Herd Immunity Optimization (CHIO) in Human-based group
    + Original version: OriginalCHIO
        + This version stuck in local optimal and early stopping because the infected case quickly become immunity
        + In my version, when infected case all change to immunity. I make 1/3 population become infected then
         optimization step keep going.
    + My version: BaseCHIO
    
---------------------------------------------------------------------

# Version 0.8.3

### Change models
+ Probabilistic-based algorithm
    + Added Cross-Entropy Method (CEM)
    + Added CEM + LCBO
    + Added CEM + SSDO
    
---------------------------------------------------------------------

# Version 0.8.2

### Change models
+ Bio-based group 
    + Added Virus Colony Search (VCS)
        + BaseVCS: This is the very simple version of VCS. Not the original one in the paper 
        
+ Physics-based group
    + Remove EO not good version
    
+ Human-based group
    + Fix LCBO sort population in initialization process
    
+ Added new group: Probabilistic-based algorithm
    + Added Cross-Entropy Method (CEM)
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples of: 
    + BaseVCS
    + BaseCEM

---------------------------------------------------------------------


# Version 0.8.1

### Change models
+ Evolutionary-based group 
    + Added Evolution Strategies (ES)
        + BaseES
        + LevyES: Idea ==> Top population being mutated based on strategy, Left population try to get out of their
         position based on levy-flight. 
    + Added Evolution Programming (EP)
        + BaseEP: Different than ES by operator and bout_size
        + LevyEP: Idea ==> Top population being selected based on tournament strategy round, 50% Left population
             try to make a comeback to take the good position with levy jump.
    + Added Memetic Algorithm (MA)
        + BaseMA
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples of: 
    + BaseES and LevyES
    + BaseEP and LevyEP
    + BaseMA

---------------------------------------------------------------------


# Version 0.8.0

### Change models
+ Swarm-based group
    + Added Elephant Herding Optimization (EHO) in Swarm-based group
        + BaseEHO
        + LevyEHO: Changed the Uniform distribution the "Separating operator" by Levy-flight (50%) and Gaussian(50%) 
    + Added Pigeon-Inspired Optimization (PIO) in Swarm-based group
        + BasePIO (Changed almost everything include flow the algorithm)
        + LevyPIO 
            + Changed flow of algorithm
            + Removed some unnecessary loop
            + Removed some parameters
            + Added the levy-flight in second step make algorithm more robust
    + Added Fireworks Algorithm  (FA)
    
+ Human-based group
    + Added Gaining Sharing Knowledge-based Algorithm (GSKA)
    + Added Brain Storm Optimization Algorithm (BSO)
        + BaseBSO
        + ImprovedBSO (Remove some parameters + Changed Equations + Levy-flight + BaseBSO)

+ Evolutionary-based group 
    + Added Flower Pollination Algorithm (FPA)

+ Bio-based group
    + Added Artificial Algae Algorithm (Not working yet)
 
 
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples of: 
    + BaseFA 
    + OriginalAAA
    + BaseBSO and ImprovedBSO 
    + BaseGSKA
    + BasePIO and LevyPIO
    + BaseEHO and LevyEHO
    + BaseFPA
    


---------------------------------------------------------------------

# Version 0.7.5

### Change models
+ Added Sea Lion Optimization in Swarm-based group
    + BaseSLO
    + ImprovedSLO (Shrinking Encircling + Levy + SLO)
 
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples of: BaseSLO and ImprovedSLO 


---------------------------------------------------------------------


# Version 0.7.4

### Change models
+ Added Coral Reefs Optimization in Evolutionary-based group
    + BaseCRO
    + OCRO (Opposition-based CRO)
 
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples of: BaseCRO and CRO   


---------------------------------------------------------------------


# Version 0.7.3

### Change models
+ Added Levy-flight and Opposition-based techniques in Root.py
+ Fixed codes include levy-flight and opposition-based of:
    + QSA
    + HGSO
    + TWO
    + NMRA
    + PFA
    + SFO
    + SSO
+ Added new modified version of models based on Levy-flight:
    + LCBO (LevyLCBO)
    + SSDO (LevySSDO)
    + EO (LevyEO)
    + AEO (LevyAEO)
    + MRFO (LevyMRFO)
    + NMRA (LevyNMRA)
 
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
+ examples: Added new examples tested base-version and levy-version of: LCBO, SSDO, EO, AEO, MRFO, NMRA   

---------------------------------------------------------------------

# Version 0.7.2

### Change 
+ Fix GA and WOA errors

---------------------------------------------------------------------

# Version 0.7.1

### Change 
+ Change input parameters of the root.py file 
+ Update the changed of input parameters of all algorithms
+ Update examples folders

---------------------------------------------------------------------

# Version 0.7.0

### Change models
+ Added new kind of meta-heuristics: math-based and music-based
+ Math_based:
    * SCA - Sine Cosine Algorithm
        + OriginalSCA: The original version
        + BaseSCA: My version changed the flow 
+ Music_based:
    * HS - Harmony Search
        + OriginalHS: The original version - not working
        + BaseHS: My version which changed a few things 
            * First I changed the random usaged of harmony memory by best harmoney memory
            * The fw_rate = 0.0001, fw_damp = 0.9995, number of new harmonies = population size (n_new = pop_size)
            
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
        
---------------------------------------------------------------------

# Version 0.6.0

### Change models
+ Added new kind of meta-heuristics: system-based 
+ System_based: Added the latest system-inspired meta-heuristic algorithms
    * GCO - Germinal Center Optimization
    * AEO - Artificial Ecosystem-based Optimization
     
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
        
---------------------------------------------------------------------

# Version 0.5.1

### Change models
+ Bio_based: Added the latest bio-inspired meta-heuristic algorithms
    * SBO - Satin Bowerbird Optimizer
    * WHO - Wildebeest Herd Optimization
        + OriginalWHO: The original version
        + BaseWHO: I changed the flow of algorithm
    * BWO - Black Widow Optimization
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
        
---------------------------------------------------------------------


# Version 0.5.0

### Change models
+ Added new kind of meta-heuristics: bio-based (biology-inspired) 
+ Bio_based: Added some classical bio-inspired meta-heuristic algorithms
    * IWO - Invasive Weed Optimization
    * BBO - Biogeography-Based Optimization
        
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
        
---------------------------------------------------------------------


# Version 0.4.1

### Change models
+ Human_based: Added the newest human-based meta-heuristic algorithms
    * SARO - Search And Rescue Optimization
    * LCBO: Life Choice-Based Optimization
    * SSDO - Social Ski-Driver Optimization
        + OriginalSSDO: The original version
        + BaseSSDO: The flow changed + SSDO
        
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms        
        
---------------------------------------------------------------------

# Version 0.4.0

### Change models
+ Human_based: Added some recent human-based meta-heuristic algorithms
    * TLO - Teaching Learning Optimization
        + OriginalTLO: The original version
        + BaseTLO: The elitist version
    * QSA - Queuing Search Algorithm
        + BaseQSA: The original version
        + OppoQSA: Opposition-based + QSA
        + LevyQSA: Levy + QSA
        + ImprovedQSA: Levy + Opposition-based + QSA
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms
    
---------------------------------------------------------------------

# Version 0.3.1

### Change models
+ Physics_based: Added the cutting-edge physics-based meta-heuristic algorithms
    * NRO - Nuclear Reaction Optimization  
    * HGSO - Henry Gas Solubility Optimization
        + BaseHGSO: The original version
        + OppoHGSO: Opposition-based + HGSO
        + LevyHGSO: Levy + HGSO
    * ASO - Atom Search Optimization
    * EO - Equilibrium Optimizer
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms
    
---------------------------------------------------------------------


# Version 0.3.0

### Change models
+ Physics_based: Added some recent physics-based meta-heuristic algorithms
    * WDO - Wind Driven Optimization 
    * MVO - Multi-Verse Optimizer 
    * TWO - Tug of War Optimization
        + BaseTWO: The original version
        + OppoTWO / OTWO: Opposition-based + TWO
        + LevyTWO: Levy + TWO
        + ITWO: Levy + Opposition-based + TWO
    * EFO - Electromagnetic Field Optimization
        + OriginalEFO: The original version
        + BaseEFO: My version (changed the flow of the algorithm)
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms
    
---------------------------------------------------------------------


# Version 0.2.2

### Change models
+ Swarm_based: Added the state-of-the-art swarm-based meta-heuristic algorithms
    * SRSR - Swarm Robotics Search And Rescue 
    * GOA - Grasshopper Optimisation Algorithm
    * EOA - Earthworm Optimisation Algorithm 
    * MSA - Moth Search Algorithm 
    * RHO - Rhino Herd Optimization 
        + BaseRHO: The original 
        + MyRHO: A little bit changed from BaseRHO version
        + Version3RH: A little bit changed from MyRHO version
    * EPO - Emperor Penguin Optimizer
        + OriginalEPO: Not working
        + BaseEPO: My version and works
    * NMRA - Nake Mole\-rat Algorithm
        + BaseNMRA: The original 
        + LevyNMR: Levy + BaseNMRA 
    * BES - Bald Eagle Search 
    * PFA - Pathfinder Algorithm
        + BasePFA: The original
        + OPFA: Opposition-based PFA
        + LPFA: Levy-based PFA
        + IPFA: Improved PFA (Levy + Opposition + PFA)
        + DePFA: DE + PFA
        + LevyDePFA: Levy + DE + PFA
    * SFO - Sailfish Optimizer
        + BaseSFO: The original
        + ImprovedSFO: Changed Equations + Opposition-based + SFO
    * HHO - Harris Hawks Optimization 
    * MRFO - Manta Ray Foraging Optimization
        + BaseMRFO: The original
        + MyMRFO: The version I changed the flow of the original one
    
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms
    
---------------------------------------------------------------------

# Version 0.2.1

### Change models
+ Swarm_based: Added more recently algorithm (since 2010 to 2016)
    * OriginalALO, BaseALO - Ant Lion Optimizer
    * OriginalBA, AdaptiveBA, BaseBA - Bat Algorithm
    * BSA - Bird Swarm Algorithm 
    * GWO - Grey Wolf Optimizer
    * MFO - Moth-flame optimization 
    * SSA - Social Spider Algorithm 
    * SSO - Social Spider Optimization
    
### Change others
+ models_history.csv: Update history of meta-heuristic algorithms
    
---------------------------------------------------------------------

# Version 0.2.0 

### Change models
+ root.py : Add 1 more helper functions
+ Swarm_based: Added
    * PSO - Particle Swarm Optimization
    * BFO, ABFOLS (Adaptive version of BFO) - Bacterial Foraging Optimization
    * CSO - Cat Swarm Optimization
    * ABC - Artificial Bee Colony
    * WOA - Whale Optimization Algorithm

### Change others
+ models_history.csv: Adding history of meta-heuristic algorithms
    
---------------------------------------------------------------------
# Version 0.1.1 

### Change models
+ root.py : Add more helper functions
+ Evolutionary_based
    * GA : Change the format of input parameters
    * DE : Change the format of input parameters
### Change others
+ Examples: Adding more complex examples
+ Library: "Opfunu" update the latest verion 0.4.3
    
---------------------------------------------------------------------
# Version 0.1.0 (First version)

### Changed models
+ root.py (Very first file, the root of all algorithms)
+ Evolutionary_based
    * GA - Genetic Algorithm
    * DE - Differential Evolution

