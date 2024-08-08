import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class FightOptionsInformations implements INetworkType
{

	public static readonly protocolId: number = 1574;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public isSecret: boolean = false;
	public isRestrictedToPartyOnly: boolean = false;
	public isClosed: boolean = false;
	public isAskingForHelp: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return FightOptionsInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightOptionsInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightOptionsInformations.endpointServer;
    }

    public initFightOptionsInformations(isSecret: boolean = false, isRestrictedToPartyOnly: boolean = false, isClosed: boolean = false, isAskingForHelp: boolean = false): FightOptionsInformations
    {
        this.isSecret = isSecret;
        this.isRestrictedToPartyOnly = isRestrictedToPartyOnly;
        this.isClosed = isClosed;
        this.isAskingForHelp = isAskingForHelp;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightOptionsInformations(output);
    }

    public serializeAs_FightOptionsInformations(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.isSecret);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.isRestrictedToPartyOnly);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.isClosed);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.isAskingForHelp);
        output.writeByte(_box0);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightOptionsInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.isSecret = BooleanByteWrapper.getFlag(_box0,0);
        this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_box0,1);
        this.isClosed = BooleanByteWrapper.getFlag(_box0,2);
        this.isAskingForHelp = BooleanByteWrapper.getFlag(_box0,3);
    }

    private deserializeAs_FightOptionsInformations(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}